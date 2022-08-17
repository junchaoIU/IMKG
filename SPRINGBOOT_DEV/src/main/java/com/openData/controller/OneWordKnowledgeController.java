package com.openData.controller;

import com.openData.service.OneWordKnowledgeService;
import io.swagger.annotations.ApiOperation;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
@CrossOrigin//允许跨域访问
public class OneWordKnowledgeController {

    @Autowired
    private OneWordKnowledgeService oneWordKnowledgeService;

    @PostMapping("postStoneOneWord")
    @ApiOperation(value = "获取碑帖单字", notes = "传入freetext,")
    @ResponseBody
    public JSONObject postStoneOneWord(@RequestParam("freetext") String freetext, @RequestParam(name = "facet",required = false) Map facet) {
        String key = "a04228e7acda94233da8afd453142430a8a3adee";
        String url = "https://data1.library.sh.cn/webapi/beitie/danzi/search?key=" + key;
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
        return oneWordKnowledgeService.postStoneOneWord(url,json);
    }
    @GetMapping("getStoneBackground")
    @ApiOperation(value = "获取碑帖背景", notes = "传入pagesize与pageth")
    @ResponseBody
    public JSONObject getStoneBackground(@RequestParam("pageSize") String pageSize,@RequestParam("pageth") String pageth) {
        String key = "a04228e7acda94233da8afd453142430a8a3adee";
        String url = "https://names.library.sh.cn/whzk/beitie/background?pageSize="+pageSize+"&pageth="+pageth+"&key="+key;
        System.out.println(url);
        return oneWordKnowledgeService.getStoneBackground(url);
    }
}
