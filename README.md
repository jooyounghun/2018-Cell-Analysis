# 2018-1 Group Project
___

## About

2018_CSE43600_Class_Project

cell_analysis

Most big data solutions are based on large text data. However, there is a growing demand for information to process large amounts of images.

We use the Deep Learning algorithm to convert a large amount of data sets into text that can be adopt distributed algorithm, and can be process in spark.
## Getting Started
Big data processing for large images.

## Getting Started

### Step
* Downloading dataset and training Mask-RCNN
  * using `processing/Mask_RCnn/nucleus.py` train
* Preprocessing  image using Mask-RCNN
  * using `processing/processing/Mask_RCnn/nucleus.py` detect
  * using `processing/preprocessing/frame_spilt.py` split frame in local
  * using `processing/preprocessing/spilt.py`split split file 103's batch
  * using `processing/preprocessing/getSize.py` get size images for decode metadata
  * using `processing/preprocessing/csv_local.py or cell_ratio_export.py` get decoding data in cluster
* Store Data localToHDFS
  * using `processing/hdfs_script/copyToHdfs2` copyFromLocal using script
* Spark processing `processing/sparkProcessing/medianBlur_inspark.py` adopt median filter
* Visualize results
  * using `visualization` node.js
  * `node app 8060`


###  Mask_RCNN

![](https://user-images.githubusercontent.com/22635090/41474752-ce1c43c0-70f7-11e8-8cb7-988c77745bd2.gif)

We use the deep-run algorithm mask-rcnn to extract the features of the image.
This algorithm combines a network called Faster-rcnn and a network R-FCN(Object Detection via Region-based Fully Convolutional Networks).



If you want to know more about the above algorithm, please refer to the link below.

* [Mask RCNN](https://arxiv.org/abs/1703.06870)
* [Faster RCNN](https://arxiv.org/abs/1506.01497)
* [R-FCN](https://arxiv.org/abs/1605.06409)


### Dataset

[celltracking challenge](http://www.celltrackingchallenge.net/datasets.html)

![](https://user-images.githubusercontent.com/22635090/41474761-d408cea2-70f7-11e8-922a-4e0e35042af1.gif)

* Class: 15 (2D or 3D)
* File type: tiff
* Size: ~46Gbytes


### Prerequisites
* Spark2.1.1
* Hadoop-2.7.5
* Tensorflow 1.8.0
* Node.js 5.12.0
* opencv 3.4.0

### Preprocessing
#### Unzip dataset

you can use unzip script in `processing_script`

```
./unzip
```

#### Train Segmentation

Train a new model starting from ImageNet weights using `train` dataset

```
python3 nucleus.py train --dataset=/path/to/dataset --subset=train --weights=imagenet
```

#### frame_split

Modify it to your location and run it. tiff image is converted to png image.

```
python3 frame_split.py
```

#### Segmentation dataset

```
python3 nucleus.py detect --dataset=/path/to/dataset --subset=stage1_test --weights=<last or /path/to/weights.h5>
```

#### split batch

if you can run above code, you should split image to batch using `preprocessing/split.py`.

```#! /usr/bin/python3
import os
import glob
import shutil
root=os.getcwd()
source=''
target=''
process=os.path.join(root,source)
temp=os.path.join(root,target)
abspath=os.path.abspath("./")
sum_list=os.listdir(process)
sum_list=sorted(sum_list)
for idx,_list in enumerate(sum_list):
    buffer=(round)(idx/1000)
    path=os.path.join(process,_list)
    dest=os.path.join(temp,str(buffer))
    shutil.move(path,dest)
    print(path,"\n",dest,"\nmove complete")
```

_you must modify file target and source folder name in code_

### processing

#### [medianFilter](https://en.wikipedia.org/wiki/Median_filter)

The median filter is a nonlinear digital filtering technique, often used to remove noise from an image or signal. Such noise reduction is a typical pre-processing step to improve the results of later processing (for example, edge detection on an image).

__Image has a noise! So  algorithm does not work well!__

![](https://user-images.githubusercontent.com/22635090/41164680-b3e56238-6b76-11e8-8571-8ed065f7ba73.png)

__After Median_filter__

![](https://user-images.githubusercontent.com/22635090/41164538-61b0d204-6b76-11e8-8fc2-e699483fcf5c.png)

#### csv processing

Perform the csv operation on the following metadata.

![](https://user-images.githubusercontent.com/22635090/41009654-4b96cc22-696d-11e8-8be3-f55140a68f78.png)

You can get an array of these masks, and you can get information about cell ratios and location information.

![](https://user-images.githubusercontent.com/22635090/41009236-b1870d7e-696a-11e8-8fc2-187830d9a92c.png)

![](https://user-images.githubusercontent.com/22635090/41474395-d0c195ea-70f6-11e8-81c7-b04736520785.png)

### Visualize

Visualization is performed by inserting csv data into MYSQL.


The demo has the following MVC pattern.

![](https://user-images.githubusercontent.com/22635090/41474377-ca43db6a-70f6-11e8-8513-5fef6424f7a4.png)

Below is a demo video.

![](https://user-images.githubusercontent.com/22635090/41474210-61c6acd4-70f6-11e8-9a5f-ffe9ddcf43da.gif)


### milestone

![](https://user-images.githubusercontent.com/22635090/41474335-a8d5fe0e-70f6-11e8-821b-940cd098b980.png)
