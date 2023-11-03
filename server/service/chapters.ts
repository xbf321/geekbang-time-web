// @ts-nocheck
class ChapterService {
  constructor() {
    this.db = useDb();
  }
  async list(courseId) {
    const chapterList = await this.db.query("SELECT id, source_id, title article_count FROM chapters WHERE course_id = $1 ORDER BY id", [courseId]);
    const chapterIds = chapterList.rows.map((item) => Number(item.id) || 0);
    const articleList = await this.db.query("SELECT id, chapter_id, raw_2 FROM articles WHERE chapter_id = ANY($1::int[])", [chapterIds]);
    return {
      chapters: chapterList.rows,
      list: articleList.rows,
    };
  }
};

export default new ChapterService();