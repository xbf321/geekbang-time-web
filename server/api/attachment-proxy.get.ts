// @ts-nocheck
import { fetch } from "node-fetch-native";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { src } = query;
  return proxyRequest(event, src, {
    fetch,
    headers: {
      referer: "https://time.geekbang.org/resource",
    },
  });
});
