# -*- coding: utf-8 -*-
# @Time : 2022/08/29 16:12
# @Author : WuXuanNlp
# @FileName: test3.py
# @Software: PyCharm
# @Blog ：https://github.com/WuXuanNlp

from urllib.request import urlopen
import json
import os
import requests


def interactive(freetext, category):
    # data = {
    #     "freetext": freetext,
    # }
    url = 'http://8.135.49.164:8010/inscriptionsKnowledge/postKnowledgeSearch?freetext=' + freetext
    # url = 'http://8.135.49.164:8010/inscriptionsKnowledge/postKnowledgeSearch?freetext='
    # res = requests.post(url=url, data=json.dumps(data))
    res = requests.post(url=url)
    # print(json.loads(res.text))
    # print(type(json.loads(res.text)))
    # print(json.loads(res.text)[0].get('nodes'))
    print(json.loads(res.text)[0].get('links'))
    for i in json.loads(res.text)[0].get('links'):
        if i['category'] == category:
            # print(i['id'])
            # print(i['label'])
            return i['target']
    return '您的请求内容没有搜索到，抱歉哦，碑帖菌会继续优化捏'
    return res


print(interactive('王羲之', '碑帖'))
print(interactive('集王羲之书三藏圣教序', '题记'))
# print(interactive('王羲之', '流传经历'))
# print(interactive('王羲之', '女朋友'))

# print(interactive('虞恭公温彦博碑', '来源碑帖'))
