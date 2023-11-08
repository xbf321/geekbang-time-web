export default function attachmentProxy(src) {
  return `/api/attachment-proxy?src=${encodeURIComponent(src)}`
};
