#! /usr/bin/python3
import numpy as np
import pandas as pd
import os,glob
from pandas import DataFrame
from operator import mul
root=os.getcwd()
join=os.path.join
process_dir=join(root,'Mask_RCNN/processed/nucleus')
process_dir
def rle_encode(mask):
    """Encodes a mask in Run Length Encoding (RLE).
    Returns a string of space-separated values.
    """
    assert mask.ndim == 2, "Mask must be of shape [Height, Width]"
    # Flatten it column wise
    m = mask.T.flatten()
    # Compute gradient. Equals 1 or -1 at transition points
    g = np.diff(np.concatenate([[0], m, [0]]), n=1)
    # 1-based indicies of transition points (where gradient != 0)
    rle = np.where(g != 0)[0].reshape([-1, 2]) + 1
    # Convert second index in each pair to lenth
    rle[:, 1] = rle[:, 1] - rle[:, 0]
    return " ".join(map(str, rle.flatten()))


def rle_decode(rle, shape):
    """Decodes an RLE encoded list of space separated
    numbers and returns a binary mask."""
    rle = list(map(int, rle.split()))
    rle = np.array(rle, dtype=np.int32).reshape([-1, 2])
    rle[:, 1] += rle[:, 0]
    rle -= 1
    mask = np.zeros([shape[0] * shape[1]], np.bool)
    for s, e in rle:
        assert 0 <= s < mask.shape[0]
        assert 1 <= e <= mask.shape[0], "shape: {}  s {}  e {}".format(shape, s, e)
        mask[s:e] = 1
    # Reshape and transpose
    mask = mask.reshape([shape[1], shape[0]]).T
    return mask


def mask_to_rle(image_id, mask, scores):
    "Encodes instance masks to submission format."
    assert mask.ndim == 3, "Mask must be [H, W, count]"

    if mask.shape[-1] == 0:
        return "{},".format(image_id)

    mask = np.max(mask * np.reshape(order, [1, 1, -1]), -1)

    lines = []
    for o in order:
        m = np.where(mask == o, 1, 0)

        if m.sum() == 0.0:
            continue
        rle = rle_encode(m)
        lines.append("{}, {}".format(image_id, rle))
    return "\n".join(lines)

for i in glob.glob(process_dir+"/*/result.csv"):
    df=pd.read_csv(i)
    df['total_area'] = df.index
    df['cell_area'] = df.index
    df['cell_ratio'] = df.index
    df['cell_ratio']=df['cell_ratio'].astype(np.float32)
    for num in range(len(df)):
        if df['EncodedPixels'].isnull()[num] :
            continue
        df['cell_area'][num]=float(np.array(rle_decode(df['EncodedPixels'][num],list(int(item) for item in df['Size'][num].split(',')))).reshape(-1).tolist().count(True))
        df['total_area'][num] = float(np.prod([int(item) for item in df['Size'][num].split(',')]))
        df['cell_ratio'][num]=((df['cell_area'][num])/(df['total_area'][num]))

    df.to_csv(join(i[:-10],"area.csv"))
    print("Saved!")


    

