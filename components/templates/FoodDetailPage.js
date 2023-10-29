import React from "react";
import Image from "next/image";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";

const FoodDetailPage = ({ data }) => {
  const { id, name, details, price, discount, ingredients, recipe } = data;
  return (
    <div className="mt-10 flex flex-col gap-y-10">
      <div className="flex flex-col items-center gap-y-3 xl:flex-row xl:gap-x-5">
        <div className="rounded-lg overflow-hidden relative">
          <Image
            src={`/images/${id}.jpeg`}
            className=" aspect-video object-cover object-center"
            width={700}
            height={400}
            alt={name}
          />
          {discount ? (
            <div className="absolute top-2 left-2 px-5 py-1 bg-red-500 border-2 rounded-md text-white">{discount} %</div>
          ) : (null)}
        </div>
        <div className="flex flex-col gap-y-4 items-center xl:items-start">
          <h1 className="text-lime-500 font-semibold text-lg md:text-2xl xl:text-4xl">
            {name}
          </h1>
          <div className="flex items-center gap-x-10 xl:flex-col xl:justify-start xl:gap-y-4">
            <div className="flex items-center gap-x-1 text-md md:text-lg xl:text-2xl">
              <Location />
              <span>{details[0].Cuisine}</span>
            </div>
            <h1 className="flex items-center gap-x-1 text-md md:text-lg xl:text-2xl">
              <Dollar />
              {discount ? (
                <span className="text-red-500">
                  {(price * discount) / 100} $
                </span>
              ) : (
                <span className="text-black">{price} $</span>
              )}
            </h1>
          </div>
        </div>
      </div>
      {/* details */}
      <div>
        <h1 className="text-lime-500 font-semibold text-lg md:text-2xl xl:text-4xl">
          Details
        </h1>
        <ul className="list-disc list-inside mt-5">
          <li className="flex gap-x-2 items-center">
            <span className="text-base font-semibold md:text-lg xl:text-xl">
              Cuisine :
            </span>
            <span className="text-base text-slate-500 md:text-md xl:text-lg">
              {details[0].Cuisine}
            </span>
          </li>
          <li className="flex gap-x-2 items-center">
            <span className="text-base font-semibold md:text-lg xl:text-xl">
              Recipe Type :
            </span>
            <span className="text-base text-slate-500 md:text-md xl:text-lg">
              {details[1]["Recipe Type"]}
            </span>
          </li>
          <li className="flex gap-x-2 items-center">
            <span className="text-base font-semibold md:text-lg xl:text-xl">
              Difficulty :
            </span>
            <span className="text-base text-slate-500 md:text-md xl:text-lg">
              {details[2].Difficulty}
            </span>
          </li>
          <li className="flex gap-x-2 items-center">
            <span className="text-base font-semibold md:text-lg xl:text-xl">
              Preparation Time :
            </span>
            <span className="text-base text-slate-500 md:text-md xl:text-lg">
              {details[3]["Preparation Time"]}
            </span>
          </li>
          <li className="flex gap-x-2 items-center">
            <span className="text-base font-semibold md:text-lg xl:text-xl">
              Cooking Time :
            </span>
            <span className="text-base text-slate-500 md:text-md xl:text-lg">
              {details[4]["Cooking Time"]}
            </span>
          </li>
          <li className="flex gap-x-2 items-center">
            <span className="text-base font-semibold md:text-lg xl:text-xl">
              Serves :
            </span>
            <span className="text-base text-slate-500 md:text-md xl:text-lg">
              {details[5].Serves}
            </span>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-lime-500 font-semibold text-lg md:text-2xl xl:text-4xl">
          Ingredients
        </h1>
        <ul className="list-disc list-inside mt-5">
          {ingredients.map((item) => (
            <li className="text-base md:text-lg">{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="text-lime-500 font-semibold text-lg md:text-2xl xl:text-4xl">
          Recipe
        </h1>
        <ol className=" list-decimal list-inside mt-6">
          {recipe.map((item) => (
            <li className=" even:bg-lime-200 odd:bg-green-400 p-5 font-semibold md:text-lg">
              {item}
            </li>
          ))}
        </ol>
      </div>
      <button className="bg-green-500 p-2 rounded-lg text-white md:text-lg">
        Add To Cart
      </button>
    </div>
  );
};

export default FoodDetailPage;
