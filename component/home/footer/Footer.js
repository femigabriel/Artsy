import React from "react";
const email = "/images/icons/email.svg";
const location = "/images/icons/location.svg";
import Link from "next/link";

function Footer() {
  return (
    <div className="p-20 ">
      <div className=" flex justify-between footer">
        <div className="pt-40">
          <h1 className="logo">ARTSY.</h1>
        </div>
        <div>
          <ul>
            <li className="">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/marketplace">Marketplace</Link>
            </li>
            <li>
              <Link href="/auctions">Auctions</Link>
            </li>
            <li>
              <Link href="/drop">Drop</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Blog</li>
            <li>Wallets</li>
            <li>Rates</li>
            <li>High bids</li>
          </ul>
        </div>
        <div className="">
          <span className="flex email">
            <img src={email} className="mr-5" />
            artsystudios@gmail.com
          </span>
          <span className="flex location">
            <img src={location} className="mr-5" />
            Lagos, Nigeria.
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <footer className="">Artsystudios © 2022. All Rights Reserved.</footer>
      </div>
    </div>
  );
}

export default Footer;
