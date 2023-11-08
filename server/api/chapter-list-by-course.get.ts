// @ts-nocheck
import ChapterService from "../service/chapters";
export default defineEventHandler((event) => {
  const query = getQuery(event);
  const { courseId } = query;
  return ChapterService.listByCourseId(Number(courseId) || 0);
});