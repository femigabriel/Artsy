import React from "react";
import Head from "next/head";
import Header from "../Component/layouts/Header";
import LiveAuctionPage from "../component/auctions/LiveAuctionPage";

function live() {
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
    <div className="p-20 pb-">
    <LiveAuctionPage />
    </div>
    </div>
  );
}

export default live;
