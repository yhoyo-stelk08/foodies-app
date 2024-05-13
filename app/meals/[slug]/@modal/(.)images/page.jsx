import { fetchMeal } from '@/db_query/meals';
import { notFound } from 'next/navigation';
import ImageModal from '@/components/ImageModal';

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
      <ImageModal imgSrc={meal.image} imgTitle={meal.title} />
    </div>
  );
};
export default ImagesInterceptedPage;
