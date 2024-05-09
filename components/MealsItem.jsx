import Link from 'next/link';
import Image from 'next/image';

const MealsItem = ({ title, slug, image, summary, creator }) => {
  const mealClass = `flex flex-col justify-between h-full rounded overflow-hidden shadow-xl transition-all duration-300 ease-in-out text-amber-100 bg-gradient-to-r from-amber-950 to-yellow-950`;
  return (
    <article className={`${mealClass}`}>
      <header>
        <div className={`relative h-60`}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={`p-[0.5rem 1rem 0 1rem]`}>
          <h2 className="m-0 text-2xl font-Montserrat">{title}</h2>
          <p className={`italic text-xs text-red-200`}>by {creator}</p>
        </div>
      </header>
      <div className={`flex flex-col justify-between h-full`}>
        <p className={`px-4 pt-4 pb-0`}>{summary}</p>
        <div className={`p-4 text-right`}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};

export default MealsItem;
