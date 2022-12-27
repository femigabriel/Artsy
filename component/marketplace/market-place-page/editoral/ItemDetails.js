import React, { useContext } from "react";
import { EditorialPage } from "./EditoralPage";
import { Products } from "../../../Products";
import { ShopContext } from "../../../context/shopContext";

export const ItemDetails = () => {
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
        <div className="flex justify-center items-center">
          <p> Subtotal: ${totalAmount} </p>
          <button
            className="border p-3"
            onClick={() => <Link href="/market"></Link>}
          >
            Continue Shopping
          </button>
          <button
            onClick={() => {
              checkout();
              <Link href="/"></Link>;
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

export default ItemDetails;
