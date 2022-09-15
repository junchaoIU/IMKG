package com.openData.service.impl;

import com.openData.service.KnowledgeExtractedService;
import com.openData.tools.ClassPathUtil;
import net.sf.json.JSONObject;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;

@Service
public class KnowledgeExtractedServiceImpl implements KnowledgeExtractedService {
    @Override
    public JSONObject KnowledgeExtracted(String bookContent) {
        String classPath = ClassPathUtil.getClassPath();
        String parameter1 = bookContent;
        String pyPath = classPath + "\\AutoKG_Flask_DEV1.0\\model\\KG_tramsformer_java.py";//py文件放在桌面，测试放target\classes
        String pyEnvironment = classPath + "\\AutoKG_Flask_DEV1.0\\pyenv\\Scripts\\python.exe";//py环境

//        String pyPath =  "D:\\gitHome\\OpenData2\\OpenData\\FLASK_PROJECT\\model\\KG_tramsformer_java.py";//py文件放在桌面，测试放target\classes
//        String pyEnvironment = "D:\\gitHome\\OpenData2\\OpenData\\FLASK_PROJECT\\venv\\Scripts\\python.exe";//py环境
        System.out.println(pyPath);
        String[] args2 = new String[]{pyEnvironment, pyPath, parameter1};  //设定命令行
        System.out.println(args2);
        String result = "";
        try {
            Process proc = Runtime.getRuntime().exec(args2);  //执行py文件
            InputStreamReader isr = new InputStreamReader(proc.getInputStream(), "gbk");
            BufferedReader in = new BufferedReader(isr);

            InputStreamReader isrError = new InputStreamReader(proc.getErrorStream(), "gbk");
            BufferedReader inError = new BufferedReader(isrError);
            String line = "";
            while ((line = in.readLine()) != null) {
               result = result + line;
            }
            String err = null;
            while ((err = inError.readLine()) != null) {
                System.out.println("=====error：" + err);
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        System.out.println(result);
        JSONObject resultJson = JSONObject.fromObject(result);
        return resultJson;
    }
    }
