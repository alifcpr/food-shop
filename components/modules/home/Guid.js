import Link from "next/link";
import React from "react";

const Guid = () => {
  return (
    <div className="mt-20 flex items-center justify-between">
      <Link href={"/menu"} className=" shadow-2xl rounded-md px-8 py-2  font-semibold text-lg xl:text-xl">
        Menu
      </Link>
      <Link href={"/category1"} className=" shadow-2xl rounded-md px-8 py-2  font-semibold text-lg xl:text-xl">
        Categories
      </Link>
      <div className=" shadow-2xl rounded-md px-8 py-2  font-semibold text-lg xl:text-xl">
        Discount
      </div>
    </div>
  );
};

export default Guid;
