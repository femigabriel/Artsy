import React from "react";
const logo = "/images/payment/logo.png";
const delivery = "/images/payment/delivery.png";
import Link from "next/link";
const bellIcon = "/images/icons/bellIcon.svg";
const searchIcon = "/images/icons/searchIcon.svg";
const notificationIcon = "/images/icons/notificationIcon.svg";
function ConfirmPayment() {
  const items = [
    {
      id: 0,
      item: (
        <Link className="" href="/">
          Home
        </Link>
      ),
      name: "Home",
    },
    {
      id: 1,
      item: (
        <Link className="" href="/market">
          Marketplace
        </Link>
      ),
      name: "Marketplace",
    },
    {
      id: 2,
      item: <Link href="/auctions">Auctions</Link>,
      name: "Auctions",
    },
    {
      id: 3,
      item: <Link href="/drop">Drop</Link>,
      name: "Drop",
    },
  ];
  return (
    <div className="p-10 pb-0 ">
      <div className="flex justify-between">
        <div className="">
          <h1 className="bold text-4xl p-5">ARTSY.</h1>
        </div>
        <div className="cursor-pointer">
          <ul className="flex justify-between">
            {items.map((list, key) => (
              <li key={key} className="p-5 text-[#292929] text-[24px]">
                {list.item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex p-5 cursor-pointer">
          <img src={searchIcon} className="icons mr-5" />
          <img src={notificationIcon} className="icons mr-5" />
          <img src={bellIcon} className="icons mr-5" />
        </div>
      </div>
      <div className=" flex justify-center item-center">
        <div>
          <img src={delivery} className="pl-" />
          <h3 className="text-[#000000] text-[32px]">
            Hey Celestina, thank you for your purchase.
          </h3>
          <p className="text-[#000000] text-[20px] p-5 pl-40">
            You are amazing. Cheers to being{" "}
            <span
              className="text-[#006CA2]"
            >
              ARTSY
            </span>
            !
          </p>
        </div>
      </div>
      <img
        src={logo}
        className="w-[350px] h-[150p] relative right-[40px] bottom-[610px]"
      />
    </div>
  );
}

export default ConfirmPayment;
