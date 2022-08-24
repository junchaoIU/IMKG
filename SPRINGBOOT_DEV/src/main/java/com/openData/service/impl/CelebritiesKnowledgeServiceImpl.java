package com.openData.service.impl;

import com.openData.dao.entity.EchartsData;
import com.openData.dao.entity.EchartsLink;
import com.openData.dao.entity.EchartsNode;
import com.openData.service.CelebritiesKnowledgeService;
import com.openData.service.InscriptionsKnowledgeService;
import com.openData.tools.HttpClientService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CelebritiesKnowledgeServiceImpl implements CelebritiesKnowledgeService {


    @Override
    public JSONObject postCelebritiesKnowledge(String url) {
        HttpClientService httpClient = new HttpClientService();
        JSONObject json_raw = httpClient.getMethod(url);
        return json_raw;
    }

    @Override
    public JSONObject getCelebritiesDetail(String url) {
        return null;
    }
}
