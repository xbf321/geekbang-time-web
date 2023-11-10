export default function attachmentProxy(src = '') {
  if (!src) {
    return '';
  }
  return `/api/attachment-proxy?src=${encodeURIComponent(src)}`
};
