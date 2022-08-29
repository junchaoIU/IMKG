package com.openData.controller;


import com.openData.dao.entity.EchartsData;
import com.openData.dao.entity.StoneOneWord;
import com.openData.service.StoneKnowledgeService;
import io.swagger.annotations.ApiOperation;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


//1. freetextt （三元组）2. id 3. freetext+facet（三元组） 4. pagesize+pageth
@Controller
@CrossOrigin//允许跨域访问
@RequestMapping(value = "/stoneKnowledge", produces="application/json;charset=utf-8")
public class StoneKnowledgeController {
    @Autowired
    private StoneKnowledgeService stoneKnowledgeService;

    @PostMapping("postStoneKnowledge")
    @ApiOperation(value = "获取碑帖知识库", notes = "传入freetext")
    @ResponseBody
    public List<EchartsData> postStoneKnowledge(@RequestParam("freetext") String freetext) {
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
        return stoneKnowledgeService.postStoneKnowledge(url,json);
    }

    @GetMapping("getStoneDetail")
    @ApiOperation(value = "获取碑帖详情", notes = "传入id")
    @ResponseBody
    public JSONObject getStoneDetail(@RequestParam("id") String id) {
        String key = "a04228e7acda94233da8afd453142430a8a3adee";
        String url = "https://data1.library.sh.cn/webapi/beitie/info?uri="+id+"&key=" + key;
        return stoneKnowledgeService.getStoneDetail(url);
    }

    @PostMapping("postStoneOneWord")
    @ApiOperation(value = "获取碑帖单字", notes = "传入freetext,")
    @ResponseBody
    public List<StoneOneWord> postStoneOneWord(@RequestParam("freetext") String freetext, @RequestParam(name = "facet",required = false,defaultValue = "{}") String facet) {
        String key = "a04228e7acda94233da8afd453142430a8a3adee";
        String url = "https://data1.library.sh.cn/webapi/beitie/danzi/search?key=" + key;
        //String facetString = facet.toString();
        String json = "{ \n" +
                "    \"searchType\": \"1\", \n" +
                "    \"freetext\": \""+freetext+"\", \n" +
                "    \"collection\": \"\", \n" +
                "     \"expression\": \"\", \n" +
                "    \"cdtn\": [ \n" +
                "    ], \n" +
                "    \"facet\": "+facet+", \n" +
                "    \"secondCdtn\": \"\", \n" +
                "    \"pager\": { \n" +
                "        \"pageth\": 1, \n" +
                "        \"pageSize\": 10 \n" +
                "    }, \n" +
                "    \"sorts\": { \n" +
                "        \"score\": \"1\", \n" +
                "        \"CNT\":\"1\" \n" +
                "    }, \n" +
                "    \"hasFacet\": true \n" +
                "}";
        System.out.println(json);
        return stoneKnowledgeService.postStoneOneWord(url,json);
    }
    @GetMapping("getStoneBackground")
    @ApiOperation(value = "获取碑帖背景", notes = "传入pagesize与pageth")
    @ResponseBody
    public JSONObject getStoneBackground(@RequestParam("pageSize") String pageSize,@RequestParam("pageth") String pageth) {
        String key = "a04228e7acda94233da8afd453142430a8a3adee";
        String url = "https://names.library.sh.cn/whzk/beitie/background?pageSize="+pageSize+"&pageth="+pageth+"&key="+key;
        System.out.println(url);
        return stoneKnowledgeService.getStoneBackground(url);
    }
    @PostMapping("postPersonKnowledge")
    @ApiOperation(value = "获取名家", notes = "传入personName")
    @ResponseBody
    public List<EchartsData> postPersonKnowledge(@RequestParam("personName") String personName) {
        return stoneKnowledgeService.postPersonKnowledge(personName);
    }
}