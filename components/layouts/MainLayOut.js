import Footer from "../modules/Footer";
import Header from "../modules/Header";
import React from "react";

const MainLayOut = ({ children }) => {
  return (
    <>
      <div>
        <div className="max-w-sm px-3 mx-auto md:max-w-2xl md:mt-3 lg:max-w-4xl xl:max-w-7xl ">
          <Header />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayOut;
