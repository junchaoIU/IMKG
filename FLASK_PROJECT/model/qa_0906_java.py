# -*- coding: utf-8 -*-
# @Time : 2022/08/29 14:43
# @Author : WuXuanNlp
# @FileName: test2.py
# @Software: PyCharm
# @Blog ：https://github.com/WuXuanNlp
from typing import Union, List
from pyhanlp import *
from bert4vec import Bert4Vec
from urllib.request import urlopen
import json
import os
import requests


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


def par_created():
    with open(os.path.dirname(os.path.realpath(__file__))+'\\template.txt', "r", encoding='utf-8') as f:
        tem = eval(f.read())
        f.close()
    with open(os.path.dirname(os.path.realpath(__file__))+'\\dict_entry.txt', "r", encoding='utf-8') as f:
        ent = []
        for line in f.readlines():
            ent.append(line.strip())
        f.close()
    with open(os.path.dirname(os.path.realpath(__file__))+'\\dict_label.txt', "r", encoding='utf-8') as f:
        lab = eval(f.read())
        f.close()
    with open(os.path.dirname(os.path.realpath(__file__))+'\\dict_rel_label.txt', "r", encoding='utf-8') as f:
        rel = eval(f.read())
        f.close()
    return tem, ent, lab, rel


def interactive(freetext, category):
    # data = {
    #     "freetext": freetext,
    # }
    # print(freetext)
    # print(category)
    url = 'http://8.135.49.164:8010/inscriptionsKnowledge/postKnowledgeSearch?freetext=' + freetext
    # res = requests.post(url=url, data=json.dumps(data))
    res = requests.post(url=url)
    # print(json.loads(res.text)[0].get('links'))
    if res.status_code == 200:
        res_json = json.loads(res.text)
        if res_json:
            for i in json.loads(res.text)[0].get('links'):
                if i['category'] == category:
                    return i['target']
            return '您的请求内容没有搜索到，抱歉哦，碑帖菌会继续优化捏'
        else:
            return '接口返回数据为空，请联系技术人员解决'
    else:
        return '接口访问出错，请联系技术人员解决'


def DataPreprocessing(question, entry, label, relation):
    entity = entity_shaped(os.path.dirname(os.path.realpath(__file__))+'//dict')
    ref = ref_shaped(os.path.dirname(os.path.realpath(__file__))+'//dict_ref')
    segment = HanLP.newSegment('viterbi')
    for i in entity:
        CustomDictionary.insert(i[0], i[1])  # insert会覆盖字典中已经存在的词，add会跳过已经存在的词
    for j in ref:
        CustomDictionary.insert(j[0], j[1])  # insert会覆盖字典中已经存在的词，add会跳过已经存在的词
    segment.enableCustomDictionaryForcing(True)
    words = segment.seg(question)
    # print(words)
    word = ''
    nature = []
    entity_num = 0
    entity_list = []
    rel_num = 0
    rel_list = []
    for term in words:
        nature_temp = str(term.nature)
        nature.append(nature_temp)
        if nature_temp.isalnum() and nature_temp.isascii():
            if 'n' not in nature_temp or 'v' in nature_temp:
                word += term.word
            else:
                temp_val = WordMatching(model,term.word, entry)
                if temp_val == term.word:
                    word += term.word
                else:
                    print(term.word + '疑似输入错误，您是否想输入的是' + str(temp_val) + '?')
                    # print('已为您返回修正后的结果：')
                    term.word = temp_val
                    # word += label[temp_val[0]]
                    nature_temp = label[temp_val]
                    word += nature_temp
        else:
            word += nature_temp
        if term.word in label.keys():
            entity_num += 1
            entity_list.append(term.word)
        if term.word in relation.keys():
            rel_num += 1
            rel_list.append(term.word)
    # print('实体有' + str(entity_num) + '个     关系有' + str(rel_num) + '个')
    # print(entity_list)
    # print(rel_list)
    return str(word), entity_list, rel_list


def WordMatching(model,question, template):
    similarity = []
    for e in template:
        # print(e)
        similarity.append(model.similarity(e, question, return_matrix=False))
    if max(similarity) > 0.7:
        # print('返回的高匹配词条为：' + template[similarity.index(max(similarity))])
        return template[similarity.index(max(similarity))]
    else:
        return question


def TemplateMatching(model,question, template):
    similarity = []
    for e in template:
        # print(e)
        similarity.append(model.similarity(e[0], question, return_matrix=False))
    if max(similarity) > 0.5:
        # print('返回的高匹配词条为：' + template[similarity.index(max(similarity))])
        return template[similarity.index(max(similarity))]
    else:
        return question, 0


def QaSystem(question, template, entry, label, relation):
    model = Bert4Vec(mode='simbert-base')
    chartData = {"nodes":[],"links":[]}
    data_fresh = DataPreprocessing(question, entry, label, relation)
    # print(data_fresh)
    entity = data_fresh[1]
    # print('清洗后的问题为：' + data_fresh[0])
    match_tem = TemplateMatching(model,data_fresh[0], template)
    # print('问题模板匹配为：' + match_tem[0])
    if match_tem[1] == 0:
        return [entity,'对不起，您的问题超出了碑帖菌的理解范畴呢。']
        # return False
    elif match_tem[1] == 1:
        # print('进入检索模式1：')
        res_temp = interactive(data_fresh[1][0], data_fresh[2][0])
        entity.append(res_temp)
        return [entity,res_temp]
    elif match_tem[1] == 2:
        # print('进入检索模式2：')
        if len(data_fresh[2]) >= 2:
            res_temp = interactive(data_fresh[1][0], data_fresh[2][0])
            if res_temp is not '您的请求内容没有搜索到，抱歉哦，碑帖菌会继续优化捏':
                res_temp = interactive(res_temp, data_fresh[2][1])
            entity.append(res_temp)
            return [entity,res_temp]
        else:
            return [entity,'检索时出错了捏']
    elif match_tem[1] == 3:
        # print('进入检索模式3：')
        res_temp = interactive(data_fresh[1][0], data_fresh[2][0])
        entity.append(res_temp)
        if len(data_fresh[1]) >= 2:
            if res_temp == data_fresh[1][1]:
                return [entity,'是的']
            else:
                return [entity,'不是的,应该是' + res_temp]
        else:
            return [entity,'检索时出错了捏']
    return


if __name__ == '__main__':

    model = Bert4Vec(mode='simbert-base')
    # que = "欧阳询的碑帖是什么"
    que = sys.argv[1]
    tem, ent, lab, rel = par_created()
    print(QaSystem(que, tem, ent, lab, rel))

