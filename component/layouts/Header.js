import React from "react";
import Link from "next/link";

const bellIcon = "/images/icons/bellIcon.svg";
const searchIcon = "/images/icons/searchIcon.svg";
const notificationIcon = "/images/icons/notificationIcon.svg";

function Header({ pageIndex }) {
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
    <div className="w-full">
      <header className="flex justify-between p-5 pt-10 pl-40 pr-20">
        <div>
          <h1 className="bold text-4xl ">ARTSY.</h1>
        </div>
        <div>
          <ul className="flex justify-between">
            {items.map((list, key) => (
              <li key={key} className="">
                {list.id <= pageIndex ? (
                  <span className="active">{list.name} </span>
                ) : (
                  <span className="">{list.item}</span>
                )}
                {/* {list.name} */}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between">
          <img src={searchIcon} className="icons mr-5" />
          <img src={notificationIcon} className="icons mr-5" />
          <img src={bellIcon} className="icons mr-5" />
        </div>
      </header>
    </div>
  );
}

export default Header;
