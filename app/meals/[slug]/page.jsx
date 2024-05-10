import Image from 'next/image';
import { notFound } from 'next/navigation';
import classes from '@/app/meals/[slug]/page.module.css';
import { fetchMeal } from '@/db_query/meals';

const getMeal = async (slug) => {
  return await fetchMeal(slug);
};

const MealPage = async ({ params }) => {
  const meal = await getMeal(params.slug);

  if(!meal) {
    notFound();
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={`${classes.instructions} whitespace-break-spaces text-left`}
          
        >
          {meal.instruction}
        </p>
      </main>
    </>
  );
};

export default MealPage;
