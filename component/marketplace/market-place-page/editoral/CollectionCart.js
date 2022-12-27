import React from "react";
const left = "/images/marketplace/market/editorals/left.svg";
const right = "/images/marketplace/market/editorals/right.svg";
const heart = "/images/marketplace/market/editorals/heart.svg";
const collection1 = "/images/marketplace/market/editorals/collection1.png";
const collection2 = "/images/marketplace/market/editorals/collection2.png";
const item2 = "/images/marketplace/market/item2.png";
const rating = "/images/marketplace/market/editorals/rating.svg";

function CollectionCart() {
  const collections = [
    {
      id: 0,
      title: "Sassy",
      price: "$3.90",
      item: <img src={collection1} className="" />,
    },
    {
      id: 1,
      title: "Escape",
      price: "$3.90",
      item: <img src={collection2} className="" />,
    },
    {
      id: 2,
      title: "Sassy",
      price: "$3.90",
      item: <img src={item2} className="w-[446px] h-[281px]" />,
    },
  ];
  return (
    <div className="pt-20 p-20">
      <div className="flex justify-between explore  p-5 w-full">
        <h2 className="p-5 text-[26px]">Explore more from this collection</h2>
        <div className="flex">
          <img src={left} className="border rounded-full p-5 mr-5" />
          <img src={left} className="border rounded-full p-5 ml-5" />
        </div>
      </div>
      <div className="pt-20 grid grid-cols-3 gap-5">
        {collections.map((list, key) => (
          <div className="border w-[329px] h-[379px] p-5">
            <div className="flex justify-between">
              <span></span>
              <img src={heart} className="w-[24px]" />
            </div>
            <div className="flex justify-center items-center pt-4">
              <div>{list.item}</div>
            </div>

            <div className="flex justify-between">
              <h3 className="p-5 pl-0 text-[18px]">{list.title}</h3>
              <span className="p-5 text-[#33333] text-[22px] font-bold flex">
                <img src={rating} className="w-[16px] mr-3" />
                3.20
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center pt-20">
        <button className="explore border border-[#78A3AD] p-10 pt-5 pb-5 text-[#78A3AD] text-[24px]">
          Explore all
        </button>
      </div>
    </div>
  );
}

export default CollectionCart;
