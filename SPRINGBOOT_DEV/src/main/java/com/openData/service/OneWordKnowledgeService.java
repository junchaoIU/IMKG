package com.openData.service;

import net.sf.json.JSONObject;

public interface OneWordKnowledgeService {

    JSONObject postStoneOneWord(String url, String json);

    JSONObject getStoneBackground(String url);
}
