import findspark
findspark.init()
import csv
from pyspark.sql import SQLContext
from pyspark import SparkContext
from pyspark.sql import Row
from pandas import Series, DataFrame
import pandas as pd
import re
sc = SparkContext()


file_name = 'hdfs://master:9000/user/project/Mask_RCNN/1/submit.csv'
sqlContext = SQLContext(sc)

df = sqlContext.read.format("com.databricks.spark.csv").option("header", "true")\
.option("inferSchema", "true").load(file_name)

rdd_data = df.rdd
p = re.compile('(.*)_\d{1,2}$')
rdd_mapped = rdd_data.map(lambda x: Row(ImageId = x[0], EncodedPixels = x[1], ImageGroup = p.match(x[0]).group(1)))


ImgId = []
EncodeP = []
EnGroup = []
cnt = rdd_mapped.count()
lst = rdd_mapped.take(cnt)


for i in range(0,cnt):
        ImgId.append(lst[i][2])
        EncodeP.append(lst[i][0])
        EnGroup.append(lst[i][1])


raw_data = {'ImageId': ImgId,
           'EncodedPixels': EncodeP,
           'EncodedGroup': EnGroup}


data = DataFrame(raw_data)

data.to_csv("path")
