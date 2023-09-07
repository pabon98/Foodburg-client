import { Helmet } from "react-helmet-async";
import AboutBistro from "../AboutBistro/AboutBistro";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu"
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>FoodBurg | Home</title>
      </Helmet>
            <Banner/>
            <Category/>
            <AboutBistro/>
            <PopularMenu/>
            <CallUs/>
            <ChefRecommend/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;