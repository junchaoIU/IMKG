import json
import os
import re
import copy
from tqdm import tqdm
import hanlp
from pyhanlp import HanLP as pyHanlp
from hanlp_restful import HanLPClient

HanLP_rest = HanLPClient('https://www.hanlp.com/api', auth="NTcxQGJicy5oYW5scC5jb206dFJHcUFSNHpWRmNsWmw0bQ==",
                         language='zh')  # auth不填则匿名，zh中文，mul多语种


def bookContent_List(book_url):
    # 读取文件，消除换行，并按句号切句
    try:
        f = open(book_url, encoding='gbk')
    except:
        f = open(book_url, encoding='utf-8')

    data = f.read().strip().replace('', '').replace('\r', '').replace(".", "。")
    # 按换行来做切分
    dataList = re.split('\n', data)
    f.close()
    return dataList

    # f2 = open(book_url[0:-4]+"modified"+book_url[-4:],"w",encoding='utf-8')
    # for i in tqdm(dataList):
    #     f2.write(i)
    #     f2.write("\n")
    # f2.close()


def summaryExtract(content, text):
    # 自动摘要
    return content + ":" + str(pyHanlp.extractSummary(text, 1)[0])


def textProcess(txt):
    data = txt.strip().replace(' ', '').replace('\r', '').replace(".", "。").replace("<br/>", "").replace("\n","")
    # 按换行来做切分
    dataList = re.split('\n', data)
    print(dataList)
    return dataList


def bookContentProcess(book_url):
    textList = bookContent_List(book_url)  # 拿到文章list
    # txtList = []
    # for sentence in tqdm(textList):
    #     try:
    #         e = HanLP_rest.coreference_resolution(sentence)
    #         time.sleep(1)
    #         ference = e['clusters']
    #         tokens = e['tokens']
    #         # print(len(ference))
    #         for i in ference:
    #             word = i[0][0]
    #             # print(word)
    #             for j in i:
    #                 if ("他" == j[0] or "她" == j[0] or "我" == j[0] or "你" == j[0]):
    #                     # print(j[0])
    #                     tokens[j[1]] = word
    #             # print(i)
    #         # 打印代词替换后的txt
    #         content_txt = ""
    #         for i in tokens:
    #             content_txt += i
    #         txtList.append(content_txt)
    #     except:
    #         pass
    return textList


