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


path = r"/res_story"
datanames = os.listdir(path)
list = []
for i in datanames:
    list.append(i)
json = {}
for item in list:
    item_path = path + "\\" + item
    file = open(item_path, 'r', encoding="utf-8")
    content = file.read()
    file.close()
    item_json = textTransformer(content)["allLine"]
    json[item] = item_json



print(json)
