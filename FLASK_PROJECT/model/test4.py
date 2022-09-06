# -*- coding: utf-8 -*-
# @Time : 2022/08/29 19:44
# @Author : WuXuanNlp
# @FileName: test4.py
# @Software: PyCharm
# @Blog ：https://github.com/WuXuanNlp


with open('template.txt', "r", encoding='utf-8') as f:
    rel = eval(f.read())
    print(rel)
    print(type(rel))
    f.close()

