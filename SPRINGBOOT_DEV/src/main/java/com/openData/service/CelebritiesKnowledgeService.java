package com.openData.service;

import com.openData.dao.entity.EchartsData;
import net.sf.json.JSONObject;

import java.util.List;

public interface CelebritiesKnowledgeService {

    JSONObject postCelebritiesKnowledge(String url);

    JSONObject getCelebritiesDetail(String url);

}
