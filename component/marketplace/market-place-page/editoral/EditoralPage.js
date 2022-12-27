import React, { useContext } from "react";
import Link from "next/link";
const plus = "/images/icons/plus.svg";
const minus = "/images/icons/minus.svg";
const heart = "/images/marketplace/market/editorals/heart.svg";
const rating = "/images/marketplace/market/editorals/rating.svg";
const downarrow = "/images/marketplace/market/editorals/downarrow.svg";
const mainitem = "/images/marketplace/market/editorals/mainitem.png";
import { ShopContext } from "../../../context/shopContext";

export const EditorialPage = (props) => {
  const { id, title, item, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="p-10 pt-20 flex justify-center items-center">
      <div className="editoal-card flex p-5 pb-0 pt-0 pr-0">
        <div className="pr-5 pb-5 pt-10 w-[450px] " >{item}</div>
        <div>
          <div className="w-full h-full border border-[#616161] border-r-0 border-t-0 border-b-0">
            <header className="border border-[#616161] border-r-0 border-l-0 border-t-0 ">
              <h1 className="p-10 pl-5 pr-5 text-[20px] font-semi-bold flex">
                {title}
                <img src={rating} className=" pl-60 pr-5" />
                {price}
              </h1>
            </header>
            <div className="p-10">
              <h3 className="text-[#616161] text-[20px] pb-5 ">
                Creator :
                <a href="/" className="text-[#4693ED]">
                  Ali Dawa
                </a>
              </h3>
              <p className="text-[16px] pb-5">Made in Italy</p>
              <h3 className=" text-[18px] pb-5">
                Total views : <span className="text-[16px]">1.7K views</span>
              </h3>
              <div className="flex pt-5">
                <button onClick={() => removeFromCart(id)}>
                  <img src={minus} className="ml-5" />
                </button>
                {/* <span className=" ml-5 text-[18px] font-medium">
                  {cartItems[id]}
                </span> */}
                <input
                  className=" ml-5 text-[18px] w-[35px] p-3 pt-1 pb-1font-medium border"
                  value={cartItems[id]}
                  onChange={(e) =>
                    updateCartItemCount(Number(e.target.value), id)
                  }
                />
                <button onClick={() => addToCart(id)}>
                  <img src={plus} className="ml-5 w-[16px] h-[16px]" />
                </button>
              </div>
            </div>
            <div className="flex p-5 pb-20">
              <Link href="/marketplace">
                <button className="bg-[#3341C1] p-5 pb-2 pt-2 border-0 text-white text-[24px] ml-5">
                  Add to cart
                </button>
              </Link>

              <button className="border border-[#616161] ml-10 w-[110px] h-[59px] ">
                <img src={heart} className="ml-10" />
              </button>
            </div>
            <div>
              <div className="border border-[#616161] border-r-0 border-l-0 border-b-0 ">
                <h1 className="p-10 pl-5 pr-5 text-[24px] font-semi-bold flex justify-between">
                  Description
                  <img src={downarrow} className="pr-5 w-[35.42px]" />
                </h1>
              </div>
              <div className="border border-[#616161] border-r-0 border-l-0 border-b-0 ">
                <h1 className="p-10 pl-5 pr-5 text-[24px] font-semi-bold flex justify-between">
                  Listings
                  <img src={downarrow} className="pr-5 w-[35.42px]" />
                </h1>
              </div>
              <div className="border border-[#616161] border-r-0 border-l-0  border-b-0">
                <h1 className="p-10 pl-5 pr-5 text-[24px] font-semi-bold flex justify-between">
                  Status
                  <img src={downarrow} className="pr-5 w-[35.42px]" />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
