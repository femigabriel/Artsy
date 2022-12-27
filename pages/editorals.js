import React from "react";
import Head from "next/head";
import Header from "../Component/layouts/Header";
import EditorialPage from "../component/marketplace/market-place-page/editoral/EditoralPage";
import CollectionCart from "../component/marketplace/market-place-page/editoral/CollectionCart";
import ItemDetails from "../component/marketplace/market-place-page/editoral/ItemDetails";

function editorals() {
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
        {/* <EditorialPage /> */}
        <ItemDetails />
        <CollectionCart />
      </div>
    </div>
  );
}

export default editorals;
