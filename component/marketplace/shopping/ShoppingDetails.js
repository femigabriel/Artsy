import React from "react";
import ShoppingForm from "./ShoppingForm";
import ShoppingDetailsCarts from "./ShoppingDetailsCarts";

function ShoppingDetails() {
  return (
    <div className="flex  w-full">
      <div className="w-1/2">
        <ShoppingForm />
      </div>
      <div className="w-1/2">
        <ShoppingDetailsCarts />
      </div>
    </div>
  );
}

export default ShoppingDetails;
