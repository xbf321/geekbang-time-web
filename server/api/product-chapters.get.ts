export default defineEventHandler((event) => {
  const { chapters, list } = productChapters;
  const result = chapters.map((chapter) => {
    const { title, article_count, id } = chapter;
    const children = (list.filter((item) => item.chapter_id === id) || []).map((item) => {
      return {
        article_title: item.article_title,
        id: item.id,
        audio_time: item.audio_time,
      };
    });
    return {
      title,
      article_count,
      id,
      children,
    };
  });
  return result;
});