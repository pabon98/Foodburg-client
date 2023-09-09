import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
        <SectionTitle heading={'From Our menu'} subHeading={'Check It Out'}></SectionTitle>
        <div className="md:flex justify-center items-center pb-20 pt-12 px-4 md:px-36 bg-slate-500 bg-opacity-40">
            <div className="md:w-1/2 md:pr-4">
                <img src={featuredImg} alt="" className="w-full" />
            </div>
            <div className="md:w-1/2 md:ml-4">
                <p className="text-sm md:text-base">Aug 20, 2029</p>
                <p className="uppercase text-xl md:text-2xl font-bold mt-2">Where can I get some?</p>
                <p className="text-sm md:text-base mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illum temporibus aliquam distinctio sint, delectus ad sit, id quia repellat, vel accusamus ducimus! Culpa, nemo? Nulla fugiat alias exercitationem praesentium?</p>
                <button className="btn btn-outline border-0 border-b-2 mt-4">Order Now</button>
            </div>
        </div>
    </div>
    );
};

export default Featured;