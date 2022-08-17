package com.openData.service;

import com.openData.dao.entity.EchartsData;
import net.sf.json.JSONObject;

import java.util.List;

public interface InscriptionsKnowledgeService {
    List<EchartsData> postInscriptionsKnowledge(String url, String json);

    JSONObject getInscriptionsDetail(String url);

}
