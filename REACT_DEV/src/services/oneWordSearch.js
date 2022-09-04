import request from '@/utils/request';

export async function oneWordSearch(payload) {
  console.log(payload)
  let url = `/api/postStoneOneWord`;
  const data = {
    body: {facet:payload.facet,freetext:payload.freetext},
    method: 'POST',
  };
  if (payload != null) {
    url += `?facet=${payload.facet}&freetext=${payload.freetext}`;
    return request(url, data);
  }
}
