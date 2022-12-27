import React, { useEffect, useState } from "react";
import Link from "next/link";
const likes = "/images/auctions/likes.svg";
const send = "/images/auctions/send.svg";
const creator1 = "/images/auctions/creator1.png";
const live = "/images/auctions/live.png";
const creator2 = "/images/auctions/creator2.png";

function PopularCreator() {
  const creators = [
    {
      id: 0,
      title: "Out of the box",
      item: <img src={creator1} className="" />,
      creator: "Dan Murray",
      date: "12/08/22",
      bid: "0.57 ETH",
      current: "0.987 ETH",
    },
    {
      id: 0,
      title: "Falling apart",
      item: <img src={creator2} className="" />,
      creator: "Jacob Banks",
      date: "12/08/22",
      bid: "0.57 ETH",
      current: "0.987 ETH",
    },
  ];

  return (
    <div className="w-full pt-20 pl-10">
      <div>
        <h2 className="text-[#00000] text-[26px] font-bold">
          Top bids from popular creators
        </h2>
      </div>
      <div className="pt-20 grid gap-10 grid-cols-2 w-full ">
        {creators.map((list, key) => (
          <div className="">
            <Link href="/live">
              <div className="border border- creator-card w-[545px] pb-5 rounded-md cursor-pointer">
                <div className="flex justify-between">
                  <span></span>
                  <span className="border rounded-full m-5 w-[38px] h-[38px]">
                    <img src={likes} className="m-3 w-[18px] h-[18px]" />
                  </span>
                </div>
                <div className="p-5 pl-0 pr-0">{list.item}</div>
                <h2 className="text-[#00000] text-[20px] font-bold ml-5 mt-5">
                  {list.title}
                </h2>
              </div>
            </Link>

            <div className="pt-10 ">
              <h3 className="text-[20px] text-[#616161] pb-5">
                Creator :
                <span className="text-[#33333] text-[16px] font-bold pl-2">
                  {list.creator}
                </span>
              </h3>
              <h3 className="text-[20px] text-[#616161] pb-5">
                Date :
                <span className="text-[#33333] text-[18px] font-bold pl-2">
                  {list.date}
                </span>
              </h3>
              <h3 className="text-[20px] text-[#616161] pb-5">
                Highest bid :
                <span className="text-[#33333] text-[18px] font-bold p-2">
                  {list.bid}
                </span>
              </h3>
              <div className="flex justify-between p-5 mt-10 bg-[#F6F4F4] w-[545px]">
                <div>
                  <span className="text-[20px] text-[#616161] pb-5">
                    Current bid
                  </span>
                  <h3 className="text-[16px] text-[#616161] pb-5">
                    <span className="text-[#33333] text-[20px] font-bold">
                      {list.current}
                    </span>
                  </h3>
                </div>
                <button className="bid-btn mt-3">Place bid</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCreator;
