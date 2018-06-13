#! /usr/bin/python3
import os
import glob
import shutil
root=os.getcwd()
process=os.path.join(root,'process')
temp=os.path.join(root,'processTemp')
abspath=os.path.abspath("./")
sum_list=os.listdir(process)
sum_list=sorted(sum_list)
for idx,_list in enumerate(sum_list):
    buffer=(round)(idx/1000)
    path=os.path.join(process,_list)
    dest=os.path.join(temp,str(buffer))
    shutil.move(path,dest)
    print(path,"\n",dest,"\nmove complete")

