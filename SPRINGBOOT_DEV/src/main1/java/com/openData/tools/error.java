package com.openData.tools;

import com.alibaba.fastjson.JSONObject;
import net.sf.json.JSONArray;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicHeader;
import org.apache.http.util.EntityUtils;

import java.util.List;
import java.util.Map;
import java.util.Set;


public class error {
    public static Object sendPost(String url,  Map<String, String> map) throws Exception{
        JSONObject jsonObject = null;
        CloseableHttpClient client = null;
        CloseableHttpResponse response = null;
        try{
            /**
             * 创建一个httpclient对象
             */
            client = HttpClients.createDefault();
            /**
             * 创建一个post对象
             */
            HttpPost post = new HttpPost(url);

            JSONObject jsonParam = new JSONObject();
            Set<String> set = map.keySet();
            for (String str : set) {//将Map转换成JSONObject
                jsonParam.put(str, map.get(str));
            }
            JSONArray jsonArray = new JSONArray();
            jsonArray.add(jsonParam);//将JSONObject转换成JSONArray入参

            /**
             * 设置上传byte[]数组文件流
             builder.addBinaryBody("data", byteOutStream.toByteArray(), ContentType.MULTIPART_FORM_DATA, "AudioFile.wav");
             HttpEntity entity = builder.build();
             */

            /**
             * 设置上传单一对象
             */
            StringEntity entity = new StringEntity(jsonArray.toString(), "utf-");

            /**
             * 设置请求的内容
             */
            post.setEntity(entity);
            /**
             * 设置请求的报文头部的编码
             */
            post.setHeader(new BasicHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-"));
            /**
             * 设置请求的报文头部的编码
             */
            post.setHeader(new BasicHeader("Accept", "text/plain;charset=utf-"));
            /**
             * 执行post请求
             */
            response = client.execute(post);
            /**
             * 获取响应码
             */
            int statusCode = response.getStatusLine().getStatusCode();
            System.out.println(statusCode);
            if ( 200 == statusCode){
                /**
                 * 通过EntityUitls获取返回内容
                 */
                String result = EntityUtils.toString(response.getEntity(),"UTF-");
                /**
                 * 转换成json,根据合法性返回json或者字符串
                 */
                try{
                    jsonObject = JSONObject.parseObject(result);
                    return jsonObject;
                }catch (Exception e){
                    return result;
                }
            }else{
                System.out.println("97");
            }
        }catch (Exception e){
           System.out.println(e);
        }finally {
            response.close();
            client.close();
        }
        return null;
    }

         /**
   * HttpClient发送GET请求
   */
             /**
       * 发送GET请求
      // * @param url请求url
       //* @param name请求参数
       * @return JSON
       * @throws Exception
       */
             public Object sendGet(String url, List name) throws Exception{
                     JSONObject jsonObject = null;
                     CloseableHttpClient client = null;
                     CloseableHttpResponse response = null;
                     try{
                             /**
                               * 创建HttpClient对象
                               */
                             client = HttpClients.createDefault();
                             /**
                               * 创建URIBuilder
                               */
                             URIBuilder uriBuilder = new URIBuilder(url);

                             /**
                               * 设置参数
                               */
                             uriBuilder.addParameters(name);
                             /**
                               * 创建HttpGet
                               */
                             HttpGet httpGet = new HttpGet(uriBuilder.build());
                             /**
                               * 设置请求头部编码
                               */
                             httpGet.setHeader(new BasicHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-"));
                             /**
                               * 请求服务
                               */
                             response = client.execute(httpGet);
                             /**
                               * 获取响应吗
                               */
                             int statusCode = response.getStatusLine().getStatusCode();

                             if ( 200 == statusCode){
                                     /**
                                       * 获取返回对象
                                       */
                                     HttpEntity entity = response.getEntity();
                                     /**
                                       * 通过EntityUitls获取返回内容
                                       */
                                     String result = EntityUtils.toString(entity,"UTF-");
                                     /**
                                       * 转换成json,根据合法性返回json或者字符串
                                       */
                                     try{
                                             jsonObject = JSONObject.parseObject(result);
                                             return jsonObject;
                                         }catch (Exception e){
                                             return result;
                                         }
                                 }else{
                                 System.out.println("97");
                             }
                         }catch (Exception e){

                         System.out.println(e);
                         } finally {
                             response.close();
                             client.close();
                         }
                     return null;
                 }
    public String getJob(){
        String result = "";
        String json = "{\"status\":1,\"startTime\":\"2021-03-11T16:51:24\",\"endTime\":\"2120-02-16T17:51:24\"}";
        HttpClient httpClient = new DefaultHttpClient();
        HttpPost post = new HttpPost("http://www.baidu.com");
        StringEntity postingString = null;// json传递
        try {
            postingString = new StringEntity(json);
            //post.setEntity(postingString);
            post.setHeader("Content-type", "application/json");
            //post.setHeader("Authorization", s2);
            HttpResponse response = httpClient.execute(post);
            String content = EntityUtils.toString(response.getEntity());
            System.out.println(content);
            result = content;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

         }
