import findspark
findspark.init()
import csv
from pyspark import SparkContext
from pyspark.sql import *
import numpy as np
from pandas import Series, DataFrame
import pandas as pd
import os
sc = SparkContext()


os.listdir("hdfs://master:9000/usr/project/source/processed/submit_20180609T154534/")[0]
exit()


shape = [832,992] #initialization shape

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

def getvalidindex(text_file):
    validindex = []
    cnt = text_file.count()
    lst = text_file.take(cnt)
    for i in range(1,cnt):
        if len(lst[i].split(",")[1]) != 0:
            validindex.append(i)
    return validindex

def throwawaynonedata(text_file,validindex):
    ImgId = []
    DecodeP = []
    cnt = text_file.count()
    lst = text_file.take(cnt)
    vcnt = len(validindex)
    for i in range(0,vcnt):
        ImgId.append(lst[validindex[i]].split(",")[0])
        DecodeP.append(rle_decode(lst[validindex[i]].split(",")[1],shape))
    return ImgId, DecodeP


def makedataframe(ImgId, DecodeP):
    raw_data = {'ImageId': ImgId,
           'DecodedPixels': DecodeP}
    data = DataFrame(raw_data)
    return data


def makepicklefile(data,i):
    data.to_pickle("/home/project/Mask_RCNN/results/nucleus/"+ str(i) +"/submit.pkl")


for i in range(9,10):
  text_file = sc.textFile("hdfs://master:9000/usr/project/source//"+ str(i) +"/submit.csv")
  validindex_ = getvalidindex(text_file)
  ImgId_, DecodeP_ = throwawaynonedata(text_file,validindex_)
  data_ = makedataframe(ImgId_,DecodeP_)
  makepicklefile(data_,i)

