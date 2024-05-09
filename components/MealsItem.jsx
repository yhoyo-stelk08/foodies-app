import Link from 'next/link';
import Image from 'next/image';

const MealsItem = ({ title, slug, image, summary, creator }) => {
  const mealClass = `flex flex-col justify-between h-full rounded overflow-hidden shadow-xl transition-all duration-300 ease-in-out text-amber-100 bg-gradient-to-r from-amber-950 to-yellow-950`;
  const linkClass = `inline-block mt-4 py-2 px-4 rounded-lg text-white font-bold bg-gradient-to-r from-orange-600 to-orange-400 hover:shadow-lg active:shadow-lg hover:from-orange-700 hover:to-orange-500`
  return (
    <article className={`${mealClass}`}>
      <header>
        <div className={`relative h-80`}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={`p-[0.5rem 1rem 0 1rem] text-left`}>
          <h2 className="m-0 ml-4 text-2xl font-bold font-Montserrat">{title}</h2>
          <p className={`italic m-0 ml-4 text-xs text-red-200`}>by {creator}</p>
        </div>
      </header>
      <div className={`flex flex-col justify-between h-full`}>
        <p className={`px-4 pt-4 pb-0 text-left`}>{summary}</p>
        <div className={`p-4 text-right`}>
          <Link className={`${linkClass}`} href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};

export default MealsItem;
