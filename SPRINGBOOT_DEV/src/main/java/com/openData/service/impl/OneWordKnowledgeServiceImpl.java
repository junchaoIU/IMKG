package com.openData.service.impl;

import com.openData.dao.entity.OneWord;
import com.openData.service.OneWordKnowledgeService;
import com.openData.tools.HttpClientService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class OneWordKnowledgeServiceImpl implements OneWordKnowledgeService {

    @Override
    public List<OneWord> postOneWord(String url, String json) {
        HttpClientService httpClient = new HttpClientService();
        JSONObject json_raw = httpClient.postMethod(url, json);
        JSONArray ja = json_raw.getJSONArray("datas");
        List<OneWord> stoneOneWords = new ArrayList<>();
        for (int i = 0; i < ja.size(); i++) {
            OneWord stoneOneWord = new OneWord();
            JSONObject jo = ja.getJSONObject(i);
            System.out.println("jo" + jo);
            stoneOneWord.setId(String.valueOf(jo.get("@id")));
            stoneOneWord.setShelfMark(String.valueOf(jo.get("shelfMark")));
            stoneOneWord.setWork(String.valueOf(jo.get("work")));
            stoneOneWord.setScriptForm(String.valueOf(jo.get("scriptForm")));
            stoneOneWord.setCharactor(String.valueOf(jo.get("charactor")));
            stoneOneWord.setImage(String.valueOf(jo.get("originImage")));
            stoneOneWord.setPosInTextposInText(String.valueOf(jo.get("posInText")));
            String contributionss = "";
            System.out.println(jo.get("contribution"));
            if (jo.get("contribution") instanceof Map) {
                contributionss = String.valueOf("[" + jo.get("contribution") + "]");
            } else {
                contributionss = String.valueOf(jo.get("contribution"));
            }
            Map<String, String> conMap = new HashMap<>();
            System.out.println(contributionss);
            if (contributionss.equals("null")) {
                conMap.put("未知", "未知");
                stoneOneWord.setContribution(conMap);
            } else {
                List<Map<String, Object>> contributions = JSONArray.fromObject(contributionss);
                for (Map<String, Object> contribute : contributions) {
                    conMap.put(String.valueOf(contribute.get("role")), String.valueOf(contribute.get("agentLabel")));
                }
                stoneOneWord.setContribution(conMap);
            }
            stoneOneWords.add(stoneOneWord);
        }
        return stoneOneWords;
    }

    @Override
    public JSONObject getStoneBackground(String url) {
        HttpClientService httpClient = new HttpClientService();
        JSONObject json_raw = httpClient.getMethod(url);
        return json_raw;
    }
}
