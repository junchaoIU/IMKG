package com.openData.tools;


import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;

import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class HttpClientService {
    public JSONObject postMethod(String url, String json){
        JSONObject json_result = null;
        HttpClient httpClient = new DefaultHttpClient();
        HttpPost post = new HttpPost(url);
        StringEntity postingString = null;// json传递
        try {
            postingString = new StringEntity(json,"utf-8");
            post.setEntity(postingString);
            post.setHeader("Content-Type", "application/json;charset=utf-8");
            //post.setHeader("Authorization", s2); //token
            HttpResponse response = httpClient.execute(post);
            String entityString = EntityUtils.toString(response.getEntity());
            //转换成JSON格式输出
            json_result = JSONObject.fromObject(entityString);
            //System.out.println(json_result);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return json_result;
    }
    public JSONObject getMethod(String url){
        JSONObject json_result = null;
        HttpClient httpClient = new DefaultHttpClient();
        HttpGet get = new HttpGet(url);
        //StringEntity gettingString = null;// json传递
        try {
            //gettingString = new StringEntity(json,"utf-8");
            //get.setEntity(getingString);
            get.setHeader("Content-Type", "application/json;charset=utf-8");
            //post.setHeader("Authorization", s2); //token
            HttpResponse response = httpClient.execute(get);
            String entityString = EntityUtils.toString(response.getEntity());
            //转换成JSON格式输出
            json_result = JSONObject.fromObject(entityString);
            System.out.println(json_result);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return json_result;
    }
    /**
     * 将json对象转换为HashMap
     * @param json
     * @return
     */
    public Map<String, Object> parseJSON2Map(JSONObject json) {
        Map<String, Object> map = new HashMap<String, Object>();
        // 最外层解析
        for (Object k : json.keySet()) {
            Object v = json.get(k);
            // 如果内层还是json数组的话，继续解析
            if (v instanceof JSONArray) {
                List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
                Iterator<JSONObject> it = ((JSONArray) v).iterator();
                while (it.hasNext()) {
                    JSONObject json2 = it.next();
                    list.add(parseJSON2Map(json2));
                }
                map.put(k.toString(), list);
            } else if (v instanceof JSONObject) {
                // 如果内层是json对象的话，继续解析
                map.put(k.toString(), parseJSON2Map((JSONObject) v));
            } else {
                // 如果内层是普通对象的话，直接放入map中
                map.put(k.toString(), v);
            }
        }
        return map;
    }

         }
