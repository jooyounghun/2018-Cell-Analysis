# 2018_project
___

## About

2018_CSE43600_Class_Project

cell_analysis

## Getting Started


### Dataset
[celltracking challenge](http://www.celltrackingchallenge.net/datasets.html)
![](http://www.celltrackingchallenge.net/Media/C2DL-MSC.gif)


### Prerequisites
* Spark2.1.1
* Hadoop-2.7.5
* Tensorflow 1.8.0
* Node.js 5.12.0
* opencv 3.4.0

### Preprocessing

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
