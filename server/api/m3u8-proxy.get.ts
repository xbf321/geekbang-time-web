
// @ts-nocheck
import path from 'node:path';
import { fetch } from "node-fetch-native";
import getStream from 'get-stream';
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { src } = query;
  let originDomainAndDirName = '';
  try {
    const { origin, pathname } = new URL(decodeURIComponent(src));
    const dirName = path.dirname(pathname);
    originDomainAndDirName = `${origin}${dirName}`;
  } catch(err) {
    originDomainAndDirName = '';
    console.error(err);
  }
  
  return proxyRequest(event, src, {
    fetch,
    headers: { "referer": "https://time.geekbang.org/resource?m=0&d=3&c=0" },
    onResponse: async (event, response) => {
      if (originDomainAndDirName) {
        let data = await getStream(response.body);
        data = data.replace(/([-\w]+)\.ts/ig, (matcher) => {
          const fullUrl = `${originDomainAndDirName}/${matcher}`;
          return fullUrl;
          // return `/api/attachment-proxy?src=${encodeURIComponent(fullUrl)}`;
        });
        data = data.replace(/URI\=\"([^"]*)/ig, (matcher, $2) => {
          return 'URL="';
          // const fullUrl = `/api/attachment-proxy?src=${encodeURIComponent($2)}`;
          // return `URI="${fullUrl}`;
        });
        data = data.replace('#EXT-X-KEY:METHOD=AES-128,URL=""', '');
        response._data = data;
      }
    },
  });
});
