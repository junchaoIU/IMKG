import request from '@/utils/request';

export async function knowledgeSearch(payload) {
  let url = `/api/inscriptionsKnowledge/postKnowledgeSearch`;
  const data = {
    body: payload,
    method: 'POST',
  };
  if (payload != null) {
    url += `?freetext=${payload}`;
    return request(url, data);
  }
}
