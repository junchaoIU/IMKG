import request from '@/utils/request';
export async function relationSearch(payload) {
  let url= '/api/postStoneOneWord';
  console.log(payload.facet)
  const data = {
    body: {CO:payload.CO,scriptForm:payload.scriptForm,TI:payload.TI,freetext:payload.freetext},
    method: 'POST',
  };
  if(payload != null) {
    url += `?CO=${payload.CO}&scriptForm=${payload.scriptForm}&TI=${payload.TI}&freetext=${payload.freetext}`;
    return request(url,data);
  }
}
