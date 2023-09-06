import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import RecommendFood from "../RecommendFood/RecommendFood";

const ChefRecommend = () => {
  const [recommendFood, setRecommendFood] = useState([]);
  useEffect(() => {
    fetch("./recommends.json")
      .then((res) => res.json())
      .then((data) => setRecommendFood(data));
  }, []);
  return (
    <>
      <div className="mb-20">
      <SectionTitle
        subHeading={"Should try"}
        heading={"Chef Recommends"}
      ></SectionTitle>
      <div className="flex flex-wrap justify-center items-center gap-8">
      {recommendFood.map((food) => (
        <RecommendFood key={food._id} food={food}></RecommendFood>
      ))}
      </div>
      </div>
    </>
  );
};

export default ChefRecommend;
