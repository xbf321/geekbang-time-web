export default function replaceImageTag(content = '') {
  if (!content) {
    return '';
  }
  return content.replace(/(?<=(img[^>]*src="))[^"]*/g, (matches) => {
    return attachmentProxy(matches);
  });
};