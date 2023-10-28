import Choice from "@/components/icons/Choice";
import Clock from "@/components/icons/Clock";
import Fast from "@/components/icons/Fast";
import Food from "@/components/icons/Food";
import React from "react";

const Attribues = () => {
  return (
    <div className="mt-20">
      <h1 className="text-xl font-bold text-lime-500 md:text-xl xl:text-2xl">Why Us</h1>
      <div className="flex flex-row flex-wrap gap-5 mt-7">
        <div className="p-5 rounded-lg shadow-xl flex flex-col items-center justify-center flex-1">
          <div>
            <Fast />
          </div>
          <span className="mt-3 font-semibold text-lg">Fast</span>
        </div>
        <div className="p-5 rounded-lg shadow-xl flex flex-col items-center justify-center flex-1">
          <div>
            <Food />
          </div>
          <span className="mt-3 font-semibold text-lg text-center">Best Restaurants</span>
        </div>
        <div className="p-5 rounded-lg shadow-xl flex flex-col items-center justify-center flex-1">
          <div>
            <Choice />
          </div>
          <span className="mt-3 font-semibold text-lg text-center">Your Choice</span>
        </div>
        <div className="p-5 rounded-lg shadow-xl flex flex-col items-center justify-center flex-1">
          <div>
            <Clock />
          </div>
          <span className="mt-3 font-semibold text-lg">24-7</span>
        </div>
      </div>
    </div>
  );
};

export default Attribues;
