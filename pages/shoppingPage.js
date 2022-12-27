import React from "react";
import Head from "next/head";
import ShoppingDetails from "../component/marketplace/shopping/ShoppingDetails";

function shoppingPage() {
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
      <div className="">
        <ShoppingDetails />
      </div>
    </div>
  );
}

export default shoppingPage;
