# -------------------------------------------------------------------------------
# Description:  
# Reference:
# Name:   get_JsonData
# Author: wujunchao
# Date:   2022-06-29
# -------------------------------------------------------------------------------
import json
from urllib.request import urlopen

key = 'a04228e7acda94233da8afd453142430a8a3adee'
website = input() + key
URL = urlopen(website)
jsonData = URL.read()

text = json.loads(jsonData)
print(text)