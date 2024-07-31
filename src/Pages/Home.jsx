import React from "react";
import Hero from "../Components/Home/Hero";
import Product from "../Components/Home/Product";
import Taste from "../Components/Home/Taste";
import Category from "../Components/Home/Category";
import More from "../Components/Home/More";
import Customers from "../Components/Home/Customers";

const Home = () => {
  return (
    <div className=" ">
      <Hero />
      <Product />
      <Taste />
      <Category />
      <More />
      <Customers />
    </div>
  );
};

export default Home;
