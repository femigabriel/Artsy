import React, { useContext } from "react";
import Link from "next/link";
import { Card } from "antd";
import { ShopContext } from "../../context/shopContext";
const { Meta } = Card;

export const ProductItem = (props) => {
  const { id, title, item, price } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  return (
    <div className="">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <Link className="" href="/editorals">
            {item}
          </Link>
        }
      >
        <Meta
          title={<h3 className="p-5 pl-0 text-[18px]">{title}</h3>}
          description={
            <div className="flex justify-between">
              <span className="text-[#33333] text-[16px] font-bold">
                ${price}
              </span>
              <button
                className="text-[12px] border p-1 rounded-md"
                onClick={() => addToCart(id)}
              >
                Add to cart {cartItemCount > 0 && <> ({cartItemCount})</>}
              </button>
            </div>
          }
        />
      </Card>
    </div>
  );
};

export default ProductItem;
