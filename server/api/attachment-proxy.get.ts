// @ts-nocheck
import { fetch } from "node-fetch-native";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { src } = query;
  return proxyRequest(event, src, {
    fetch,
    headers: { "referer": "https://time.geekbang.org/resource?m=0&d=3&c=0" },
    fetchOptions: {
      headers: {
        'referer': 'https://time.geekbang.org/opencourse/detail/100067401',
      }
    }
  });
});
