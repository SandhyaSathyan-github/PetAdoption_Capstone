import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../assets/images/banner_img.jpg";
import petimage from "../assets/images/pet2.jpg";
import dogImg from "../assets/images/dog.png";
import catImg from "../assets/images/cat.png";
import allPetImg from "../assets/images/all_pet.png";
import otherPetImg from "../assets/images/other_pet.png";

function Banner() {
  return (
    <section
      style={{ backgroundImage: `url(${bannerImage})` }}
      className="relative  bg-cover bg-top bg-no-repeat"
    >
      <div className="absolute inset-0 bg-white/75 md:bg-transparent md:from-white/95 md:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold  sm:text-5xl">
            Adopt
            <strong className="block font-extrabold primary-light-brown">
              {" "}
              Give them a Home.{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg  sm:text-xl/relaxed">
            Adopting an animal is the most wonderful gift you can offer. We are
            excited to support you in finding your new best friend. Please
            explore the bios and photos of the animals below.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Success Stories
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterPets() {
  return (
    <div className="container mx-auto mt-8 flex justify-center">
      <div className="flex flex-wrap -m-2 justify-center w-7/12">
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
          <a
            href="#"
            className="block p-4 shadow text-dark rounded-lg border-2 border-white hover:border-black transition h-full flex flex-col items-center"
          >
            <img
              src={allPetImg}
              alt="icon_petImage"
              style={{ width: "4rem" }}
            ></img>
            <span className="mt-1 font-bold">All Pets</span>
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
          <a
            href="#"
            className="block p-6 shadow  text-dark rounded-lg border-2 border-white hover:border-black transition h-full flex flex-col items-center"
          >
            <img
              src={dogImg}
              alt="icon_petImage"
              style={{ width: "4rem" }}
            ></img>
            <span className="font-bold">Dogs</span>
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
          <a
            href="#"
            className="block p-6 shadow  text-dark rounded-lg border-2 border-white hover:border-black transition h-full flex flex-col items-center"
          >
            <img
              src={catImg}
              alt="icon_petImage"
              style={{ width: "4rem" }}
            ></img>
            <span className="font-bold">Cats</span>
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
          <a
            href="#"
            className="block p-6 shadow  text-dark rounded-lg border-2 border-white hover:border-black transition h-full flex flex-col items-center"
          >
            <img
              src={otherPetImg}
              alt="icon_petImage"
              style={{ width: "4rem" }}
            ></img>
            <span className="font-bold">Others</span>
          </a>
        </div>
      </div>
    </div>
  );
}

const PetCard = () => {
  return (
    <article className="flex flex-col xl:flex-row bg-white transition hover:shadow-xl">
      <div className="sm:block sm:basis-56">
        <img
          alt="pet_image"
          src={petimage}
          className="aspect-square h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <h3 className="font-bold uppercase text-gray-900">Jagger</h3>
          <p className="text-sm font-bold text-dark ">Age: 3yrs</p>
          <p className="text-sm font-bold text-dark ">Male</p>

          <p className="mt-2 text-md/relaxed text-gray-700">
            Jagger is an 8 year old border collie / husky cross. He is 60 lbs of
            short creamy white fur with a striking dappled red nose & ears. He
            has a truly goofy grin when he’s happy and his expressive toffee
            brown eyes make it hard to stay mad at him for any length of time.
          </p>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <Link
            to="/petdetails"
            className="block px-5 py-3 text-center text-primary-brown text-xs font-bold uppercase hover:text-rose-600 transition"
          >
            More Info...
          </Link>
        </div>
      </div>
    </article>
  );
};

const Paging = () => {
  return (
    <div className="inline-flex justify-center gap-1 w-full">
      <a
        href="#"
        className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
      >
        <span className="sr-only">Prev Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </a>

      <div>
        <label for="PaginationPage" className="sr-only">
          Page
        </label>

        <input
          type="number"
          className="h-8 w-12 rounded border border-gray-100 bg-white p-0 text-center text-xs font-medium text-gray-900 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          min="1"
          value="2"
          id="PaginationPage"
        />
      </div>

      <a
        href="#"
        className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
      >
        <span className="sr-only">Next Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
};

const AdoptionList = () => {
  return (
    <div className="pt-[9.1rem] pb-[2rem]">
      <Banner />
      <FilterPets />
      <div className="mx-7 p-5 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:mx-14">
        <div className=" rounded-lg  m-5 ">
          <PetCard />
        </div>
        <div className="rounded-lg m-5">
          <PetCard />
        </div>
        <div className="rounded-lg m-5">
          <PetCard />
        </div>
        <div className="rounded-lg  m-5">
          <PetCard />
        </div>
        <div className=" rounded-lg  m-5">
          <PetCard />
        </div>
        <div className=" rounded-lg  m-5">
          <PetCard />
        </div>
      </div>
      <Paging />
    </div>
  );
};

export default AdoptionList;
