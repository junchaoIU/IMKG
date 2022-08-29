package com.openData.service;

import com.openData.dao.entity.EchartsData;
import com.openData.dao.entity.StoneOneWord;
import net.sf.json.JSONObject;

import java.util.List;

public interface StoneKnowledgeService {
    List<EchartsData> postStoneKnowledge(String url, String json);

    List<EchartsData> postPersonKnowledge(String personName);

    JSONObject getStoneDetail(String url);

    List<StoneOneWord> postStoneOneWord(String url, String json);

    JSONObject getStoneBackground(String url);
}
