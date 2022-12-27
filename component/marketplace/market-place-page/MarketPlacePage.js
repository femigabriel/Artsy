import React from "react";
import FilterSideBar from "./FilterSideBar";
import MarketItems from "./MarketItems";

function MarketPlacePage() {
  return (
    <div className="pr-20">
      <div className="flex p-10">
        <FilterSideBar />
        <MarketItems />
      </div>
      <div className="flex justify-center items-center pt-20">
        <button className="more-btn">See More</button>
      </div>
    </div>
  );
}

export default MarketPlacePage;
