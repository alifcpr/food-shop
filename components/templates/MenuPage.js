import React from "react";
import Cart from "../modules/menu/Cart";

const MenuPage = ({ data }) => {
  return (
    <div className="mt-7">
      <h1 className="border-b-2 py-2 w-max border-green-700 font-semibold text-lg md:text-2xl xl:text-3xl">
        Menu
      </h1>
      <div className="grid grid-cols-12 gap-5 mt-4">
        {data.map((food) => (
          <Cart key={food.id} {...food} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