def nerProcess(txt):
    HanLP = hanlp.load(hanlp.pretrained.mtl.CLOSE_TOK_POS_NER_SRL_DEP_SDP_CON_ELECTRA_SMALL_ZH)  # 世界最大中文语料库
    # 命名实体识别ner
    hanLPResult = HanLP(txt, tasks=["ner/msra", "ner/ontonotes", "pos"])  # "srl"
    nerMsra = hanLPResult.to_dict()["ner/msra"]
    nerMsra = [item for item in nerMsra]
    nerOntonotes = hanLPResult.to_dict()["ner/ontonotes"]
    nerOntonotes = [item for item in nerOntonotes]
    # print("nerMsra:{}".format(nerMsra))
    # print("nerOntonotes:{}".format(nerOntonotes))
    ner = list(set(nerMsra + nerOntonotes))
    ner = [list(item) for item in ner]

    # 候选ner清洗
    pNer = []
    for entity in ner:
        # 过滤长度小于等于1的实体
        if len(entity[0]) <= 1:
            # print(entity)
            pass
        # 去除'ORG'标签实体
        elif entity[1] == 'ORG' or entity[1] == 'AREA' or entity[1] == 'FAC':
            pass
        # GPE并入LOCATION
        elif entity[1] == 'GPE' or entity[1] == 'LOC':
            entity[1] = 'LOCATION'
        # 过滤DATE无用的实体
        elif entity[1] == "DATE":
            if "年" not in entity[0]:
                # print(entity)
                pass
            else:
                pNer.append(entity)
        # 过滤无用类别实体
        elif (entity[1] in ["AGE", "MONEY", "CARDINAL", "INTEGER", "QUANTITY", "TIME", "PERCENT", "DURATION",
                            "FREQUENCY", "ORDINAL", 'LENGTH', 'NORP', 'WORK_OF_ART', "FRACTION", "WEIGHT",
                            "TEMPERATURE", "PRODUCT"]):
            # print(entity)
            pass
        else:
            pNer.append(entity)
    dict_label = "{'欧阳询': '名家', '张公礼': '名家', '王羲之': '名家', '颜真卿': '名家', '上官灵芝': '名家', '于志宁': '名家', '寇谦之': '名家', " \
                 "'张从申': '名家', '敦复': '名家', '敬客': '名家', '李世民': '名家', '李儇': '名家', '李百药': '名家', '李阳冰': '名家', '柳识': '名家', " \
                 "'欧阳通': '名家', '王献之': '名家', '米芾': '名家', '虞世南': '名家', '魏征': '名家', '黄庭坚': '名家', '赵孟頫': '名家', " \
                 "'李邕': '名家', '诸遂良': '名家', '岑文本': '名家', '盛彪': '名家', '周绅': '名家', '周砥': '名家', '楷书': '字体', '行书': '字体', " \
                 "'隶书': '字体', '明拓本': '拓本', '宋拓本': '拓本', '北宋拓本': '拓本', '南宋拓本': '拓本', '明末清初拓本': '拓本', '乾隆初拓本': '拓本', " \
                 "'北宋后期拓本': '拓本', '唐原石北宋拓本': '拓本', '宋拓“宋精刻大字本”': '拓本', '宋拓未断本': '拓本', '宋拓泉州本': '拓本', '明中叶前拓本': '拓本', " \
                 "'明中后期拓本': '拓本', '明代中期拓本': '拓本', '明代淡墨精拓本': '拓本', '明初拓“张公礼未泐本”': '拓本', '明初拓本': '拓本', '明朝水前小扑小纸拓本': " \
                 "'拓本', '明末拓本': '拓本', '明末清初本': '拓本', '沈树镛藏本影印': '拓本', '王懿荣旧藏本影印': '拓本', '端方舊藏“濃淡墨拓拼合本”': '拓本', " \
                 "'诸星杓藏本影印': '拓本',  '唐': '朝代', '晋': '朝代', '汉': '朝代', '宋': '朝代', '隋': '朝代', '南北朝': '朝代', '元': '朝代', " \
                 "'明': '朝代', '旧拓魏志五种': '碑帖', '化度寺邕禅师舍利塔铭': '碑帖', '太室西阙铭': '碑帖', '虞恭公温彦博碑': '碑帖', '鲜于光祖墓志': '碑帖', " \
                 "'十七帖': '碑帖', '司马昞妻孟敬训墓志': '碑帖', '道因法师碑': '碑帖', '龙藏寺碑': '碑帖', '王居士砖塔铭': '碑帖', '麓山寺碑并阴': '碑帖', " \
                 "'鲁峻碑': '碑帖', '许真人井铭': '碑帖', '唐俭碑': '碑帖', '淳化阁帖': '碑帖', '黄庭堅青原山诗刻石': '碑帖', '争座位帖': '碑帖', " \
                 "'麻姑山仙坛记': '碑帖', '礼器碑并阴': '碑帖', '晋唐小楷九种': '碑帖', '孔羡碑': '碑帖', '九成宫醴泉铭': '碑帖', '張從申書李玄靖碑': '碑帖', " \
                 "'圭峰定慧禪師碑': '碑帖', '皇甫诞碑': '碑帖', '史晨前碑': '碑帖', '章吉老墓志': '碑帖', '瘗鹤铭': '碑帖', '集王羲之书三藏圣教序': '碑帖', " \
                 "'崔敬邕墓誌': '碑帖', '张猛龙碑并阴': '碑帖', '中岳嵩高灵庙碑并额': '碑帖', '张从申书李玄靖碑': '碑帖', '河北': '籍贯', '浙江': '籍贯', " \
                 "'山东': '籍贯', '江苏': '籍贯', '河南': '籍贯', '湖南': '籍贯', '陕西': '籍贯', '北京': '籍贯', '山西': '籍贯', '江西': '籍贯', " \
                 "'湖北': '籍贯'} "
    # with open(r'./static/dict_label.txt', "r", encoding='utf-8') as f:
    lab = eval(dict_label)
    for k in lab.keys():
        if k in txt:
            pNer.append([k, lab[k]])
    return pNer


