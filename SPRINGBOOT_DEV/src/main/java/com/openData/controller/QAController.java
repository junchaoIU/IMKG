package com.openData.controller;

import com.openData.service.QAService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@CrossOrigin//允许跨域访问
public class QAController {
    @Autowired
    private QAService qaService;

    @PostMapping("postQASystem")
    @ApiOperation(value = "问答系统", notes = "传入que")
    @ResponseBody
    public String postQASystem(@RequestParam("que") String que) {
        return qaService.QASystem(que);
    }
}
