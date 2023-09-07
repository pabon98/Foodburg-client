import React, { useState } from "react";
import './RecommendFood.css'

interface Food {
  image: string;
  name: string;
  recipe: string;
}

const RecommendFood: React.FC<{ food: Food }> = ({ food }) => {
  const [active, setActive] = useState<string | undefined>();

  const handleActive = (data: string) => {
    setActive(data);
  };

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={food.image} alt="recommendfood" />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-2xl font-semibold">{food.name}</h2>
        <p className="my-2 text-center">{food.recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={() => handleActive("Add To Cart")} className="btn btn-outline  uppercase text-yellow-600">Add To Cart</button>
        </div>
        {
          active === 'Add To Cart' && (
            <div className="absolute bottom-16 left-36">
              <span className="border-b-4 p-12 border-yellow-600 "></span>
            </div>
          )
        }
      </div>
    </div>
  );
      };

export default RecommendFood;
