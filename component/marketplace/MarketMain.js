import React from "react";
import MarketplaceMenu from "./MarketplaceMenu";
import ShoppingCart from "./ShoppingCart";
import ShoppingItems from "./ShoppingItems";

function MarketMain() {
  return (
    <div>
      <MarketplaceMenu />
      {/* <ShoppingCart /> */}
      <ShoppingItems />
    </div>
  );
}

export default MarketMain;
