package com.openData.service.impl;

import com.openData.OpenDataApplication;
import com.openData.controller.StoneKnowledgeController;
import com.openData.dao.entity.EchartsData;
import com.openData.dao.entity.EchartsLink;
import com.openData.dao.entity.EchartsNode;
import com.openData.dao.entity.StoneOneWord;
import com.openData.service.StoneKnowledgeService;
import com.openData.tools.ClassPathUtil;
import com.openData.tools.HttpClientService;
import com.openData.tools.JsonUtils;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class StoneKnowledgeServiceImpl implements StoneKnowledgeService {

    @Override
    public List<EchartsData> postStoneKnowledge(String url, String json) {
        HttpClientService httpClient = new HttpClientService();
        JSONObject json_raw = httpClient.postMethod(url,json);
        JSONArray ja = json_raw.getJSONArray("datas");
        List<EchartsData> datas = new ArrayList<>();
        String subject = "";
        //多个nodes
        System.out.println(ja.size());
        for (int i = 0; i < ja.size(); i++) {
            Set<EchartsNode> nodes = new HashSet<>();
            Set<EchartsLink> links = new HashSet<>();
            EchartsData data = new EchartsData();
            EchartsNode node = new EchartsNode();
            EchartsLink link = new EchartsLink();
            JSONObject jo = ja.getJSONObject(i);
            System.out.println("jo" + jo);
            //首题 {@type=Title, label=化度寺邕禅师舍利塔铭, variantType=首题}
            //写这行代码的时候 内心已经喷了某个程序员n遍S
            String bfTitleX = "";
            if(jo.get("bfTitle") instanceof Map){
                bfTitleX = String.valueOf("["+jo.get("bfTitle")+"]");
            }
            else {bfTitleX = String.valueOf(jo.get("bfTitle"));}
            List<Map<String, Object>> bfTitle = JSONArray.fromObject(bfTitleX);
            System.out.println(bfTitle);
            subject = String.valueOf(bfTitle.get(bfTitle.size()-1).get("label"));
            for (Map<String, Object> title:bfTitle) {
                node.setId((String) title.get("label"));
                node.setLabel((String) title.get("label"));
                node.setCategory((String) title.get("variantType"));
                link.setSource(subject);
                link.setTarget((String) title.get("label"));
                link.setCategory((String) title.get("variantType"));
                link.setLabel((String) title.get("variantType"));
                link.setSymbol((String) title.get("label") + ".jpg");
                nodes.add(node);
                links.add(link);
            }
            System.out.println(links);
            //责任者 李百药撰文，欧阳询楷书
            node = new EchartsNode();
            link = new EchartsLink();
            try {
                String creator = jo.getString("creator");
                System.out.println(creator);
                node.setId(creator);
                node.setLabel(creator);
                node.setCategory("责任人");
                link.setSource(subject);
                link.setTarget(creator);
                link.setCategory("责任人");
                link.setLabel("责任人");
                link.setSymbol(creator + ".jpg");
                nodes.add(node);
                links.add(link);
            }catch (Exception e)
            {System.out.println(e);}
            System.out.println(links);
            //书体 {@id: "http://data.library.sh.cn/vocab/calligraphy/kai-shu",@type: "Category",categoryType: "calligraphy",label: "楷书"}
            node = new EchartsNode();
            link = new EchartsLink();
            try {

                String scriptForm = jo.getJSONObject("scriptForm").getString("label");
                System.out.println(scriptForm);
                node.setId(scriptForm);
                node.setLabel(scriptForm);
                node.setCategory("书体");
                link.setSource(subject);
                link.setTarget(scriptForm);
                link.setCategory("书体");
                link.setLabel("书体");
                link.setSymbol(scriptForm + ".jpg");
                nodes.add(node);
                links.add(link);
            }catch (Exception e)
            {System.out.println(e);}
            System.out.println(links);
            //刻历年代 temporalValue: "唐贞观五年（31）"
            node = new EchartsNode();
            link = new EchartsLink();
            try {
                String temporalValue = jo.getString("temporalValue");
                System.out.println(temporalValue);
                node.setId(temporalValue);
                node.setLabel(temporalValue);
                node.setCategory("刻历年代");
                link.setSource(subject);
                link.setTarget(temporalValue);
                link.setCategory("刻历年代");
                link.setLabel("刻历年代");
                link.setSymbol(temporalValue + ".jpg");
                nodes.add(node);
                links.add(link);
            }catch (Exception e)
            {System.out.println(e);}
            System.out.println(links);
            //数量+尺寸+版本+馆藏地
            List<Map<String, Object>> instance = JSONArray.fromObject(String.valueOf(jo.get("instance")));
            //数量
            try{
            String binding = String.valueOf(instance.get(1).get("binding"));
            System.out.println(binding);
            node.setId(binding);
            node.setLabel(binding);
            node.setCategory("数量");
            link.setSource(subject);
            link.setTarget(binding);
            link.setCategory("数量");
            link.setLabel("数量");
            link.setSymbol(binding + ".jpg");
            nodes.add(node);
            links.add(link);
            System.out.println(links);
            }catch (Exception e)
            {System.out.println(e);}
            //尺寸
            node = new EchartsNode();
            link = new EchartsLink();
            try {
                String dimensions = String.valueOf(instance.get(1).get("dimensions"));
                System.out.println(dimensions);
                node.setId(dimensions);
                node.setLabel(dimensions);
                node.setCategory("尺寸");
                link.setSource(subject);
                link.setTarget(dimensions);
                link.setCategory("尺寸");
                link.setLabel("尺寸");
                link.setSymbol(dimensions + ".jpg");
                nodes.add(node);
                links.add(link);
            } catch (Exception e)
            {System.out.println(e);}
            System.out.println(links);
            //版本
            node = new EchartsNode();
            link = new EchartsLink();
            try {
                String edition = String.valueOf(instance.get(1).get("edition"));
                System.out.println(edition);
                node.setId(edition);
                node.setLabel(edition);
                node.setCategory("版本");
                link.setSource(subject);
                link.setTarget(edition);
                link.setCategory("版本");
                link.setLabel("版本");
                link.setSymbol(edition + ".jpg");
                nodes.add(node);
                links.add(link);
            } catch (Exception e)
            {System.out.println(e);}
            System.out.println(links);
            //馆藏地
            node = new EchartsNode();
            link = new EchartsLink();
            try {
                Map organizationM = (Map) instance.get(1).get("item");
                String organization = String.valueOf(organizationM.get("organization"));
                System.out.println(organization);
                node.setId(organization);
                node.setLabel(organization);
                node.setCategory("馆藏地");
                link.setSource(subject);
                link.setTarget(organization);
                link.setCategory("馆藏地");
                link.setLabel("馆藏地");
                link.setSymbol(organization + ".jpg");
                nodes.add(node);
                links.add(link);
            } catch (Exception e)
            {System.out.println(e);}
            System.out.println(links);
            //来源数目
            node = new EchartsNode();
            link = new EchartsLink();
            try {
                String noteOfSource = String.valueOf(instance.get(1).get("noteOfSource"));
                System.out.println(noteOfSource);
                node.setId(noteOfSource);
                node.setLabel(noteOfSource);
                node.setCategory("来源数目");
                link.setSource(subject);
                link.setTarget(noteOfSource);
                link.setCategory("来源数目");
                link.setLabel("来源数目");
                link.setSymbol(noteOfSource + ".jpg");
                nodes.add(node);
                links.add(link);
            } catch (Exception e)
            {System.out.println(e);}
            System.out.println(links);
            //收藏经历=流传经历+题记
            //流传经历
            node = new EchartsNode();
            link = new EchartsLink();
            try {
                Map organizationM = (Map) instance.get(1).get("item");
                Map notes = (Map) (organizationM.get("note"));
                String note = String.valueOf(notes.get("label"));
                System.out.println(note);
                node.setId(note);
                node.setLabel(note);
                node.setCategory("流传经历");
                link.setSource(subject);
                link.setTarget(note);
                link.setCategory("流传经历");
                link.setLabel("流传经历");
                link.setSymbol(note + ".jpg");
                nodes.add(node);
                links.add(link);
            } catch (Exception e)
            {System.out.println(e);}
            //题记
            node = new EchartsNode();
            link = new EchartsLink();
            try {
                String prefaceAndPostscript = String.valueOf(instance.get(1).get("prefaceAndPostscript"));
                System.out.println(prefaceAndPostscript);
                node.setId(prefaceAndPostscript);
                node.setLabel(prefaceAndPostscript);
                node.setCategory("题记");
                link.setSource(subject);
                link.setTarget(prefaceAndPostscript);
                link.setCategory("题记");
                link.setLabel("题记");
                link.setSymbol(prefaceAndPostscript + ".jpg");
                nodes.add(node);
                links.add(link);
                System.out.println(links);
            } catch (Exception e)
            {System.out.println(e);}
            //背景故事
            node = new EchartsNode();
            link = new EchartsLink();
            try {
                String annotation = jo.getJSONObject("hasAnnotation").getString("hasBody");
                System.out.println(annotation);
                node.setId(annotation);
                node.setLabel(annotation);
                node.setCategory("背景故事");
                link.setSource(subject);
                link.setTarget(annotation);
                link.setCategory("背景故事");
                link.setLabel("背景故事");
                link.setSymbol(annotation + ".jpg");
                nodes.add(node);
                links.add(link);
                System.out.println(links);
                data.setNodes(nodes);
                data.setLinks(links);
                datas.add(data);
            }catch (Exception e)
            {System.out.println(e);}
        }
        System.out.println(datas);

    return datas;
    }

    @Override
    public List<EchartsData> postPersonKnowledge(String personName) {
        String person = personName;
        List<EchartsData> datas = new ArrayList<>();
        String personJsonPath = ClassPathUtil.getClassPath()+"/personJson/";
        System.out.println(personJsonPath);
        String path = personJsonPath+personName+".json";
        System.out.println(path);
        try {
            String jsonStr = JsonUtils.readJsonFile(path);
            JSONObject person_ja = JSONObject.fromObject(jsonStr);
            Set<EchartsNode> nodes = new HashSet<>();
            Set<EchartsLink> links = new HashSet<>();
            EchartsData data = new EchartsData();
            EchartsNode node = new EchartsNode();
            EchartsLink link = new EchartsLink();
            //籍贯
            node.setId(person_ja.getString("provinceAbb"));
            node.setLabel(person_ja.getString("provinceAbb"));
            node.setCategory("籍贯");
            link.setSource(person);
            link.setTarget(person_ja.getString("provinceAbb"));
            link.setCategory(person_ja.getString("provinceAbb"));
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
            link.setCategory(person_ja.getString("temporal"));
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
            link.setCategory(person_ja.getString("briefBiography"));
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
                node.setCategory("碑帖");
                link.setSource(person);
                link.setTarget(String.valueOf(jo.getJSONObject("titleChs").get("@value")));
                link.setCategory(String.valueOf(jo.getJSONObject("titleChs").get("@value")));
                link.setLabel("碑帖");
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

    @Override
    public JSONObject getStoneDetail(String url) {
        HttpClientService httpClient = new HttpClientService();
        JSONObject json_raw = httpClient.getMethod(url);

        return json_raw;
    }

    @Override
    public List<StoneOneWord> postStoneOneWord(String url, String json) {
        HttpClientService httpClient = new HttpClientService();
        JSONObject json_raw = httpClient.postMethod(url, json);
        JSONArray ja = json_raw.getJSONArray("datas");
        List<StoneOneWord> stoneOneWords = new ArrayList<>();
        for (int i = 0; i < ja.size(); i++) {
            StoneOneWord stoneOneWord = new StoneOneWord();
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
