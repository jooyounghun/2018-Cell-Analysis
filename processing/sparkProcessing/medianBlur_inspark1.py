#! /usr/bin/python3
import findspark
findspark.init()
import os,glob
import numpy as np
root=os.getcwd()
join=os.path.join
import cv2
import imageio
from pyspark import SparkContext
URI           = sc._gateway.jvm.java.net.URI
Path          = sc._gateway.jvm.org.apache.hadoop.fs.Path
FileSystem    = sc._gateway.jvm.org.apache.hadoop.fs.FileSystem
Configuration = sc._gateway.jvm.org.apache.hadoop.conf.Configuration
fs = FileSystem.get(URI("hdfs://localhost:9000"), Configuration())
status = fs.listStatus(Path('/usr/jaehun/source'))
sc=SparkContext()

def fun(img):
    img=cv2.medianBlur(img,15)
    return img

for fileStatus in status:
    df = imageio.imread(join(str(fileStatus.getPath()),'*.png'))
    images = sc.parallelize(df)
    cv2.imwrite(j[:-4]+str(df.shape)+'.png',np.array(images.map(fun).collect()).squeeze())
