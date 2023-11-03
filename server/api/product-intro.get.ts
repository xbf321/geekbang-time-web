export default defineEventHandler((event) => {
  const { title, subtitle, author, unit, column, extra, seo } = productIntro;
  return {
    title,
    subtitle,
    author,
    unit,
    column,
    extra,
    seo,
  };
});
