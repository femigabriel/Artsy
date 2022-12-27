import React from "react";
import Head from "next/head";
import Header from "../Component/layouts/Header";
import DropMain from "../component/drops/DropMain";

function drop() {
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
          <link href="https://fonts.cdnfonts.com/css/inter" rel="stylesheet" />

        </Head>
      </>
      <div>
        <Header />
      </div>

      <DropMain />
    </div>
  );
}

export default drop;
