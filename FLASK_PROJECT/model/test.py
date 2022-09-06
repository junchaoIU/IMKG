# -*- coding: utf-8 -*-
# @Time : 2022/08/29 14:04
# @Author : WuXuanNlp
# @FileName: test.py
# @Software: PyCharm
# @Blog ：https://github.com/WuXuanNlp
from pyhanlp import *

# ViterbiSegment = SafeJClass('com.hankcs.hanlp.seg.Viterbi.ViterbiSegment')
# segment = ViterbiSegment()
# segment.enableCustomDictionaryForcing(True)
# HanLP.segment.enableCustomDictionaryForcing(True)
StandardTokenizer = JClass("com.hankcs.hanlp.seg.Segment").enableCustomDictionaryForcing
print(StandardTokenizer('赵孟頫的帝王的端方舊藏“濃淡墨拓拼合本”的江苏'))
# print(HanLP.segment('沈树镛藏本影印'))
# print(HanLP.segment('赵孟頫的帝王的端方舊藏“濃淡墨拓拼合本”的江苏'))
#
# print(HanLP.segment('括本'))
# print(HanLP.segment('人口数量'))
# print(HanLP.segment('王羲之'))
# print(HanLP.segment('车牌代码'))