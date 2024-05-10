import db from '@/database';

export const fetchAllMeals = async () => {
  // mocking a loading
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  const result = db.query('SELECT * FROM meals ORDER BY id');
  return (await result).rows;
};

export const fetchMeal = async (slug) => {
  const result = await db.query('SELECT * FROM meals WHERE slug = $1', [slug]);
  return result.rows[0];
};
