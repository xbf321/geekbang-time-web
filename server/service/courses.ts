
// @ts-nocheck
class CourseService {
  constructor() {
    this.db = useDb();
  }
  async list(did, cid, pageIndex, pageSize) {
    did = isNaN(did) ? 0 : did;
    cid = isNaN(cid) ? 0 : cid;
    let total = 0;
    let list = [];
    const offset = (pageIndex - 1) * pageSize;
    // 查询全部
    if (did === 0 && cid === 0) {
      const totalSearchResponse = await this.db.query("SELECT COUNT(*) as count FROM courses");
      total = totalSearchResponse.rows[0].count;
      const searchResponse = await this.db.query('SELECT id, title, raw_data FROM courses ORDER BY utime DESC LIMIT $1 offset $2', [pageSize, offset || 0]);
      list = searchResponse.rows;
    } else {
      let labelValue = did;
      if (cid !== 0) {
        labelValue = cid;
      }
      const totalSearchResponse = await this.db.query("SELECT COUNT(*) as count FROM courses WHERE $1 = ANY(labels)", [labelValue]);
      total = totalSearchResponse.rows[0].count;
      const searchResponse = await this.db.query('SELECT id, title, raw_data FROM courses WHERE $3 = ANY(labels) ORDER BY utime DESC LIMIT $1 offset $2', [pageSize, offset || 0, labelValue]);
      list = searchResponse.rows;
    }
    return {
      total,
      list,
    };
  }
  async detail(course_id) {
    const result = await this.db.query("SELECT id, title, raw_data FROM courses WHERE id = $1", [course_id]);
    return result.rows[0];
  }
};

export default new CourseService();