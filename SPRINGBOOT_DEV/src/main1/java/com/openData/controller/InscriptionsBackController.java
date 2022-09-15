package com.openData.controller;

import com.openData.dao.entity.Back;
import com.openData.service.InscriptionsBackService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin//允许跨域访问
@RequestMapping(value = "/inscriptionsBack", produces="application/json;charset=utf-8")
public class InscriptionsBackController {

    @Autowired
    private InscriptionsBackService inscriptionsBackService;

    @PostMapping( "/getInscriptionsBack")
    @ApiOperation(value="子事件回溯", notes="子事件的回溯，用links连接")
    @ResponseBody
    public Back getInscriptionsBack(@RequestParam("inscriptions") String inscriptions) {
        return inscriptionsBackService.getInscriptionsBack(inscriptions);
    }
}
