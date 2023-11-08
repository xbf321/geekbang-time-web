// @ts-nocheck
class ChapterService {
  constructor() {
    this.db = useDb();
  }

  async listByCourseId(courseId) {
    const chapterResponse = await this.db.query("SELECT id, title, article_count FROM chapters WHERE course_id = $1 ORDER BY id", [courseId]);
    const chapterIds = chapterResponse.rows.map((item) => Number(item.id) || 0);
    let articles = [];
    if (chapterIds.length === 0) {
      // 没有目录，直接获取当前课程下所有文章
      const articleResponse = await this.db.query("SELECT id, chapter_id, title, raw_data FROM articles WHERE course_id = $1 ORDER BY ctime", [courseId]);
      articles = articleResponse.rows;
    } else {
      // 有目录
      const articleResponse = await this.db.query("SELECT id, chapter_id, title, raw_data FROM articles WHERE chapter_id = ANY($1::int[]) ORDER BY ctime", [chapterIds]);
      articles = articleResponse.rows;
    }
    
    return {
      chapters: chapterResponse.rows,
      articles
    };
  }

  async listByArticleId(articleId) {
    const chapterResponse = await this.db.query(`
      SELECT id, title, article_count FROM chapters WHERE EXISTS(
        SELECT course_id from articles
        WHERE articles.id = $1 AND articles.course_id = chapters.course_id
      ) ORDER BY id
    `, [articleId]);
    let articles = [];
    if (chapterResponse.rows.length === 0) {
      // 没有目录，直接获取当前课程下所有文章
      const articleResponse = await this.db.query(`
        SELECT id, title, raw_data FROM articles AS A WHERE EXISTS(
          SELECT course_id FROM articles AS B WHERE B.id = $1 AND A.course_id = B.course_id
        ) ORDER BY ctime
      `, [articleId]);
      articles = articleResponse.rows;
    } else {
      // 有目录
      const articleResponse = await this.db.query(`
      WITH A AS (
        SELECT id as chapter_id, title as chapter_title, article_count FROM chapters WHERE EXISTS(
          SELECT course_id from articles
          WHERE articles.id = $1 AND articles.course_id = chapters.course_id
        ) ORDER BY id
      )
      SELECT articles.id, articles.title, articles.chapter_id, articles.raw_data FROM articles 
        WHERE EXISTS(
        SELECT * FROM A WHERE CAST(A.chapter_id AS numeric) = CAST(articles.chapter_id AS numeric)
      ) ORDER BY ctime
    `, [articleId]);
      articles = articleResponse.rows;
    }
    
    return {
      chapters: chapterResponse.rows,
      articles,
    };
  }
};

export default new ChapterService();