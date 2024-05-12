import { fetchMeal } from '@/db_query/meals';
import { notFound } from 'next/navigation';
import Image from 'next/image';

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
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-85 flex justify-center items-center`}
      />
      <dialog className={`bg-slate-300 p-8 border-none rounded w-full max-w-3xl shadow-md`} open>
        <Image
          className={`my-12 mx-auto rounded-lg h-auto w-auto`}
          src={meal.image}
          alt={meal.title}
          width={400}
          height={200}
          priority
        />
      </dialog>
    </div>
  );
};
export default ImagesInterceptedPage;
