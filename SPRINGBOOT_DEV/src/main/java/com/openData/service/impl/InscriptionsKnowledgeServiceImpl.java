package com.openData.service.impl;

import com.openData.dao.entity.EchartsData;
import com.openData.dao.entity.EchartsLink;
import com.openData.dao.entity.EchartsNode;
import com.openData.service.InscriptionsKnowledgeService;
import com.openData.tools.HttpClientService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class InscriptionsKnowledgeServiceImpl implements InscriptionsKnowledgeService {

    @Override
    public List<EchartsData> postInscriptionsKnowledge(String url, String json) {
        HttpClientService httpClient = new HttpClientService();
        JSONObject json_raw = httpClient.postMethod(url, json);
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
            if (jo.get("bfTitle") instanceof Map) {
                bfTitleX = String.valueOf("[" + jo.get("bfTitle") + "]");
            } else {
                bfTitleX = String.valueOf(jo.get("bfTitle"));
            }
            List<Map<String, Object>> bfTitle = JSONArray.fromObject(bfTitleX);
            System.out.println(bfTitle);
            subject = String.valueOf(bfTitle.get(bfTitle.size() - 1).get("label"));
            for (Map<String, Object> title : bfTitle) {
                node.setName((String) title.get("label"));
                node.setLabel((String) title.get("label"));
                node.setCategory((String) title.get("variantType"));
                node.setId(node.getName()+node.getCategory());
                link.setSource(subject+"碑帖作品");
                link.setTarget(node.getId());
                link.setCategory((String) title.get("variantType"));
                link.setLabel(node.getName());link.setValue(node.getName());
                link.setSymbol((String) title.get("label") + ".jpg");
                nodes.add(node);
                links.add(link);
            }
            System.out.println(links);
            //subject节点
            node = new EchartsNode();
            node.setName(subject);
            node.setLabel(subject);
            node.setCategory("碑帖作品");
            node.setId(node.getName()+node.getCategory());
            nodes.add(node);
            //责任者 李百药撰文，欧阳询楷书
            String contributions = "";
            try {
                if (jo.get("contribution") instanceof Map) {
                    contributions = String.valueOf("[" + jo.get("contribution") + "]");
                } else {
                    contributions = String.valueOf(jo.get("contribution"));
                }
                List<Map<String, Object>> contributionsList = JSONArray.fromObject(contributions);
                for (Map<String, Object> contributionMap : contributionsList) {
                    node = new EchartsNode();
                    link = new EchartsLink();
                    node.setName((String) contributionMap.get("agentLabel"));
                    node.setLabel((String) contributionMap.get("agentLabel"));
                    node.setCategory((String) contributionMap.get("role"));
                    node.setId(node.getName()+node.getCategory());
                    link.setSource(subject+"碑帖作品");
                    link.setTarget(node.getId());
                    link.setCategory((String) contributionMap.get("role"));
                    link.setLabel(node.getName());link.setValue(node.getName());
                    link.setSymbol((String) contributionMap.get("agentLabel") + ".jpg");
                    nodes.add(node);
                    links.add(link);
                }
//                String creator = jo.getString("creator");
//                System.out.println(creator);
//                node.setId(creator);
//                node.setLabel(creator);
//                node.setCategory("责任人");
//                link.setSource(subject);
//                link.setTarget(creator);
//                link.setCategory("责任人");
//                link.setLabel("责任人");
//                link.setSymbol(creator + ".jpg");
//                nodes.add(node);
//                links.add(link);
            } catch (Exception e) {
                System.out.println(e);
            }
            System.out.println(links);
            //书体 {@id: "http://data.library.sh.cn/vocab/calligraphy/kai-shu",@type: "Category",categoryType: "calligraphy",label: "楷书"}
            node = new EchartsNode();
            link = new EchartsLink();
            try {

                String scriptForm = jo.getJSONObject("scriptForm").getString("label");
                System.out.println(scriptForm);
                node.setName(scriptForm);
                node.setLabel(scriptForm);
                node.setCategory("书体");
                node.setId(node.getName()+node.getCategory());
                link.setSource(subject+"碑帖作品");
                link.setTarget(node.getId());
                link.setCategory("书体");
                link.setLabel(node.getName());link.setValue(node.getName());
                link.setSymbol(scriptForm + ".jpg");
                nodes.add(node);
                links.add(link);
            } catch (Exception e) {
                System.out.println(e);
            }
            System.out.println(links);
            //刻历年代 temporalValue: "唐贞观五年（31）"
            node = new EchartsNode();
            link = new EchartsLink();
            try {
                String temporalValue = jo.getString("temporalValue");
                System.out.println(temporalValue);
                node.setName(temporalValue);
                node.setLabel(temporalValue);
                node.setCategory("时间");
                node.setId(node.getName()+node.getCategory());
                link.setSource(subject+"碑帖作品");
                link.setTarget(node.getId());
                link.setCategory("刻历年代");
                link.setLabel(node.getName());link.setValue(node.getName());
                link.setSymbol(temporalValue + ".jpg");
                nodes.add(node);
                links.add(link);
            } catch (Exception e) {
                System.out.println(e);
            }
            System.out.println(links);
            //数量+尺寸+版本+馆藏地
            List<Map<String, Object>> instance = JSONArray.fromObject(String.valueOf(jo.get("instance")));
            //数量
            try {
                String binding = String.valueOf(instance.get(1).get("binding"));
                System.out.println(binding);
                node.setName(binding);
                node.setLabel(binding);
                node.setCategory("数量");
                node.setId(node.getName()+node.getCategory());
                link.setSource(subject+"碑帖作品");
                link.setTarget(node.getId());
                link.setCategory("数量");
                link.setLabel(node.getName());link.setValue(node.getName());
                link.setSymbol(binding + ".jpg");
                nodes.add(node);
                links.add(link);
                System.out.println(links);
            } catch (Exception e) {
                System.out.println(e);
            }
            //尺寸
            node = new EchartsNode();
            link = new EchartsLink();
            try {
                String dimensions = String.valueOf(instance.get(1).get("dimensions"));
                System.out.println(dimensions);
                node.setName(dimensions);
                node.setLabel(dimensions);
                node.setCategory("尺寸");
                node.setId(node.getName()+node.getCategory());
                link.setSource(subject+"碑帖作品");
                link.setTarget(node.getId());
                link.setCategory("尺寸");
                link.setLabel(node.getName());link.setValue(node.getName());
                link.setSymbol(dimensions + ".jpg");
                nodes.add(node);
                links.add(link);
            } catch (Exception e) {
                System.out.println(e);
            }
            System.out.println(links);
            //版本
            node = new EchartsNode();
            link = new EchartsLink();
            try {
                String edition = String.valueOf(instance.get(1).get("edition"));
                System.out.println(edition);
                node.setName(edition);
                node.setLabel(edition);
                node.setCategory("版本");
                node.setId(node.getName()+node.getCategory());
                link.setSource(subject+"碑帖作品");
                link.setTarget(node.getId());
                link.setCategory("版本");
                link.setLabel(node.getName());link.setValue(node.getName());
                link.setSymbol(edition + ".jpg");
                nodes.add(node);
                links.add(link);
            } catch (Exception e) {
                System.out.println(e);
            }
            System.out.println(links);
            //馆藏地
            node = new EchartsNode();
            link = new EchartsLink();
            try {
                Map organizationM = (Map) instance.get(1).get("item");
                String organization = String.valueOf(organizationM.get("organization"));
                System.out.println(organization);
                node.setName(organization);
                node.setLabel(organization);
                node.setCategory("地点");
                node.setId(node.getName()+node.getCategory());
                link.setSource(subject+"碑帖作品");
                link.setTarget(node.getId());
                link.setCategory("馆藏地");
                link.setLabel(node.getName());link.setValue(node.getName());
                link.setSymbol(organization + ".jpg");
                nodes.add(node);
                links.add(link);
            } catch (Exception e) {
                System.out.println(e);
            }
            System.out.println(links);
            //来源数目
            node = new EchartsNode();
            link = new EchartsLink();
            try {
                String noteOfSource = String.valueOf(instance.get(1).get("noteOfSource"));
                System.out.println(noteOfSource);
                node.setName(noteOfSource);
                node.setLabel(noteOfSource);
                node.setCategory("来源数目");
                node.setId(node.getName()+node.getCategory());
                link.setSource(subject+"碑帖作品");
                link.setTarget(node.getId());
                link.setCategory("来源数目");
                link.setLabel(node.getName());link.setValue(node.getName());
                link.setSymbol(noteOfSource + ".jpg");
                nodes.add(node);
                links.add(link);
            } catch (Exception e) {
                System.out.println(e);
            }
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
                node.setName(note);
                node.setLabel(note);
                node.setCategory("流传经历");
                node.setId(node.getName()+node.getCategory());
                link.setSource(subject+"碑帖作品");
                link.setTarget(node.getId());
                link.setCategory("流传经历");
                link.setLabel(node.getName());link.setValue(node.getName());
                link.setSymbol(note + ".jpg");
                nodes.add(node);
                links.add(link);
            } catch (Exception e) {
                System.out.println(e);
            }
            //题记
            node = new EchartsNode();
            link = new EchartsLink();
            try {
                String prefaceAndPostscript = String.valueOf(instance.get(1).get("prefaceAndPostscript"));
                System.out.println(prefaceAndPostscript);
                node.setName(prefaceAndPostscript);
                node.setLabel(prefaceAndPostscript);
                node.setCategory("题记");
                node.setId(node.getName()+node.getCategory());
                link.setSource(subject+"碑帖作品");
                link.setTarget(node.getId());
                link.setCategory("题记");
                link.setLabel(node.getName());link.setValue(node.getName());
                link.setSymbol(prefaceAndPostscript + ".jpg");
                nodes.add(node);
                links.add(link);
                System.out.println(links);
            } catch (Exception e) {
                System.out.println(e);
            }
            //背景故事
            node = new EchartsNode();
            link = new EchartsLink();
            try {
                String annotation = jo.getJSONObject("hasAnnotation").getString("hasBody");
                System.out.println(annotation);
                node.setName(annotation);
                node.setLabel(annotation);
                node.setCategory("背景故事");
                node.setId(node.getName()+node.getCategory());
                link.setSource(subject+"碑帖作品");
                link.setTarget(node.getId());
                link.setCategory("背景故事");
                link.setLabel(node.getName());link.setValue(node.getName());
                link.setSymbol(annotation + ".jpg");
                nodes.add(node);
                links.add(link);
                System.out.println(links);
                data.setNodes(nodes);
                data.setLinks(links);
                datas.add(data);
            } catch (Exception e) {
                System.out.println(e);
            }
        }
        System.out.println(datas);

        return datas;
    }

    @Override
    public JSONObject getInscriptionsDetail(String url) {
        HttpClientService httpClient = new HttpClientService();
        JSONObject json_raw = httpClient.getMethod(url);
        return json_raw;
    }

}
