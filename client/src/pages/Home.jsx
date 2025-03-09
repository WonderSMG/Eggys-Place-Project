import React from "react";
import Hero from "../Hero";
import ProductSession from "../ProductSession";
import ProductsOrder from "../ProductsOrder";

const Home = () => {
  return (
    <>
      <div>
        <Hero/>
      </div>
      <div>
        <ProductSession/>
      </div>
      <div>
        <ProductsOrder/>
      </div>
    </>
  );
};

export default Home;
