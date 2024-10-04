import { Request } from "@/models/bestpos/request";

const API_URL = `/api`;

export const fetcher = async <T>({ url, method = 'GET', data, params, baseURL }: Request) => {
  let requestUrl = `${baseURL ?? API_URL}${url}`;
  if (method === 'GET' && params) {
    requestUrl = `${requestUrl}?${new URLSearchParams(params).toString()}`;
  }

  return fetch(requestUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    method,
  })
    .then(res => res.json())
    .then(res => res as T);
};
