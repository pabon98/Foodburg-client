import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import Menubg from "../../../assets/menu/menu-bg.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu()
  const desserts = menu.filter(item=> item.category === 'dessert')
  const soup = menu.filter(item=> item.category === 'soup')
  const salad = menu.filter(item=> item.category === 'salad')
  const pizza = menu.filter(item=> item.category === 'pizza')
  const offered = menu.filter(item=> item.category === 'offered')
  return (
    <div>
      <Helmet>
        <title>FoodBurg | Menu</title>
      </Helmet>
      <Cover
        img={Menubg}
        title={"Our Menu"}
        subtitle={"Would you like to try a dish?"}
      />
      {/* main cover */}
      <SectionTitle heading="Today's Offer" subHeading="Don't miss"></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}/>
      {/* dessert menu items */}
      <MenuCategory items={desserts} title="desserts" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis sint veniam molestias laborum aut nostrum debitis in placeat laudantium." img={dessertImg}
      />
      {/* Pizza menu items */}
      <MenuCategory items={pizza} title="Pizzas"  subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis sint veniam molestias laborum aut nostrum debitis in placeat laudantium." img={pizzaImg}/>
      {/* Salad menu items */}
      <MenuCategory items={salad} title="Salads"  subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis sint veniam molestias laborum aut nostrum debitis in placeat laudantium." img={saladImg}/>
      {/* Soup menu items */}
      <MenuCategory items={soup} title="Soups"  subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis sint veniam molestias laborum aut nostrum debitis in placeat laudantium." img={soupImg} />
    </div>
  );
};

export default Menu;
