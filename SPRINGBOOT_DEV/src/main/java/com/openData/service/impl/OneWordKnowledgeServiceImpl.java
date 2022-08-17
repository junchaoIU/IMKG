package com.openData.service.impl;

import com.openData.service.OneWordKnowledgeService;
import com.openData.tools.HttpClientService;
import net.sf.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public class OneWordKnowledgeServiceImpl implements OneWordKnowledgeService {

    @Override
    public JSONObject postStoneOneWord(String url, String json) {
        HttpClientService httpClient = new HttpClientService();
        JSONObject json_raw = httpClient.postMethod(url,json);
        return json_raw;
    }

    @Override
    public JSONObject getStoneBackground(String url) {
        HttpClientService httpClient = new HttpClientService();
        JSONObject json_raw = httpClient.getMethod(url);
        return json_raw;
    }
}
