package com.openData.service.impl;

import com.openData.dao.entity.EchartsData;
import com.openData.dao.entity.EchartsLink;
import com.openData.dao.entity.EchartsNode;
import com.openData.service.CelebritiesKnowledgeService;
import com.openData.service.InscriptionsKnowledgeService;
import com.openData.tools.ClassPathUtil;
import com.openData.tools.HttpClientService;
import com.openData.tools.JsonUtils;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CelebritiesKnowledgeServiceImpl implements CelebritiesKnowledgeService {


    @Override
    public List<EchartsData> postCelebritiesKnowledge(String celebritiesName) {
        String person = celebritiesName;
        List<EchartsData> datas = new ArrayList<>();
        String personJsonPath = ClassPathUtil.getClassPath()+"/personJson/";
        System.out.println(personJsonPath);
        String path = personJsonPath+celebritiesName+".json";
        System.out.println(path);
        Set<EchartsNode> nodes = new HashSet<>();
        Set<EchartsLink> links = new HashSet<>();
        EchartsData data = new EchartsData();
        EchartsNode node1 = new EchartsNode();
        node1.setId(celebritiesName);
        node1.setLabel(celebritiesName);
        node1.setCategory("名家");
        nodes.add(node1);
        try {
            String jsonStr = JsonUtils.readJsonFile(path);
            JSONObject person_ja = JSONObject.fromObject(jsonStr);
            //籍贯
            EchartsNode node = new EchartsNode();
            EchartsLink link = new EchartsLink();
            node.setId(person_ja.getString("provinceAbb"));
            node.setLabel(person_ja.getString("provinceAbb"));
            node.setCategory("地点");
            link.setSource(person);
            link.setTarget(person_ja.getString("provinceAbb"));
            link.setCategory("籍贯");
            link.setLabel("籍贯");
            link.setSymbol(person_ja.getString("provinceAbb") + ".jpg");
            nodes.add(node);
            links.add(link);
            //朝代
            node = new EchartsNode();
            link = new EchartsLink();
            node.setId(person_ja.getString("temporal"));
            node.setLabel(person_ja.getString("temporal"));
            node.setCategory("朝代");
            link.setSource(person);
            link.setTarget(person_ja.getString("temporal"));
            link.setCategory("朝代");
            link.setLabel("朝代");
            link.setSymbol(person_ja.getString("provinceAbb") + ".jpg");
            nodes.add(node);
            links.add(link);
            //名家小传
            node = new EchartsNode();
            link = new EchartsLink();
            node.setId(person_ja.getString("briefBiography"));
            node.setLabel(person_ja.getString("briefBiography"));
            node.setCategory("名家小传");
            link.setSource(person);
            link.setTarget(person_ja.getString("briefBiography"));
            link.setCategory("名家小传");
            link.setLabel("名家小传");
            link.setSymbol(person_ja.getString("briefBiography") + ".jpg");
            nodes.add(node);
            links.add(link);
            //碑帖

            JSONArray person_work = person_ja.getJSONArray("work");
            for (int i = 0; i < person_work.size(); i++) {
                node = new EchartsNode();
                link = new EchartsLink();
                JSONObject jo = person_work.getJSONObject(i);
                jo.getJSONObject("titleChs").get("@value");
                node.setId(String.valueOf(jo.getJSONObject("titleChs").get("@value")));
                node.setLabel(String.valueOf(jo.getJSONObject("titleChs").get("@value")));
                node.setCategory("碑帖作品");
                link.setSource(person);
                link.setTarget(String.valueOf(jo.getJSONObject("titleChs").get("@value")));
                link.setCategory("碑帖作品");
                link.setLabel("碑帖作品");
                link.setSymbol(String.valueOf(jo.getJSONObject("titleChs").get("@value")) + ".jpg");
                nodes.add(node);
                links.add(link);
            }
            data.setLinks(links);
            data.setNodes(nodes);
            datas.add(data);
            return datas;
        }catch (Exception e)
        {
            return datas;
        }
    }
}
