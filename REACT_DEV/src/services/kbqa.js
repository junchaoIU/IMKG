import request from '@/utils/request';

export async function getQuestion(payload) {
  console.log(payload)
  let url= '/api/postQASystem';
  const data = {
    body: payload,
    method: "POST"
  };
  if(payload != null) {
    url += `?que=${payload}`;
    return request(url,data);
  }
}

