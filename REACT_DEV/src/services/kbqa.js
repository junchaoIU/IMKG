import request from '@/utils/request';

export async function getQuestion(payload) {
  console.log(payload)
  let url= '/api2/KG_QA/QA_system';
  const data = {
    body: payload,
    method: "POST"
  };
  if(payload != null) {
    url += `?question=${payload}`;
    return request(url,data);
  }
}

