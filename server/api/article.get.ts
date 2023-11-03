export default defineEventHandler((event) => {
  const {
    article_title,
    article_cover,
    audio_url,
    article_content,
    author_name,
    article_cover_hidden,
    audio_title,
    video_id,
  } = articleDetail;
  return {
    article_title,
    article_cover,
    audio_url,
    article_content,
    author_name,
    article_cover_hidden,
    audio_title,
    video_id,
  };
});
