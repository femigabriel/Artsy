import React from "react";
import Head from "next/head";
import Header from "../Component/layouts/Header";
import MarketplaceMenu from "../component/marketplace/MarketplaceMenu";
import PaymentDetails from "../component/marketplace/payment-details/PaymentDetails";
function payment() {
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
      <div>
        <MarketplaceMenu />
        <PaymentDetails />
      </div>
    </div>
  );
}

export default payment;
