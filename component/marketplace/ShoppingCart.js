import React, { useState, useContext } from "react";
const cart1 = "/images/marketplace/cart1.png";
const cart2 = "/images/marketplace/cart2.png";
const cart3 = "/images/marketplace/cart3.png";
const plus = "/images/icons/plus.svg";
const minus = "/images/icons/minus.svg";
const close = "/images/icons/close.svg";
import Link from "next/link";
import { ShopContext } from "../../component/context/shopContext";

export const ShoppingCart = (props) => {
  const carts = [
    {
      id: 0,
      name: "Philomena ‘22",
      desc: "Clearamane",
      size: "200 ft",
      img: <img src={cart1} className="" />,
    },
    {
      id: 1,
      name: "Warped ‘99",
      desc: "Clearamane",
      size: "200 ft",
      img: <img src={cart2} className="" />,
    },
    {
      id: 2,
      name: "Ellipsia ",
      desc: "Clearamane",
      size: "200 ft",
      img: <img src={cart3} className="" />,
    },
  ];
  const { id, title, item, price, desc, size } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const [itemCount, setItemCount] = useState(1);

  return (
    <div className="p-10 pb-5 w-full pl-40 pr-40">
      <div className="flex justify-between p-10 pt-14 pb-0  cart-card">
        <div className="flex">
        {item}
       
          <div className="ml-10 ">
            <h3 className=" text-[#292929] text-[24px] font-medium cart-name">
              {title}
            </h3>
            <p className="pt-7 text-[#888888] text-[20px]">{desc}</p>
            <p className="pt-7 text-[#888888] text-[16px] ">
              Size:
              <span className="text-[#292929] text-[18px]">{size}</span>
            </p>
            <div className="flex pt-5">
              <button
                onClick={() => {
                  setItemCount(Math.max(itemCount - 1, 0));
                }}
              >
                <img src={minus} className="ml-5" />
              </button>
              <span className=" ml-5 text-[32px] font-medium">{itemCount}</span>
              <button
                onClick={() => {
                  setItemCount(itemCount + 1);
                }}
              >
                <img src={plus} className="ml-5" />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div>
            <img src={close} className="pb-40 w-[35px] pointer" />
          </div>
          <span className="price">${price}</span>
        </div>
      </div>
  
      {/* <div className="flex justify-between  pt-20 pr-10">
        <div className="pr-40">
          <Link href="/shoppingPage">
            <button className="bg-[#3341C1] rounded-md text-[#fff] p-5 pl-10 pr-10 text-[26px]">
              Proceed to checkout
            </button>
          </Link>
        </div>

        <div className="text-[#888888] text-[24px]">
          <h3 className="pt-5">Product in cart:</h3>
          <h3 className="pt-5">Shipping:</h3>
          <h3 className="pt-5">Total:</h3>
        </div>
        <div className="text-[#292929] text-[24px]">
          <h3 className="pt-5">3 items</h3>
          <h3 className="pt-5">$2.50</h3>
          <h3 className="pt-5">$114.00</h3>
        </div>
      </div> */}
    </div>
  );
};

export default ShoppingCart;
