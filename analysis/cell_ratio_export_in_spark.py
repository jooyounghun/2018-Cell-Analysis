
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


# In[ ]:


def rle_decode(rle, shape):
    """Decodes an RLE encoded list of space separated
    numbers and returns a binary mask."""
    print("enter rle_decode")
    rle = list(map(int, rle.split()))
    rle = np.array(rle, dtype=np.int32).reshape([-1, 2])
    rle[:, 1] += rle[:, 0]
    rle -= 1
    mask = np.zeros([int(shape[0]) * int(shape[1])], np.bool)
    for s, e in rle:
        assert 0 <= s < mask.shape[0]
        assert 1 <= e <= mask.shape[0], "shape: {}  s {}  e {}".format(shape, s, e)
        mask[s:e] = 1
    # Reshape and transpose
    mask = mask.reshape([int(shape[1]), int(shape[0])]).T
    print("finish decode")
    return mask


# In[ ]:


def folderfilesearch(dirname):
    file_list = os.listdir(dirname)
    file_list.sort()
    return file_list


# In[ ]:


def searchshape(text_file, folderfilelst):
    print("enter searchshape")
    cnt = text_file.count()
    print("cnt: "+str(cnt))
    lst = text_file.take(cnt)
    ImageIdlst = []
    CellRatio = []
    for i in range(0,cnt):
        for item in folderfilelst:
            if item.find(lst[i].split(",")[0]) is not -1: # find shape
                print(str(i)+"loop")
                start_index = item.find('(')
                end_index = item.find(')')
                shape_string = item[start_index+1:end_index]
                shape = shape_string.split(', ')
                # make 2 dim array
                if lst[i].split(",")[1] == "":
                    print("NONE")
                    break
                pickle_file = rle_decode(lst[i].split(",")[1],shape)
                Truenum = 0
                # have to export number of True
                for col in range(0,int(shape[0])):
                    for row in range(0,int(shape[1])):
                        if pickle_file[col][row] == True:
                                Truenum  = Truenum + 1
                
                
                Cellratio = (Truenum / (float(shape[0]) * float(shape[1])))*100
                    
                ImageIdlst.append(lst[i].split(",")[0])
                CellRatio.append(Cellratio)
                break
                
    print("finish search shape")
    return ImageIdlst, CellRatio


# In[ ]:


def makedataframe(ImgId, CellRatio):
    print("enter makedata frame")
    raw_data = {'ImageId': ImgId,
           'CellRatio(%)': CellRatio}
    data = DataFrame(raw_data)
    print("finish make data frame")
    return data  


# In[ ]:


def makecsvfile(data,num,path):
    print("enter make csv file")
    data.to_csv(path + str(num)+"update.csv")
    print("finish make csv file")

# In[ ]:
hadoop = sc._jvm.org.apache.hadoop
lst = []
fs = hadoop.fs.FileSystem
conf = hadoop.conf.Configuration() 
path = hadoop.fs.Path('/usr/project/source/processed')
pathlist = []
totalpnglist = []
csvlist = []
for f in fs.get(conf).listStatus(path):
    _path = f.getPath().toString()
    _path = _path.split("hdfs://master:9000")[1]
    npath = hadoop.fs.Path(_path)
    chk = False
    pnglist = []
    for nf in fs.get(conf).listStatus(npath):
        fpath = nf.getPath().toString()
        
        if fpath.find("/submit.csv") != -1 :
            csvlist.append(fpath)
            chk = True
        if fpath.find(".png") != -1 :
            pnglist.append(fpath)
            
    if chk == True :
        totalpnglist.append(pnglist)
print("list up finish")
cnt = 0
for slist in totalpnglist :
    print(csvlist[cnt])
    print(slist[0])
    cnt += 1
    
    


# In[ ]:

print("make csv file start")
ImageId_ = []
CellRatio_ = []
cnt = 0
for slist in totalpnglist :
    print("pnglist")
    print(csvlist[cnt])
    text_file_ = sc.textFile(csvlist[cnt])
    ImageId_ , CellRatio_ = searchshape(text_file_,slist)
    data_ = makedataframe(ImageId_,CellRatio_)
    makecsvfile(data_,cnt+1,"~/result/")
    print(str(cnt)+"th process finish")
    cnt += 1
