#! /usr/bin/python3
import numpy as np
import cv2
import os
import glob
root=os.getcwd()
dataset=os.path.join(root,'dataset')
process=os.path.join(root,'process')
abspath=os.path.abspath("./")
for root, dirs, files in os.walk(dataset):
    if not root.find("./.") or 0<=len(files) <=1 :
        continue
    for file in files:
        abspath=os.path.abspath(root)
        os.path.join(abspath,file)
        abspath+='/'
        abspath+=file
        print(abspath)
        name=abspath[21:-4].replace("/",'')
        ret, images = cv2.imreadmulti(abspath)
        for idx ,img in enumerate(images):
            savedir=os.path.join(process,name)+'_'+str(idx)+'/images'
            os.makedirs(savedir)
            cv2.imwrite(savedir+'/'+name+'_'+str(idx)+'.png' ,img,params=[cv2.IMWRITE_PNG_COMPRESSION,0])
