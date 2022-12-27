import React from "react";
import AuctionFrame from "./auctions/AuctionFrame";
import ExploreMarketPage from "./auctions/ExploreMarketPage";
import CreatorPage from "./creator/CreatorPage";
import Footer from "./footer/Footer";
import Main from "./Main";
import MainFrame from "./MainFrame";
import NewsLetterPage from "./newsletter/NewsLetterPage";
import FeatureProducts from "./products/FeatureProducts";


function HomePage() {
  return (
    <div>
      <Main />
      <div className="pr-10">
        <MainFrame />
      </div>
      <div className="pl-10 pr-10 pb-20">
        <FeatureProducts />
      </div>
      <AuctionFrame />
      <div>
        <ExploreMarketPage />
        <CreatorPage />
        <NewsLetterPage />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
