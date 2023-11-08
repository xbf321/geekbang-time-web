// @ts-nocheck
import pg from 'pg'

const useDB = () => {
  const pool = new pg.Pool({
    connectionString: `postgres://${process.env.DBURL || 'postgres:sasasa@127.0.0.1:5432/geekbang_time_web'}`,
  });
  return pool;
};
export default useDB;