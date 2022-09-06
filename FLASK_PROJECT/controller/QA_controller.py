# -------------------------------------------------------------------------------
# Description:
# Reference:
# Name:   bookKG_controller
# Author: wujunchao
# Date:   2021-11-30
# -------------------------------------------------------------------------------
# -*- coding: utf-8 -*-

import json

from flask import request
from flask import Blueprint

from model.qa_0906 import par_created, QaSystem

# 创建了一个蓝图对象
QAModule = Blueprint('QA', __name__)

"""
    GET请求，带参数
"""


@QAModule.route("/QA_system", methods=["POST"])
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
        que = json_data.decode('utf-8')

        tem, ent, lab, rel = par_created()
        entity,answer = QaSystem(que, tem, ent, lab, rel)
        return_dict['result'] = [entity,answer]
        return json.dumps(return_dict, ensure_ascii=False)
