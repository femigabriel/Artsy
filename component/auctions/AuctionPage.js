import React from "react";
import Link from "next/link";
const auction4 = "/images/auctions/auction4.png";
const auction2 = "/images/auctions/auction2.png";
const auction3 = "/images/auctions/auction3.png";
const collection1 = "/images/marketplace/market/editorals/collection1.png";
const collection2 = "/images/marketplace/market/editorals/collection2.png";

import { Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
function AuctionPage() {
  return (
    <div className="pt-32 pl-10 pr-10 ">
      <div>
        <h3 className="text-[#000000] text-[22px] pb-20">
          Here’s an overview of products actively on auction, explore!
        </h3>
      </div>
      <div className="grid grid-cols-3 w-full  item-card">
        <Carousel autoplay slidesToShow={3} className="w-[1250px]">
          <div className="w-full">
            <Link style={contentStyle} className="w-[]" href="/live">
              <img src={auction3} className="w-[]" />
            </Link>
          </div>
          <div>
            <Link style={contentStyle} className="" href="/live">
              <img src={auction2} />
            </Link>
          </div>
          <div>
            <Link style={contentStyle} className="" href="/live">
              <img src={auction4} />
            </Link>
          </div>
          <div>
            <Link style={contentStyle} className="" href="/live">
              <img
                src={collection1}
                className="pt-3 h-[340px] w-[450px]  rounded-2xl"
              />
            </Link>
          </div>
          <div>
            <Link style={contentStyle} className="" href="/live">
              <img
                src={collection2}
                className="p-3 h-[350px] w-[450px]  rounded-3xl"
              />
            </Link>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default AuctionPage;
