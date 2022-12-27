import React from "react";
import Link from "next/link";
function MarketplaceMenu() {
  const items = [
    {
      id: 0,
      item: (
        <Link className="text-[#292929;]" href="/marketplace">
          Shopping cart
        </Link>
      ),
    },
    {
      id: 1,
      item: <Link href="/shopping">Shipping details</Link>,
    },
    {
      id: 2,
      item: <Link href="/payment">Payment details</Link>,
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <div className="p-10">
        <ul className="flex border-b-2">
          {items.map((list, key) => (
            <li className="p-5 pl-10 pr-10 text-[18px] font-normal text-[#888888]">
              {list.item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MarketplaceMenu;
