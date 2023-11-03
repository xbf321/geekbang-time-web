import CourseService from "../service/courses";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { pid } = query;
  const result = {};
  try {
    const { raw_data } = await CourseService.detail(Number(pid));
    const { title, subtitle, intro_html, author, seo, unit, column, extra } = raw_data || {};
    Object.assign(result, {
      title,
      subtitle,
      intro_html,
      author,
      seo,
      unit,
      column,
      extra,
    });
  } catch (err) {
    console.error(err);
  }
  return result;
});
