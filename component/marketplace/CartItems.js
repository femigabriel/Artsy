import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Products } from "../../products";
import { EditorialPage } from "./market-place-page/editoral/EditoralPage";

export const cartItems = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div>
      {Products.map((product) => {
        if (cartItems[product.id] !== 0) {
          return <EditorialPage data={product} />;
          
        }
      })}
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
