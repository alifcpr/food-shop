import Apple from "@/components/icons/Apple";
import Binance from "@/components/icons/Binance";
import SpaceX from "@/components/icons/SpaceX";
import Tesla from "@/components/icons/Tesla";
import React from "react";

const Companies = () => {
  return (
    <div className="flex flex-wrap items-center">
      <div className="flex-1 items-center flex justify-center">
        <Apple />
      </div>
      <div className="flex-1 items-center flex justify-center">
        <SpaceX />
      </div>
      <div className="flex-1 items-center flex justify-center">
        <Binance />
      </div>
      <div className="flex-1 items-center flex justify-center">
        <Tesla />
      </div>
    </div>
  );
};

export default Companies;
