import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="grid h-full max-h-screen w-full overflow-hidden bg-section-background bg-cover bg-center sm:grid-flow-col sm:grid-cols-2 sm:py-16 md:grid-rows-1 xl:px-16">
      <div className="row-start-2 ml-8 flex h-4/5 flex-col items-start justify-center sm:row-start-1">
        <h1 className="text-black-600 text-3xl font-medium leading-normal lg:text-4xl xl:text-5xl">
          Explore a World of Flavor <br />
          <strong>Shop Our Exclusive Food Recipes</strong>.
        </h1>
        <ul className="mt-10 flex flex-wrap items-center justify-center">
          <li>
            <Link
              to="/menu"
              className="text-dark hover:text-primary inline-flex cursor-pointer items-center justify-center rounded-lg bg-white px-6 py-4 text-center text-base font-medium transition duration-300 ease-in-out hover:shadow-lg sm:px-10"
            >
              Order Now
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex h-4/5 w-full items-center justify-center">
        <img
          src="src/assets/beef-food-image.png"
          alt="Beef food image"
          className="h-[36rem] w-[36rem]"
        />
      </div>
    </div>
  );
}

// <div className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center">
//   {/* <h1 className="pb-5 pt-28 text-3xl font-bold leading-snug text-zinc-800 sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug">
//     Explore a World of Flavor
//     <br />
//     <span className="text-3xl font-light italic">
//       Shop Our Exclusive Food Recipes
//     </span>
//   </h1> */}

//   <ul className="mb-10 flex flex-wrap items-center justify-center">
//     <li>
//       <span className="text-dark hover:text-primary inline-flex cursor-pointer items-center justify-center rounded-lg bg-white px-6 py-4 text-center text-base font-medium transition duration-300 ease-in-out hover:shadow-lg sm:px-10">
//         Order Now
//       </span>
//     </li>
//   </ul>
// </div>
