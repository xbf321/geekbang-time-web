export default function replaceImageTag(content) {
  return content.replace(/(?<=(img[^>]*src="))[^"]*/g, (matches) => {
    return attachmentProxy(matches);
  });
};