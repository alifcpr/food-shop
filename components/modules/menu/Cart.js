import React from "react";
import Location from "@/components/icons/Location";
import Dollar from "@/components/icons/Dollar";
import Link from "next/link";
import Image from "next/image";

const Cart = (props) => {
  const { id, name, price, details, discount } = props;
  return (
    <div className="col-span-12 bg-white p-2 shadow-2xl rounded-lg md:col-span-6 xl:col-span-4">
      <div>
        <Image
          src={`/images/${id}.jpeg`}
          className="w-full aspect-square object-cover object-center rounded-lg"
          alt={name}
          width={400}
          height={200}
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <h1 className="text-green-500 font-semibold text-lg md:text-xl xl:text-2xl">{name}</h1>
        <div className="flex gap-x-1 items-center md:text-md xl:text-lg">
          <Location />
          <span>{details[0].Cuisine}</span>
        </div>
      </div>
      <div className="flex items-center my-6 text-base md:text-lg xl:text-xl">
        <Dollar />
        {discount ? (
          <span className="text-red-500">{(price * discount) / 100} $</span>
        ) : (
          <span className="text-black">{price} $</span>
        )}
      </div>
      <div className="w-full flex items-center justify-center">
        <Link
          href={`/menu/${id}`}
          className="bg-lime-500 p-1 rounded-md w-full text-center text-white hover:bg-lime-600"
        >
          Show Detail
        </Link>
    </div>
    </div>
  );
};

export default Cart;
