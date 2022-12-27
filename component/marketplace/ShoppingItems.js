import React, { useContext } from "react";
import { Products } from "../../component/Products";
import ShoppingCart from "./ShoppingCart";
import Link from "next/link";
import { ShopContext } from "../../component/context/shopContext";
function ShoppingItems() {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div>
      <div className="">
        {Products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <ShoppingCart data={product} />;
          }
        })}
      </div>
      <div className="flex justify-between pl-40 pt-20 pr-40 ">
        <div className="pr-40">
          <Link href="/shoppingPage">
            <button className="bg-[#3341C1] rounded-md text-[#fff] p-5 pl-10 pr-10 text-[20px]">
              Proceed to checkout
            </button>
          </Link>
        </div>

        <div className="text-[#888888] text-[20px]">
          <h3 className="pt-5">Product in cart:</h3>
          <h3 className="pt-5">Shipping:</h3>
          <h3 className="pt-5">Total:</h3>
        </div>
        <div className="text-[#292929] text-[20px]">
          <h3 className="pt-5">3 items</h3>
          <h3 className="pt-5">$2.50</h3>
          <h3 className="pt-5">Total: ${totalAmount}</h3>
         
        </div>
      </div>
    </div>
  );
}
export default ShoppingItems;
