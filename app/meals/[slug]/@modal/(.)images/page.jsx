import { fetchMeal } from '@/db_query/meals';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import classes from '@/app/meals/[slug]/@modal/(.)images/page.module.css'

const getMeal = async (slug) => {
  return await fetchMeal(slug);
};

const ImagesInterceptedPage = async ({ params }) => {
  const mealSlug = params.slug;
  const meal = await getMeal(mealSlug);

  if (!meal) {
    notFound();
  }

  return (
    <div >
      <div
        className={classes.backdrop}
      >
      <dialog className={classes.modal} open>
        <Image
          className={classes.imgModal}
          src={meal.image}
          alt={meal.title}
          width={400}
          height={200}
          priority
        />
      </dialog>
      </div>
    </div>
  );
};
export default ImagesInterceptedPage;
