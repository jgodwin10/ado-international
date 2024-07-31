import React from "react";
import Hero from "../Components/Home/Hero";
import Product from "../Components/Home/Product";
import Taste from "../Components/Home/Taste";
import Category from "../Components/Home/Category";
import More from "../Components/Home/More";
import Customers from "../Components/Home/Customers";
import Events from "../Components/Home/Events";
import Ready from "../Components/Home/Ready";
import Banner from "../Components/Home/Banner";

const Home = () => {
  return (
    <div className=" ">
      <Hero />
      <Product />
      <Taste />
      <Category />
      <Banner />
      <More />
      <Customers />
      <Events />
      <Ready />
    </div>
  );
};

export default Home;
