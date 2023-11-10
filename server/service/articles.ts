// @ts-nocheck
class ArticleService {
  constructor() {
    this.db = useDb();
  }
  async detail(id) {
    const response = await this.db.query(`
      SELECT articles.id, articles.title, courses.id AS course_id, courses.title as course_title, articles.raw_data
      FROM articles
        INNER JOIN courses
        ON articles.course_id = courses.id
      WHERE articles.id = $1
    `, [id]);
    return response.rows[0] || {};
  }
};

export default new ArticleService();