#! /usr/bin/python3
#%pylab
import numpy as np
import pandas as pd
import os,glob
from pandas import DataFrame
root=os.getcwd()
join=os.path.join
process_dir=join(root,'Mask_RCNN/processed/nucleus')
process_dir
for i in glob.glob(process_dir+"/*"):
    temp=[j for j in glob.glob(i+'/*')]
    df=pd.read_csv(join(i,"submit.csv"))
    df['Size'] = df.index
    for k in range(len(df)):
        df['Size'][k]=glob.glob(process_dir+"/"+i.split('/')[-1]+"/"+df['ImageId'][k]+"*")[0].split("(")[1].split(")")[0]
    df.to_csv(join(i,"result.csv"), index=False)
    print("Saved!")

