# -------------------------------------------------------------------------------
# Description:  
# Reference:
# Name:   bookKG_controller
# Author: wujunchao
# Date:   2021-11-30
# -------------------------------------------------------------------------------
# -*- coding: utf-8 -*-
import json
import os
from flask import request
from flask import Blueprint
from model.KG_tramsformer import textTransformer

# 创建了一个蓝图对象
IEModule = Blueprint('KG', __name__)

"""
    GET请求，带参数
"""


@IEModule.route("/KG_Extraction", methods=["POST"])
def write():
    # 默认返回内容
    return_dict = {'return_code': '200', 'return_info': '抽取成功', 'result': None}
    # 判断入参是否为空
    # if len(request.args) == 0:
    #     return_dict['return_code'] = '5004'
    #     return_dict['return_info'] = '请求参数为空'
    #     return json.dumps(return_dict, ensure_ascii=False)
    # # 获取传入的params参数
    # get_data = request.args.to_dict()
    if request.method == "POST":
        json_data = request.data
        txt = json_data.decode('utf-8')
        print(txt)

        path = os.path.dirname(os.path.realpath(__file__)).split("controller")[0] + "\\data\\res_story"
        print(path)
        datanames = os.listdir(path)
        name_list = []
        for i in datanames:
            name_list.append(i)

        print(name_list)

        name = txt+".txt"

        print(name)

        if name in name_list:

            item_path = path + "\\" + name
            print(item_path)
            file = open(item_path, 'r', encoding="utf-8")
            content = file.read()
            file.close()

            dataDic = textTransformer(content)
            return_dict['result'] = dataDic
            return json.dumps(return_dict, ensure_ascii=False)
        else:
            return json.dumps(return_dict, ensure_ascii=False)
