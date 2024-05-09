import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="flex gap-12 my-12 mx-auto w-[90%] max-w-7xl">
        {/* Slideshow div  */}
        <div className="w-[40rem] h-[25rem]"></div>
        <div>
          {/* Hero div  */}
          <div className="my-6 text-2xl text-[#ddd6cb]">
            <h1 className="my-8 text-4xl font-bold font-Montserrat tracking-[0.15rem] uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-400">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          {/* CTA div */}
          <div className="flex gap-4 text-2xl">
            <Link
              className="inline-block mt-4 pl-0 py-1 text-orange-500 hover:text-orange-200 active:text-orange-200"
              href="/community"
            >
              Join the Community
            </Link>
            <Link
              className="inline-block mt-4 rounded-xl text-yellow-200 py-1 px-4 font-bold bg-gradient-to-r from-orange-600 to-orange-200 hover:bg-gradient-to-r hover:from-orange-800 hover:to-orange-300"
              href="/meals"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col max-w-3xl w-[90%] my-8 mx-auto text-center text-yellow-50 text-2xl ">
          <h2 className='text-4xl font-bold py-2 px-4 my-8 mx-auto'>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col max-w-3xl w-[90%] my-8 mx-auto text-center text-yellow-50 text-2xl ">
          <h2 className='text-4xl font-bold py-2 px-4 my-8 mx-auto'>Why NextLevel Food?</h2>
          <p className='my-6'>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className='my-6'>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
