import FoodDetailPage from "@/components/templates/FoodDetailPage";
import { useRouter } from "next/router";
import React from "react";

const FoodDetail = ({ data }) => {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <h1>Loading...</h1>;
  }
  return <FoodDetailPage data={data} />;
};

const getStaticPaths = async () => {
  const res = await fetch("https://api-food-eta.vercel.app/data");
  const json = await res.json();
  const data = json.slice(0, 10);

  const paths = data.map((food) => ({ params: { id: food.id.toString() } }));

  return {
    paths,
    fallback: true,
  };
};

const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`https://api-food-eta.vercel.app/data/${params.id}`);
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
    revalidate: 10,
  };
};

export { getStaticPaths };
export { getStaticProps };
export default FoodDetail;
