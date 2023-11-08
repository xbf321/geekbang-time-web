import CourseService from "../service/courses";
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { courseId } = query;
  return CourseService.detail(Number(courseId));
});
