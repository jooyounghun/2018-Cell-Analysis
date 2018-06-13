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
process_dir=join(root,'processTemp')
sc=SparkContext()

def fun(img):
    img=cv2.medianBlur(img,15)
    return img

for i in glob.glob(process_dir+"/*"):
    for j in glob.glob(i+'/*/images/*.png'):
        df = imageio.imread(j)
        images = sc.parallelize(df)
        cv2.imwrite(j[:-4]+str(df.shape)+'.png',np.array(images.map(fun).collect()).squeeze())
        os.remove(j)