def getTimeLine(entitiesDic, txt):
    # 时空线抽取
    lineList = []
    print(entitiesDic.keys())
    dateList = entitiesDic["DATE"]
    locationList = entitiesDic["LOCATION"]
    textList = txt.split("。")
    for text in textList:
        for date in dateList:
            if date in text:
                Lastlocation = ""
                for location in locationList:
                    if location in text:
                        Lastlocation = Lastlocation + location + "、"
                if "" == Lastlocation:
                    lineList.append([date, "未知", text])
                    break
                else:
                    lineList.append([date, Lastlocation[0:len(Lastlocation) - 1], text])
                    break
            else:
                pass

    personLineListDic = {}
    eventLineListDic = {}
    organizationLineListDic = {}
    for item in lineList:
        for people in entitiesDic["PERSON"]:
            if people in item[2]:
                summary = summaryExtract(people, item[2])
                peopleItem = copy.deepcopy(item)
                peopleItem.append(summary)
                if (people in personLineListDic.keys()):
                    personLineListDic[people].append(peopleItem)
                else:
                    personLineListDic.update({people: [peopleItem]})
                continue
        for event in entitiesDic["EVENT"]:
            if event in item[2]:
                summary = summaryExtract(event, item[2])
                peopleItem = copy.deepcopy(item)
                peopleItem.append(summary)
                if (event in personLineListDic.keys()):
                    eventLineListDic[event].append(peopleItem)
                else:
                    eventLineListDic.update({event: [peopleItem]})
                continue
        for organization in entitiesDic["ORGANIZATION"]:
            if organization in item[2]:
                summary = summaryExtract(organization, item[2])
                organizationItem = copy.deepcopy(item)
                organizationItem.append(summary)
                if organization in organizationLineListDic.keys():
                    organizationLineListDic[organization].append(organizationItem)
                else:
                    organizationLineListDic.update({organization: [organizationItem]})
                continue
    return lineList, personLineListDic, eventLineListDic, organizationLineListDic


def fileTransformer(book_url):
    entitiesDic = {"ORGANIZATION": [], "PERSON": [], "LOCATION": [], "DATE": [], "EVENT": []}
    personLineDic = {}
    eventLineDic = {}
    organizationLineDic = {}
    allLine = []
    print("正在文本清洗....请稍等")
    txtList = bookContentProcess(book_url)
    print("正在实体抽取....请稍等")
    for txt in tqdm(txtList):
        try:
            pNer = nerProcess(txt)
            for entity in pNer:
                if (entity[1] in entitiesDic.keys()):
                    if (entity[0] not in entitiesDic[entity[1]]):
                        entitiesDic[entity[1]].append(entity[0])
                else:
                    entitiesDic.update({entity[1]: [entity[0]]})

            # 日期清洗
            date_list = []
            for x in entitiesDic["DATE"]:
                for y in entitiesDic["DATE"]:
                    if x in y and x != y:
                        date_list.append(x)
                    else:
                        pass
            date_list = list(set(date_list))
            for item in date_list:
                entitiesDic["DATE"].remove(item)

            allLineList, personLineListDic, eventLineListDic, organizationLineListDic = getTimeLine(entitiesDic, txt)

            allLine = allLine + allLineList
            personLineDic.update(personLineListDic)
            eventLineDic.update(eventLineListDic)
            organizationLineDic.update(organizationLineListDic)
        except:
            pass

    allLine = list(set(allLine)),
    print("全部类别实体entitiesDic:{}".format(entitiesDic))
    print("实体抽取完毕，共抽取ORGANIZATION:{}，PERSON：{}，LOCATION：{}，DATE：{}，EVENT:{}"
          .format(len(entitiesDic["ORGANIZATION"]), len(entitiesDic["PERSON"]), len(entitiesDic["LOCATION"]),
                  len(entitiesDic["DATE"]), len(entitiesDic["EVENT"])))
    print("personLineDic:{}".format(personLineDic))
    print("总时空线:{}".format(allLine)),
    print("人物时空线抽取完毕，共涉及:{}个人物实体，{}条时空线".format(len(personLineDic.keys()), len(personLineDic.items()))),
    print("eventLineDic:{}".format(eventLineDic)),
    print("大事件时空线抽取完毕，共涉及:{}个大事件实体，{}条时空线".format(len(eventLineDic.keys()), len(eventLineDic.items()))),
    print("organizationLineDic:{}".format(organizationLineDic)),
    print("组织机构时空线抽取完毕，共涉及:{}个组织机构实体，{}条时空线".format(len(organizationLineDic.keys()), len(eventLineDic.items()))),
    dataDic = {"allLine": allLine,
               "entitiesDic": entitiesDic,
               "personLineDic": personLineDic,
               "eventLineDic": eventLineDic,
               "organizationLineDic": organizationLineDic
               }
    return dataDic


