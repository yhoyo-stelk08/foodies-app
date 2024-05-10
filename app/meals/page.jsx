import { Suspense } from 'react';
import Link from 'next/link';
import { fetchAllMeals } from '@/db_query/meals';

import MealsGrid from '@/components/MealsGrid';
import Spinner from '@/components/Spinner';

const Meals = async () => {
  const meals = await fetchAllMeals();
  return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
  const headerClass = `my-12 mx-auto mb-20 w-[90%] max-w-7xl gap-12 text-2xl text-orange-50`;
  const highlightClass = `bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400 `;

  return (
    <>
      {/* header section */}
      <header className={`${headerClass}`}>
        <h1 className="font-Montserrat text-4xl font-bold my-10">
          Delicious meals, created
          {/* highlight */}
          <span className={`${highlightClass}`}> By You</span>
        </h1>
        <p className="m-0">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        {/* classname cta */}
        <p>
          <Link
            className={`inline-block mt-4 py-2 px-4 rounded-lg text-white font-bold bg-gradient-to-r from-orange-700 to-amber-600`}
            href="/meals/share"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className={`text-center my-20 mx-auto`}>
        <Suspense fallback={<Spinner />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
