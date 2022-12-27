import React from "react";
import AuctionPage from "./AuctionPage";
import PopularCreator from "./PopularCreator";

function AuctionsMain() {
  return (
    <div className="p-10">
      <AuctionPage />
      <PopularCreator />
    </div>
  );
}

export default AuctionsMain;