def textTransformer(txt):
    entitiesDic = {"ORGANIZATION": [], "PERSON": [], "LOCATION": [], "DATE": [], "EVENT": [], "名家": [], "碑帖": [],
                   "拓本": []}
    personLineDic = {}
    eventLineDic = {}
    organizationLineDic = {}
    allLine = []
    print("正在文本清洗....请稍等")
    txtList = textProcess(str(txt))
    print("正在实体抽取....请稍等")
    for txt in tqdm(txtList):
        pNer = nerProcess(txt)
        for entity in pNer:
            if entity[1] in entitiesDic.keys():
                if entity[0] not in entitiesDic[entity[1]]:
                    entitiesDic[entity[1]].append(entity[0])
            else:
                entitiesDic.update({entity[1]: [entity[0]]})

        # 日期清洗
        date_list = []

        # 数字补齐
        for i in range(len(entitiesDic["DATE"])):
            item_list = txt.split(entitiesDic["DATE"][i])
            try:
                if item_list[1][0] == "(" or item_list[1][0] == "（":
                    if item_list[1][5] == ")" or item_list[1][5] == "）":
                        entitiesDic["DATE"][i] = entitiesDic["DATE"][i] + item_list[1][0:6]
                    elif item_list[1][4] == ")" or item_list[1][4] == "）":
                        entitiesDic["DATE"][i] = entitiesDic["DATE"][i] + item_list[1][0:5]
                    else:
                        date_list.append(entitiesDic["DATE"][i])
                else:
                    date_list.append(entitiesDic["DATE"][i])
            except:
                pass

        for x in entitiesDic["DATE"]:
            for y in entitiesDic["DATE"]:
                if x in y and x != y:
                    date_list.append(x)
                else:
                    pass
        date_list = list(set(date_list))
        for item in date_list:
            entitiesDic["DATE"].remove(item)

        allLineList, personLineListDic, eventLineListDic, organizationLineListDic = getTimeLine(entitiesDic, txt)
        personLineDic.update(personLineListDic)
        eventLineDic.update(eventLineListDic)
        organizationLineDic.update(organizationLineListDic)
        allLine = allLine + allLineList

    # allLine = list(set(allLine)),
    print("全部类别实体entitiesDic:{}".format(entitiesDic))
    print("实体抽取完毕，共抽取ORGANIZATION:{}，PERSON：{}，LOCATION：{}，DATE：{}，EVENT:{}，名家:{}，碑帖:{}，拓本:{}".format(
        len(entitiesDic["ORGANIZATION"]), len(entitiesDic["PERSON"]), len(entitiesDic["LOCATION"]),
        len(entitiesDic["DATE"]), len(entitiesDic["EVENT"]), len(entitiesDic["名家"]), len(entitiesDic["碑帖"]),
        len(entitiesDic["拓本"])))
    print("personLineDic:{}".format(personLineDic))
    print("总时空线:{}".format(allLine)),
    print("人物时空线抽取完毕，共涉及:{}个人物实体，{}条时空线".format(len(personLineDic.keys()), len(personLineDic.items()))),
    print("eventLineDic:{}".format(eventLineDic)),
    print("大事件时空线抽取完毕，共涉及:{}个大事件实体，{}条时空线".format(len(eventLineDic.keys()), len(eventLineDic.items()))),
    print("organizationLineDic:{}".format(organizationLineDic)),
    print("组织机构时空线抽取完毕，共涉及:{}个组织机构实体，{}条时空线".format(len(organizationLineDic.keys()), len(eventLineDic.items()))),
    dataDic = {"allLine": allLine,
               "entitiesDic": entitiesDic,
               "personLineDic": personLineDic,
               "eventLineDic": eventLineDic,
               "organizationLineDic": organizationLineDic
               }
    return dataDic


def bookTransfer2JSON(bookName, dataDic):
    json_str = json.dumps(dataDic, indent=4, ensure_ascii=False)
    path = r"D:\AutoKG\BOOK2KG\JsonCenter\\" + bookName + '_BookData.json'
    with open(path, 'w', encoding='utf-8') as json_file:
        json_file.write(json_str)
    print("{}知识数据已持久化为json，路径为：{}".format(bookName, path))


def txtTransfer2JSON(dataDic):
    json_str = json.dumps(dataDic, indent=4, ensure_ascii=False)
    print("返回的json：{}".format(json_str))
    return json_str
    # path = r"D:\AutoKG\BOOK2KG\JsonCenter\\" + bookName+ '_BookData.json'
    # with open(path, 'w', encoding='utf-8') as json_file:
    #     json_file.write(json_str)
    # print("{}知识数据已持久化为json，路径为：{}".format(bookName,path))


if __name__ == '__main__':
    while True:
        bookContent = input('请输入要抽取的文本：')
        path = os.path.dirname(os.path.realpath(__file__)).split("model")[0] + "\\data\\res_story"
        print(path)
        datanames = os.listdir(path)
        name_list = []
        for i in datanames:
            name_list.append(i)

        print(name_list)

        name = bookContent + ".txt"

        print(name)

        if name in name_list:

            item_path = path + "\\" + name
            print(item_path)
            file = open(item_path, 'r', encoding="utf-8")
            content = file.read()
            file.close()

            dataDic = textTransformer(content)
            txtTransfer2JSON(dataDic)
        else:
            txtTransfer2JSON(dataDic)
