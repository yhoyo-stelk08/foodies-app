import { fetchMeal } from '@/db_query/meals';
import { notFound } from 'next/navigation';
import Image from 'next/image';

const getMeal = async (slug) => {
  return await fetchMeal(slug);
};

const ImagesPage = async ({ params }) => {
  const mealSlug = params.slug;
  const meal = await getMeal(mealSlug);

  if (!meal) {
    notFound();
  }

  return (
    <div>
      <Image
        className={`my-12 mx-auto rounded-lg h-auto w-auto`}
        src={meal.image}
        alt={meal.title}
        width={400}
        height={200}
        priority
      />
    </div>
  );
};
export default ImagesPage;
