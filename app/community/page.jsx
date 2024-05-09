import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';

const CommunityPage = () => {
  const perkLiClass = `flex flex-col items-center gap-8`;
  const perkImageClass = `w-32 h-32 object-contain`;
  const perkParaClass = `font-Montserrat text-2xl font-bold text-orange-50 m-0`
  return (
    <>
      <header
        className={`w-[90%] max-w-7xl gap-12 m-12 mt-20 text-2xl text-center text-orange-100`}
      >
        <h1 className="font-Montserrat">
          One shared passion:{' '}
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400`}
          >
            Food
          </span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={`w-[90%] max-w-2xl mt-0 mx-auto text-center`}>
        <h2 className="font-Montserrat mb-12 text-3xl text-orange-50">
          Community Perks
        </h2>

        <ul className={`list-none my-12 mx-0 p-0`}>
          <li className={perkLiClass}>
            <Image
              src={mealIcon}
              alt="A delicious meal"
              className={perkImageClass}
            />
            <p className={perkParaClass}>Share & discover recipes</p>
          </li>
          <li className={perkLiClass}>
            <Image
              src={communityIcon}
              alt="A crowd of people, cooking"
              className={perkImageClass}
            />
            <p className={perkParaClass}>Find new friends & like-minded people</p>
          </li>
          <li className={perkLiClass}>
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
              className={perkImageClass}
            />
            <p className={perkParaClass}>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
};

export default CommunityPage;
