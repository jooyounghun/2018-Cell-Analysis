#! /usr/bin/python3
import os
path = "/home/project/Mask_RCNN/results/nucleus/"
num = 1
print("function start")
for fname in os.listdir(path) :

    fullpath = path + fname
    if os.path.isdir(fullpath) == False:
        continue
    print(fname, num)
    os.rename(path+fname, path+str(num))
    num = num + 1
