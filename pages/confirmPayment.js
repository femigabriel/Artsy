import React from "react";
import Head from "next/head";
import ConfirmPayment from "../component/Payment/ConfirmPayment";

function confirmPayment() {
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
        <ConfirmPayment />
      </div>
    </div>
  );
}

export default confirmPayment;
