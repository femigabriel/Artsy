import React from "react";
import FeatCard2 from "./FeatCard2";
import FeatCard3 from "./FeatCard3";
import FeatCards from "./FeatCards";

// const arrow = "/images/home/arrow.png";
import ProductCard from "./ProductCard";

function FeatureProducts() {
  return (
    <div>
      <dv className="">
        <h1 className="featured pb-20">Featured products</h1>
      </dv>
      <div className="w-full max-w-[1200px]">
        <FeatCards />
        <FeatCard2 />
        <FeatCard3 />
      </div>
    </div>
  );
}

export default FeatureProducts;
