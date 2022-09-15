package com.openData.controller;


import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.openData.dao.entity.EchartsData;
import com.openData.dao.entity.EchartsLink;
import com.openData.dao.entity.EchartsNode;
import com.openData.service.CelebritiesKnowledgeService;
import com.openData.service.InscriptionsKnowledgeService;
import com.openData.tools.ClassPathUtil;
import com.openData.tools.JsonUtils;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.alibaba.fastjson.JSON;

import java.io.*;


import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.*;


//1. freetextt （三元组）2. id 3. freetext+facet（三元组） 4. pagesize+pageth
@Controller
@CrossOrigin//允许跨域访问
@RequestMapping(value = "/inscriptionsKnowledge", produces="application/json;charset=utf-8")
public class InscriptionsKnowledgeController {
    @Autowired
    private InscriptionsKnowledgeService inscriptionsKnowledgeService;
    @Autowired
    private CelebritiesKnowledgeService celebritiesKnowledgeService;

    // 碑帖详情
    @PostMapping("postInscriptionsKnowledge")
    @ApiOperation(value = "碑帖知识检索", notes = "传入freetext")
    @ResponseBody
    public List<EchartsData> postInscriptionsKnowledge(@RequestParam("freetext") String freetext) {
        String key = "a04228e7acda94233da8afd453142430a8a3adee";
        String url = "https://data1.library.sh.cn/webapi/beitie/search?key="+key;
        String json = "{ \n" +
                "    \"searchType\": \"1\", \n" +
                "    \"freetext\": \""+freetext+"\", \n" +
                "    \"collection\": \"\", \n" +
                "    \"expression\": \"\", \n" +
                "    \"secondCdtn\": \"\", \n" +
                "    \"pager\": { \n" +
                "        \"pageth\": 1, \n" +
                "        \"pageSize\": 10 \n" +
                "    }, \n" +
                "    \"sorts\": { \n" +
                "        \"score\": \"1\", \n" +
                "        \"CNT\":\"1\" \n" +
                " \n" +
                "    },  \n" +
                "    \"hasFacet\": true \n" +
                "} ";
        System.out.println(json);
        return inscriptionsKnowledgeService.postInscriptionsKnowledge(url,json);
    }

    private static JSONObject readerMethod(File file) throws IOException {
        FileReader fileReader = new FileReader(file);
        Reader reader = new InputStreamReader(Files.newInputStream(file.toPath()), StandardCharsets.UTF_8);
        int ch = 0;
        StringBuilder sb = new StringBuilder();
        while ((ch = reader.read()) != -1) {
            sb.append((char) ch);
        }
        fileReader.close();
        reader.close();
        String jsonStr = sb.toString();
        System.out.println(JSON.parseObject(jsonStr));
        return JSON.parseObject(jsonStr);
    }

    @PostMapping("postKnowledgeSearch")
    @ApiOperation(value = "知识检索", notes = "传入freetext")
    @ResponseBody
    public List<EchartsData> postKnowledgeSearch(@RequestParam("freetext") String freetext) throws IOException {

        String[] celebritiesList = {"欧阳询", "张公礼", "王羲之", "颜真卿", "上官灵芝", "于志宁", "寇谦之", "张从申", "敦复", "敬客", "李世民", "李儇", "李百药", "李阳冰", "柳识", "欧阳通", "王献之", "米芾", "虞世南", "魏征", "黄庭坚", "赵孟頫", "李邕", "诸遂良", "岑文本", "盛彪", "周绅", "周砥"};
        JSONArray listValue = null;
        String jsonPath = ClassPathUtil.getClassPath()+"/dic_data.json";
        System.out.println(jsonPath);
        String jsonStr = JsonUtils.readJsonFile(jsonPath);
        JSONObject dicJson = JSON.parseObject(jsonStr);
        for (String key : dicJson.keySet()) {
            if (freetext.equals(key)) {
                System.out.println(key);
                listValue = dicJson.getJSONArray(key);
            }
        }
        if(listValue != null){
            List<EchartsData> datas = new ArrayList<>();
            Set<EchartsNode> nodes = new HashSet<>();
            Set<EchartsLink> links = new HashSet<>();
            EchartsData data = new EchartsData();
            EchartsNode node1 = new EchartsNode();
            node1.setId(freetext);
            node1.setLabel(freetext);
            List<String> list = Arrays.asList("汉","唐","宋","元","明","清") ;
            if (list.contains(freetext)){
                node1.setCategory("朝代");
            }else if (freetext.contains("朝")){
                node1.setCategory("朝代");
            }else if (freetext.contains("拓本")){
                node1.setCategory("拓本");
            }else if (freetext.contains("书")){
                node1.setCategory("书体");
            }else{
                node1.setCategory("地点");
            }
            nodes.add(node1);
            for(int i = 0; i < listValue.size(); i++){
                EchartsNode node = new EchartsNode();
                EchartsLink link = new EchartsLink();
                node.setId((String) ((JSONObject)listValue.get(i)).get("value"));
                node.setLabel((String) ((JSONObject)listValue.get(i)).get("key"));
                node.setCategory((String) ((JSONObject)listValue.get(i)).get("key"));
                link.setSource(freetext);
                link.setTarget((String) ((JSONObject)listValue.get(i)).get("value"));
                link.setCategory((String) ((JSONObject)listValue.get(i)).get("key"));
                link.setLabel((String) ((JSONObject)listValue.get(i)).get("key"));
                link.setSymbol((String) ((JSONObject)listValue.get(i)).get("value") + ".jpg");
                nodes.add(node);
                links.add(link);
            }
            data.setNodes(nodes);
            data.setLinks(links);
            datas.add(data);
            System.out.println(data);

            return datas;
        }else if(Arrays.asList(celebritiesList).contains(freetext)){
            //人物检索
            return celebritiesKnowledgeService.postCelebritiesKnowledge(freetext);
        }else {
            //碑帖检索
            return postInscriptionsKnowledge(freetext);

        }
    }
}