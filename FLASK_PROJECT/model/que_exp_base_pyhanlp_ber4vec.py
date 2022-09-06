from pyhanlp import *
from bert4vec import Bert4Vec


def DataPreprocessing(question, entry, label, relation):
    # preprocessing data :
    # Text segmentation, part of speech tagging, entity recognition, entity correction,
    # Relationship Attribute correction and question rewriting

    # load the pretrained model
    words = HanLP.segment(question)

    word = []
    nature = []
    entity_num = 0
    rel_num = 0
    print(words)
    for term in words:
        nature_temp = str(term.nature)
        nature.append(nature_temp)
        # print(nature_temp)
        # print(nature_temp.isalnum())
        if nature_temp.isalnum() and nature_temp.isascii():
            # if nature_temp in ['vshi', 'v', 'ude1', 'y', 'w']:
            if 'n' not in nature_temp:
                word.append(term.word)
            else:
                print(term.word, end='   该词与词库中的词的最高相似度是：  ')
                temp_val = TemplateMatching(term.word, entry)
                if term.word == temp_val:
                    word.append(term.word)
                else:
                    word.append(label[temp_val])
        else:
            word.append(nature_temp)
            if nature_temp in label.keys():
                entity_num += 1
            if nature_temp in relation.keys():
                rel_num += 1
        print('实体有' + str(entity_num) + '个     关系有' + str(rel_num) + '个')

    # print(type(term.nature))
    # print(word)
    # print(nature)
    return str(word)


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


def QaSystem(question, template, entry, label, relation):
    data_fresh = DataPreprocessing(question, entry, label, relation)
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
    with open('dict_rel_label.txt', "r", encoding='utf-8') as f:
        rel = eval(f.read())
    while True:
        que = input('用户问题：')
        QaSystem(que, tem, ent, lab, rel)

