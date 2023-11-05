import React from "react";
import b from "@/public/images/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full xl:flex-row">
      <div className="flex flex-col items-center gap-y-4 xl:items-start">
        <h1 className="border-b-2 mt-3 text-center border-green-600 py-1 text-xl  font-bold w-max md:text-2xl xl:text-start">
          Food Shop
        </h1>
        <div className="text-center xl:text-start">
          <h4 className="mt-3 text-slate-700 font-semibold md:text-lg">
            Food Delivery and Takeout!
          </h4>
          <p className="text-slate-400 mt-2 px-4 md:text-lg xl:px-0">
            Food Shop is an online food ordering and delivery platform launched
            by Uber in 2014 Meals are delivered by couriers using cars,
            scooters, bikes, or on foot.
          </p>
        </div>
      </div>
      <div className="order-first xl:order-last">
        <Image src={b} width={800} alt="bannerImage" />
      </div>
    </div>
  );
};

export default Banner;
