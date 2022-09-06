# coding:utf-8
import hanlp
import torch
from bert4vec import Bert4Vec


def DataPreprocessing(question, entry, label):
    # preprocessing data :
    # Text segmentation, part of speech tagging, entity recognition, entity correction,
    # Relationship Attribute correction and question rewriting

    # load the pretrained model
    HanLP = hanlp.load(hanlp.pretrained.mtl.CLOSE_TOK_POS_NER_SRL_DEP_SDP_CON_ELECTRA_SMALL_ZH)

    # analysis the question
    hanLPResult = HanLP(question, tasks=["tok/coarse", "ner/msra", "pos/ctb"])
    # print(hanLPResult)

    # get the ana_result
    tok = hanLPResult.to_dict()["tok/coarse"]
    ctb = hanLPResult.to_dict()["pos/ctb"]
    print('tok is :' + str(tok))
    print('ctb is :' + str(ctb))

    res = []

    for i in range(len(tok)):
        if 'N' not in ctb[i]:
                res.append(tok[i])
        else:
            print(tok[i], end='   该词与词库中的词的最高相似度是：  ')
            temp_val = TemplateMatching(tok[i], entry)
            if tok[i] == temp_val:
                res.append(tok[i])
            else:
                res.append(label[temp_val])

    return str(res)



def TemplateMatching(question, template):
    # word2vec = hanlp.load(hanlp.pretrained.word2vec.CONVSEG_W2V_NEWS_TENSITE_WORD_PKU)

    similarity = []
    for e in template:
        # temp_dis = torch.nn.functional.cosine_similarity(word2vec(e), word2vec(question), dim=0)
        similarity.append(model.similarity(e, question, return_matrix=False))
    print(max(similarity))
    if max(similarity) > 0.5:
        print('返回的高匹配词条为：' + template[similarity.index(max(similarity))])
        return template[similarity.index(max(similarity))]
    else:
        return question


def QaSystem(question, template, entry, label):
    data_fresh = DataPreprocessing(question, entry, label)
    print('清洗后的问题为：' + data_fresh)
    print('问题模板匹配为：' + TemplateMatching(data_fresh, template))
    return


if __name__ == '__main__':
    tem = []
    ent = []
    model = Bert4Vec(mode='simbert-base')
    with open('template.txt', "r", encoding='utf-8') as f:
        for line in f.readlines():
            tem.append(line.strip())
    with open('dict_entry.txt', "r", encoding='utf-8') as f:
        for line in f.readlines():
            ent.append(line.strip())
    with open('dict_label.txt', "r", encoding='utf-8') as f:
        lab = eval(f.read())
    while True:
        que = input('用户问题：')
        QaSystem(que, tem, ent, lab)

