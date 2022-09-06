# -*- coding: utf-8 -*-
# @Time : 2022/08/29 14:43
# @Author : WuXuanNlp
# @FileName: test2.py
# @Software: PyCharm
# @Blog ：https://github.com/WuXuanNlp
from typing import Union, List
from pyhanlp import *
import os


def entity_shaped(entity_path):
    files = os.listdir(entity_path)
    res_dic = []
    for file in files:
        pos = entity_path + '/' + file
        with open(pos, "r", encoding='utf-8') as f:
            for e in f.readlines():
                res_dic.append([e.strip().replace('\'', '').replace('"', ''), file.replace('.txt', '') + ' 1024'])
    return res_dic


def ref_shaped(ref_path):
    files = os.listdir(ref_path)
    res_dic = []
    for file in files:
        pos = ref_path + '/' + file
        with open(pos, "r", encoding='utf-8') as f:
            for e in f.readlines():
                for i in e.split(','):
                    res_dic.append([i.strip().replace('\'', '').replace('"', ''), file.replace('.txt', '') + ' 1024'])
    return res_dic


def seg_created():
    # 建立自定义分词器
    entity = entity_shaped('./dict')
    ref = ref_shaped('./dict_ref')
    segment = HanLP.newSegment('viterbi')
    for i in entity:
        CustomDictionary.insert(i[0], i[1])  # insert会覆盖字典中已经存在的词，add会跳过已经存在的词
    for j in ref:
        CustomDictionary.insert(j[0], j[1])  # insert会覆盖字典中已经存在的词，add会跳过已经存在的词
    segment.enableCustomDictionaryForcing(True)
    return segment


if __name__ == '__main__':
    seg = seg_created()
    print(seg.seg("王羲之的帝王"))


