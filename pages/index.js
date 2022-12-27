import Head from "next/head";
import Header from "../Component/layouts/Header";
import React, { useState } from "react";
import HomePage from "../component/home/HomePage";
import MarketMain from "../component/marketplace/MarketMain";
import AuctionsMain from "../component/auctions/AuctionsMain";

export default function Home() {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <>
        <Head>
          <link
            href="https://fonts.cdnfonts.com/css/clash-display"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Bellefair"
            rel="stylesheet"
          />
        </Head>
      </>
      <div className="pl-10 pr-10">
        <Header pageIndex={index} />
        <div>
          {index == 0 && (
            <HomePage onBtnClick={() => setIndex((current) => current + 1)} />
          )}
          {index == 1 && (
            <MarketMain onBtnClick={() => setIndex((current) => current + 1)} />
          )}
          {index == 2 && (
            <AuctionsMain
              className=""
              onBtnClick={() => setIndex((current) => current + 1)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
