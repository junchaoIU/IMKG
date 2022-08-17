package com.openData.controller;


import com.openData.dao.entity.EchartsData;
import com.openData.service.InscriptionsKnowledgeService;
import io.swagger.annotations.ApiOperation;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


//1. freetextt （三元组）2. id 3. freetext+facet（三元组） 4. pagesize+pageth
@Controller
@CrossOrigin//允许跨域访问
@RequestMapping(value = "/inscriptionsKnowledge", produces="application/json;charset=utf-8")
public class InscriptionsKnowledgeController {
    @Autowired
    private InscriptionsKnowledgeService inscriptionsKnowledgeService;

    // 碑帖详情
    @PostMapping("postInscriptionsKnowledge")
    @ApiOperation(value = "获取碑帖知识库", notes = "传入freetext")
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

    @GetMapping("getInscriptionsDetail")
    @ApiOperation(value = "获取碑帖详情", notes = "传入id")
    @ResponseBody
    public JSONObject getInscriptionsDetail(@RequestParam("id") String id) {
        String key = "a04228e7acda94233da8afd453142430a8a3adee";
        String url = "https://data1.library.sh.cn/webapi/beitie/info?uri="+id+"&key=" + key;
        return inscriptionsKnowledgeService.getInscriptionsDetail(url);
    }
}