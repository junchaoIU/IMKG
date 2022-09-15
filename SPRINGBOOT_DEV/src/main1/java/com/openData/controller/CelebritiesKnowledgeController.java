package com.openData.controller;

import com.openData.dao.entity.EchartsData;
import com.openData.service.CelebritiesKnowledgeService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin//允许跨域访问
@RequestMapping(value = "/celebritiesKnowledge", produces="application/json;charset=utf-8")
public class CelebritiesKnowledgeController {

    @Autowired
    private CelebritiesKnowledgeService celebritiesKnowledgeService;

    // 碑帖详情
    @GetMapping("postCelebritiesKnowledge")
    @ApiOperation(value = "检索碑帖名人", notes = "传入名家URL")
    @ResponseBody
    public List<EchartsData> getCelebritiesKnowledge(@RequestParam("celebrities") String celebrities) {
        return celebritiesKnowledgeService.postCelebritiesKnowledge(celebrities);
    }
}
