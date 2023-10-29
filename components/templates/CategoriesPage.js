import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Cart from "../modules/menu/Cart";
import Image from "next/image";

const CategoriesPage = ({ data }) => {
  const {
    push,
    query: { difficulty, time },
  } = useRouter();
  const [query, setQuery] = useState({ difficulty: "", time: "" });

  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (query.difficulty !== difficulty || query.time !== time) {
      setQuery({ difficulty, time });
    }
  }, []);

  const searchHandler = () => {
    push({
      pathname: "/categories",
      query,
    });
  };

  return (
    <div className="mt-10">
      <h1 className="border-b-2 py-2 w-max border-green-700 font-semibold text-lg md:text-2xl xl:text-3xl">
        Categories
      </h1>
      <div className="flex flex-wrap justify-center gap-x-2 items-center mt-4">
        <select
          onChange={changeHandler}
          value={query.difficulty}
          className="text-lime-500 shadow-lg px-4 py-1 rounded-md font-semibold"
          name="difficulty"
        >
          <option value="Difficulty">Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <select
          onChange={changeHandler}
          value={query.time}
          className="text-lime-500 shadow-lg px-4 py-1 rounded-md font-semibold"
          name="time"
        >
          <option>Cooking Time</option>
          <option value="more">More than 30 min</option>
          <option value="less">Less than 30 min</option>
        </select>
        <button
          onClick={searchHandler}
          className="bg-lime-500 hover:bg-lime-600 px-4 py-1 text-white rounded-md mt-4 md:mt-0"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-10">
        {!data.length ? (
          <div className="col-span-12 flex items-center justify-center">
            <Image src={"/images/search.png"} width={400} height={400} />
          </div>
        ) : (
          data.map((food) => <Cart {...food} key={food.id} />)
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
