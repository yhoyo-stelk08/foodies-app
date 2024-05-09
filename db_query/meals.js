import db from '@/database';

export const fetchAllMeals = async () => {
  // mocking a loading
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const result = db.query('SELECT * FROM meals ORDER BY id');
  return (await result).rows;
};
