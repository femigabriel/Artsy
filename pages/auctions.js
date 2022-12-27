import React from "react";
import Head from "next/head";
import Header from "../Component/layouts/Header";
import AuctionsMain from "../component/auctions/AuctionsMain";

function auctions() {
  return (
    <div>
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
      <div>
        <Header />
      </div>
      <AuctionsMain />
    </div>
  );
}

export default auctions;
