import db from '@/database';
import slugify from 'slugify';
import xss from 'xss';
import { v4 as uuidv4 } from 'uuid';
import fs from 'node:fs';

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

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instruction = xss(meal.instruction);

  // get image extension
  const extension = meal.image.name.split('.').pop();
  const uniqId = uuidv4();
  const fileName = `${meal.slug}-${uniqId}.${extension}`

  // save image to file system
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  // writing image to filesystem
  stream.write(Buffer.from(bufferedImage), (error) => {
    if(error) {
      throw new Error('Saving image failed!!')
    }
  });
  // re assign the meal.image to the path of filename
  meal.image = `/images/${fileName}`

  // save meal to database table.
  try {
    db.query(`
    INSERT INTO meals (slug, title, image, summary, instruction, creator, creator_email) VALUES 
    ($1, $2, $3, $4, $5, $6, $7)
    `,[meal.slug, meal.title, meal.image, meal.summary, meal.instruction, meal.creator, meal.creator_email]);
  } catch (error) {
    console.log('Error occured when trying to saving meal to database table', error);
  }
};
