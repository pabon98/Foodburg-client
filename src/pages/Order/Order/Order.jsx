
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderCoverImg from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
  const categories = ['salad','pizza', 'soup', 'dessert', 'drinks']
  const {category} = useParams()
  const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
   
    // console.log(category);
    const desserts = menu.filter(item=> item.category === 'dessert')
  const soup = menu.filter(item=> item.category === 'soup')
  const salad = menu.filter(item=> item.category === 'salad')
  const pizza = menu.filter(item=> item.category === 'pizza')
  const drinks = menu.filter(item=> item.category === 'drinks')
  return (
    <div>
      <Helmet>
        <title>FoodBurg| Order Food</title>
      </Helmet>
      <Cover
        img={OrderCoverImg}
        title="Order food"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta blanditiis sint veniam molestias laborum aut nostrum debitis in placeat laudantium."
      />
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel>
         <OrderTab items={salad}/>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}/>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}/>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}/>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
