
// @ts-nocheck
class CourseService {
  constructor() {
    this.db = useDb();
  }
  async list(did, cid, pageIndex, pageSize) {
    const totalResult = await this.db.query("SELECT COUNT(*) as count FROM courses");
    const offset = (pageIndex - 1) * pageSize;
    const allDataSQL = "SELECT id, title, subtitle, author, unit, cover FROM courses LIMIT $1 offset $2";
    const specialDataSQL = "SELECT id, title, subtitle, author, unit, cover FROM courses LIMIT $1 offset $2";
    const result = await this.db.query(did === 0 ? allDataSQL : specialDataSQL, [pageSize, offset || 0]);
    return {
      total: totalResult.rows[0].count,
      list: result.rows,
    };
  }
  async detail(course_id) {
    const result = await this.db.query("SELECT id, raw_data FROM courses WHERE id = $1", [course_id]);
    return result.rows[0];
  }
};

export default new CourseService();