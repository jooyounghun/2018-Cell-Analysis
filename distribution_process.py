import sys
import os


# directory path
path_dir = '/home/project/for csv distribution'



# get file name to list
file_list = os.listdir(path_dir)
file_list.sort()


# we can distribute file through sys parameter
searchstring = sys.argv[1]


# we can search file which include some string in the list
for file_name in file_list:
  if searchstring in file_name:
     os.rename('/home/project/for csv distribution/'+file_name,'/home/project/Mask_Distributed_CSV/' +searchstring + '/'+ file_name)

