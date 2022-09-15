package com.openData.service;

import com.openData.dao.entity.OneWord;
import net.sf.json.JSONObject;

import java.util.List;

public interface OneWordKnowledgeService {

    List<OneWord> postOneWord(String url, String json);

    JSONObject getStoneBackground(String url);
}
