import React from "react";
import Hero from "../Components/Home/Hero";
import Product from "../Components/Home/Product";
import Taste from "../Components/Home/Taste";
import Category from "../Components/Home/Category";

const Home = () => {
  return (
    <div className=" ">
      <Hero />
      <Product />
      <Taste />
      <Category />
    </div>
  );
};

export default Home;
