export default function m3u8Proxy(src) {
  return `/api/m3u8-proxy?src=${encodeURIComponent(src)}`
};