import os
import json


def dic_transform(path):
    files = os.listdir(path)
    res_dic = {}
    for file in files:
        pos = path + '/' + file
        with open(pos, "r", encoding='utf-8') as f:
            for e in f.readlines():
                # for i in e.split(','):
                #     print(i)
                res_dic[e.strip().replace('\'', '').replace('"', '')] = file.replace('dict_','').replace('.txt','')
    return res_dic


def dic2dictionary(path):
    files = os.listdir(path)
    res_dic = []
    for file in files:
        pos = path + '/' + file
        with open(pos, "r", encoding='utf-8') as f:
            for e in f.readlines():
                res_dic.append(e.strip().replace('\'', '').replace('"', '') + ' ' + file.replace('.txt', '') + ' 100')
                for i in e.split(','):
                    # res_dic.append(e.strip().replace('"', '') + ' np 1')
                    res_dic.append(i.strip().replace('\'', '').replace('"', '') + ' ' + file.replace('.txt', '') + ' 1')
                    # res_dic.append(e.strip().replace('"', ''))
    return list({}.fromkeys(res_dic).keys())


if __name__ == '__main__':
    path = './dict'
    # json_data = json.dumps(dic_transform(path), ensure_ascii=False, indent=4)
    # with open('dict5.txt', "w", encoding='utf-8') as f:
    #     f.write(json_data)
    with open('dict_label.txt', "w", encoding='utf-8') as f:
        f.write(str(dic_transform(path)))
    # with open('dict_rel_label.txt', "w", encoding='utf-8') as f:
    #     f.write(str(dic_transform(path)))
    # dict_new = json.loads(json_data)
    # with open('dict_add_to_pyhanlp_new.txt', "w", encoding='utf-8') as f:
    #     for line in dic2dictionary(path):
    #         f.write(line + '\n')
    # files = os.listdir(path)
    # with open('dict_values.txt', "w", encoding='utf-8') as f:
    #         f.write(str(files).replace('.txt',''))
    # with open('dict_rel_add_to_pyhanlp.txt', "w", encoding='utf-8') as f:
    #     for line in dic2dictionary(path):
    #         f.write(line + '\n')