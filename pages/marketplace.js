import React from "react";
import Head from "next/head";
import Header from "../Component/layouts/Header";
import MarketMain from "../component/marketplace/MarketMain";

function marketplace() {
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
      <MarketMain />
    </div>
  );
}

export default marketplace;
