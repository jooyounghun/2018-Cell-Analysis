
# coding: utf-8

# In[1]:


import findspark
findspark.init()
import csv
from pyspark import SparkContext
from pyspark.sql import *
import numpy as np
from pandas import Series, DataFrame
import pandas as pd
sc = SparkContext()
import os



            
            


# In[ ]:


shape = [1600,1600] #initialization shape


# In[2]:




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


# In[3]:


def getvalidindex(text_file):
    validindex = []
    cnt = text_file.count()
    lst = text_file.take(cnt)
    for i in range(1,cnt):
        if len(lst[i].split(",")[1]) != 0:
            validindex.append(i)
    return validindex


# In[4]:


def throwawaynonedata(text_file,validindex):
    ImgId = []
    DecodeP = []
    cnt = text_file.count()
    lst = text_file.take(cnt)
    for i in range(0,len(validindex)):
        ImgId.append(lst[validindex[i]].split(",")[0])
        DecodeP.append(rle_decode(lst[validindex[i]].split(",")[1],shape))    
    return ImgId, DecodeP


# In[5]:


def makedataframe(ImgId, DecodeP):
    raw_data = {'ImageId': ImgId,
           'DecodedPixels': DecodeP}
    data = DataFrame(raw_data)
    return data


# In[13]:



path_dir = "hdfs://master:9000/usr/project/source/processed/submit_20180609T225606/submit.csv"


        
        

#if file.endswith(".csv"):
 #   print(file)


# In[10]:


text_file = sc.textFile("hdfs://master:9000/usr/project/source/processed/submit_20180609T225606/submit.csv")


# In[12]:


text_file.count()


# In[ ]:


for root, dirs, files in os.walk("hdfs://master:9000/user/project/Mask_Distributed_CSV/"):
    
    for fname in files:
        full_fname = os.path.join(root,fname)
        print(full_fname)
        if '.csv' in full_fname:
            
            text_file = sc.textFile(full_fname)
            validindex = []
            
            cnt = text_file.count()
            
            lst = text_file.take(cnt)
            for i in range(1,cnt):
                if len(lst[i].split(",")[1]) != 0:
                    validindex.append(i)
            ImgId_, DecodeP_ = throwawaynonedata(text_file,validindex_)
            data_ = makedataframe(ImgId_, DecodeP_)
            print(data_[0])

