# -------------------------------------------------------------------------------
# Description:  
# Reference:
# Name:   get_JsonData
# Author: wujunchao
# Date:   2022-06-29
# -------------------------------------------------------------------------------
import json
import os
from knowledge_extraction import textTransformer
from urllib.request import urlopen

# key = 'a04228e7acda94233da8afd453142430a8a3adee'
# website = input() + key
# URL = urlopen(website)
# jsonData = URL.read()
#
# text = json.loads(jsonData)
# print(text)

obj = json.load(open('location.json', 'r', encoding='utf-8'))

path = r"./res_story"
datanames = os.listdir(path)
ilist = []
for i in datanames:
    ilist.append(i)
json = {}
timeline = []
cc = []
for item in ilist:
    item_path = path + "\\" + item
    file = open(item_path, 'r', encoding="utf-8")
    content = file.read()
    file.close()
    item_json = textTransformer(content)["allLine"]
    json[item.split('.txt')[0]] = item_json
    for i in item_json:
        i.append(item.split('.txt')[0])
    timeline = timeline + item_json

for key in json.keys():
    data = json[key]
    i_list = []
    for item_data in data:
        if item_data[1] == '未知':
            i_list.append(item_data)
        else:
            for item in item_data[1].split("、"):
                if item in obj.keys():
                    item_data.append(obj[item])
                    break
                else:
                    pass
    for i in i_list:
        data.remove(i)

# 演化数据
print(json)
print(json.keys())
length = 0
name = ""
for js in json.keys():
    if len(json[js]) > length:
        length = len(json[js])
        name = js
print(name)

# 时空数据
for item in timeline:
    try:
        time_index = item[0].split("（")[1].split("）")[0]
        if len(time_index) is 3:
            time_index = "0" + time_index

        item.append(time_index)
    except:
        print(time_index)

for index in range(len(timeline)):
    for j in range(1, len(timeline) - index):
        if timeline[j - 1][3] > timeline[j][3]:
            # 交换两者数据，这里没用temp是因为python 特性元组。
            timeline[j - 1], timeline[j] = timeline[j], timeline[j - 1]


print(timeline)
print(len(timeline))
for i in timeline:
    print(i)



