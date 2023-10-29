import MenuPage from "@/components/templates/MenuPage";
import React from "react";

const Menu = ({ data }) => {
  return (
    <div>
      <MenuPage data={data} />
    </div>
  );
};

const getStaticProps = async () => {
  const res = await fetch("http://localhost:9000/data");
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 10, // second
  };
};

export { getStaticProps };
export default Menu;
