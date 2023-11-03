// @ts-nocheck
import ChapterService from "../service/chapters";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { courseId } = query;
  const { chapters, list } = await ChapterService.list(Number(courseId) || 0);
  const result = chapters.map((chapter) => {
    const { title, article_count, id } = chapter;
    const children = (list.filter((item) => item.chapter_id === id) || []).map((item) => {
      const { raw_2: rawData} = item;
      return {
        article_title: rawData.article_title,
        id: rawData.id,
        audio_time: rawData.audio_time,
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