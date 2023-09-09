import React from "react";
import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import RecommendFood from "../RecommendFood/RecommendFood";

interface Recommendfood {
  name: string
  recipe: string
  image: string
  category: string
  price: number
  _id: string
}
const ChefRecommend: React.FC = () => {
  const [recommendFood, setRecommendFood] = useState<Recommendfood[]>([]);
  useEffect(() => {
    fetch("./recommends.json")
      .then((res) => res.json())
      .then((data: Recommendfood[]) => setRecommendFood(data));
  }, []);
  return (
    <>
      <div className="mb-20">
      <SectionTitle
        subHeading={"Should try"}
        heading={"Chef Recommends"}
      ></SectionTitle>
      <div className="flex flex-wrap justify-center items-center gap-8">
      {recommendFood.map((food: Recommendfood) => (
        <RecommendFood key={food._id} food={food}></RecommendFood>
      ))}
      </div>
      </div>
    </>
  );
};

export default ChefRecommend;
