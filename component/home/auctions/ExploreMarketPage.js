import React from "react";
const arrow = "/images/icons/arrow.svg";
import Link from "next/link";

function ExploreMarketPage() {
  return (
    <div className=" pt-32">
      <div className="explore ">
        <div className="">
          <Link
            href="/market"
            className="cursor-pointer flex explore-main justify-between p-5 pl-20 pr-64"
          >
            <span className="explore-content">Explore marketplace</span>
            <img src={arrow} className="arror p-5" />
          </Link>
        </div>
      </div>
      <div className="pb-32">
        <div className="">
          <Link
            href="/auction"
            className="cursor-pointer flex explore-main-2 justify-between p-5 pl-20 pr-64"
          >
            <span className="explore-content">See auctions </span>
            <img src={arrow} className="arror p-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExploreMarketPage;
