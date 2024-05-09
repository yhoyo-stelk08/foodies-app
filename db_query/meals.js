import db from '@/database';

export const fetchAllMeals = async () => {
  const result = db.query('SELECT * FROM meals ORDER BY id');
  return (await result).rows;
};
