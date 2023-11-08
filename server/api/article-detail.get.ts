// @ts-nocheck
import ArticleService from "../service/articles";
export default defineEventHandler((event) => {
  const query = getQuery(event);
  const { id } = query;
  return ArticleService.detail(Number(id) || 0);
});
