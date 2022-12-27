import React, { useContext } from "react";
import { EditorialPage } from "./EditoralPage";
import { Products } from "../../../Products";
import { ShopContext } from "../../../context/shopContext";
// import { useNavigate } from "react-router-dom";

export const ItemDetails = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  // const navigate = useNavigate();

  return (
    <div>
      {Products.map((product) => {
        if (cartItems[product.id] !== 0) {
          return <EditorialPage data={product} />;
        }
      })}
     
    </div>
  );
};

export default ItemDetails;
