import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex itesm-center justify-between py-3">
      <Link href={"/"} className="text-lg text-lime-500 font-bold md:text-2xl xl:text-3xl">BotoFood</Link>
      <div className="flex gap-x-3 items-center text-base text-slate-400 md:text-lg xl:text-xl">
        <Link href={"/menu"} className="hover:text-black">Menu</Link>
        <Link href={"/categories"} className="hover:text-black">Categories</Link>
      </div>
    </header>
  );
};

export default Header;
