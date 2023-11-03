// @ts-nocheck
import pg from 'pg'

const useDB = () => {
  const { private: { dbConfig } } = useRuntimeConfig();
  const pool = new pg.Pool(dbConfig);
  return pool;
};
export default useDB;