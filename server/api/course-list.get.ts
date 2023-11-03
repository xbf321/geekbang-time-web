import CourseService from "../service/courses";
export default defineEventHandler((event) => {
  const query = getQuery(event);
  const { did, cid, pageIndex, pageSize } = query;
  return CourseService.list(Number(did), Number(cid), Number(pageIndex), Number(pageSize));
});
