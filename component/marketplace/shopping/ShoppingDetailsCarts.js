import React, { useState } from "react";
const cart1 = "/images/marketplace/cart1.png";
const cart2 = "/images/marketplace/cart2.png";
const cart3 = "/images/marketplace/cart3.png";
const plus = "/images/icons/plus.svg";
const minus = "/images/icons/minus.svg";
const close = "/images/icons/close.svg";

function ShoppingDetailsCarts() {
  // export const Cart = () {}
  const carts = [
    {
      id: 0,
      name: "Philomena ‘22",
      desc: "Clearamane",
      size: "200 ft",
      img: <img src={cart1} className="w-[166px] h-[166px]" />,
    },
    {
      id: 1,
      name: "Warped ‘99",
      desc: "Clearamane",
      size: "200 ft",
      img: <img src={cart2} className="w-[166px] h-[166px]" />,
    },
    {
      id: 2,
      name: "Ellipsia ",
      desc: "Clearamane",
      size: "200 ft",
      img: <img src={cart3} className="w-[166px] h-[166px]" />,
    },
  ];

  const [itemCount, setItemCount] = useState(1);

  return (
    <div className="p-10 w-full pl-20 pr-40">
      {carts.map((list, key) => (
        <div className="flex justify-between p-10 pt-14 pb-14  cart-card">
          <div className="flex">
            {list.img}
            <div className="ml-10 ">
              <h3 className=" text-[#292929] text-[20px] font-medium cart-name">
                {list.name}
              </h3>
              <p className="pt-7 text-[#888888] text-[16px]">{list.desc}</p>
              <p className="pt-7 text-[#888888] text-[14px] ">
                Size:
                <span className="text-[#292929] text-[16px]">{list.size}</span>
              </p>
              <div className="flex pt-5">
                <button
                  onClick={() => {
                    setItemCount(Math.max(itemCount - 1, 0));
                  }}
                >
                  <img src={minus} className="ml-5" />
                </button>
                <span className=" ml-5 text-[24px] font-medium">
                  {itemCount}
                </span>
                <button
                  onClick={() => {
                    setItemCount(itemCount + 1);
                  }}
                >
                  <img src={plus} className="ml-5 w-[16px] h-[16px]" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="pb-36">
              <img src={close} className=" w-[30px] h-[30px] ml-5 pointer" />
            </div>
            <span className="text-[20px] text-[] mt-44">$35.50</span>
          </div>
        </div>
      ))}
      <div className="flex justify-between pt-5">
        <div className="p-5 text-[#888888] text-[24px] ">
          <h1 className="pb-5">Products in cart :</h1>
          <h1 className="pb-5">Shopping : </h1>
          <h1 className="pb-5">Total : </h1>
        </div>
        <div className="p-5 text-[24px]">
          <h3 className="pb-5">6 items</h3>
          <h3 className="pb-5">$2.50</h3>
          <h3 className="pb-5">$114.0</h3>
        </div>
      </div>
    </div>
  );
}

export default ShoppingDetailsCarts;
