# -*- coding: utf-8 -*-
# @Time : 2022/09/06 17:41
# @Author : WuXuanNlp
# @FileName: test5.py
# @Software: PyCharm
# @Blog ：https://github.com/WuXuanNlp
import jieba
import jieba.posseg as pseg
question = '王羲之的籍贯？'
pseg.load_userdict('self_dict.txt')
words = pseg.cut(question, use_paddle=True)

print(words)
for seg, flag in words:
    print(seg, flag)
