import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { Products } from "../../Products";
import { Select } from "antd";

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

function MarketItems() {
  return (
    <div className="">
      <div className="pt-20 pb-10">
        <Select
          showSearch
          className="w-full border-0"
          placeholder="See 1-6 of 15 results"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: "philomena",
              label: "PHILOMENA",
            },
            {
              value: "boolen",
              label: "BOOLEAN EGYPTIAN",
            },
            {
              value: "blanc",
              label: "BLANC",
            },
            {
              value: "elipsia",
              label: "ELLIPSIA",
            },
            {
              value: "lawmaker",
              label: "THE LAWMAKERS",
            },
            {
              value: "viel",
              label: "VEIL",
            },
            {
              value: "alternating",
              label: "ALTERNATING",
            },
            {
              value: "rosemary",
              label: "ROSEMARY ‘22",
            },
            {
              value: "berverly",
              label: "BEVERLY",
            },
          ]}
        />
      </div>
      <div className="grid grid-cols-3 gap-20  item-card">
        {Products.map((product) => {
          if (ProductItem[product.id] !== 0) {
            return <ProductItem data={product} />;
          }
        })}
      </div>
    </div>
  );
}

export default MarketItems;
