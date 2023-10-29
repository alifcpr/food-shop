import React from "react";

const Instructions = () => {
  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold text-lime-500 md:text-xl xl:text-2xl">
        How to Order
      </h1>
      <ul className="mt-7 list-disc list-inside text-base md:text-md xl:text-lg">
        <li>Sign in (or create an account) and set your delivery address</li>
        <li>Choose the restaurant you want to order from.</li>
        <li>Select your items and tap Add to Cart</li>
        <li>To place your order, select View cart or Checkout</li>
        <li>Review your order and tap Place Order</li>
        <li>Track your order progress</li>
      </ul>
    </div>
  );
};

export default Instructions;
