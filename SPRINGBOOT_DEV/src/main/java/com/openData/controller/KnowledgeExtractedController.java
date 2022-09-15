package com.openData.controller;

import com.openData.service.KnowledgeExtractedService;
import io.swagger.annotations.ApiOperation;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@CrossOrigin//允许跨域访问
public class KnowledgeExtractedController {
    @Autowired
    private KnowledgeExtractedService knowledgeExtractedService;

    @PostMapping("postKnowledgeExtracted")
    @ApiOperation(value = "抽取知识", notes = "传入bookContent")
    @ResponseBody
    public JSONObject postKnowledgeExtracted(@RequestParam("bookContent") String bookContent) {
        return knowledgeExtractedService.KnowledgeExtracted(bookContent);
    }
}
