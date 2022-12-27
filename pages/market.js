import React from "react";
import Head from "next/head";
import Header from "../Component/layouts/Header";
import MarketPlacePage from "../component/marketplace/market-place-page/MarketPlacePage";
function market() {
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
      <div className="p-10">
        <MarketPlacePage />
      </div>
    </div>
  );
}

export default market;
