// @ts-nocheck
import ChapterService from "../service/chapters";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { articleId } = query;
  return ChapterService.listByArticleId(Number(articleId) || 0);
});