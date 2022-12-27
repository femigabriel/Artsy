import React from "react";
import { Select, Checkbox, Slider } from "antd";
const filter = "/images/marketplace/market/filter.png";

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
function FilterSideBar() {
  return (
    <div className="w-[244px]">
      <div className="">
        <Select
          showSearch
          className="pb-20"
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: "category",
              label: "By category",
            },
            {
              value: "price",
              label: "By price",
            },
            {
              value: "artist",
              label: "By artist",
            },
            {
              value: "year",
              label: "Collection year",
            },
          ]}
        />
        <div className="flex flex-col">
          <div className="flex">
            <img src={filter} className="w-[25px] h-[25px] mt-4" />
            <h1 className="text-[#000000] text-[28px] font-semi-bold ml-5">
              Filter
            </h1>
          </div>
          <div className="pt-20 flex flex-col ">
            <div className="p-3">
              <Select
                defaultValue="By category"
                style={{
                  width: 180,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "jack",
                    label: (
                      <div className="flex">
                        <Checkbox className="pr-3" />
                        <h3 className="">Editorials</h3>
                      </div>
                    ),
                  },
                  {
                    value: "lucy",
                    label: (
                      <div className="flex">
                        <Checkbox className="pr-3" />
                        <h3 className="">Editorials</h3>
                      </div>
                    ),
                  },
                  {
                    value: "disabled",
                    // disabled: true,
                    label: (
                      <div className="flex">
                        <Checkbox className="pr-3" />
                        <h3 className="">Editorials</h3>
                      </div>
                    ),
                  },
                  {
                    value: "Yiminghe",
                    label: (
                      <div className="flex">
                        <Checkbox className="pr-3" />
                        <h3 className="">Editorials</h3>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
            <div className="p-3">
              <Select
                defaultValue="By price"
                className=""
                style={{
                  width: 180,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "price",
                    label: (
                      <div>
                        <Slider
                          className="pt-5"
                          defaultValue={30}
                          tooltip={{
                            open: true,
                          }}
                        />
                      </div>
                    ),
                  },
                ]}
              />
            </div>
            <div className="p-3">
              <Select
                defaultValue="By artist"
                style={{
                  width: 180,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "jack",
                    label: "All",
                  },
                  {
                    value: "lucy",
                    label: "Below $100.00",
                  },
                  {
                    value: "disabled",
                    // disabled: true,
                    label: "Below $100.00",
                  },
                  {
                    value: "Yiminghe",
                    label: "Below $100.00",
                  },
                ]}
              />
            </div>
            <div className="p-3">
              <Select
                defaultValue=" Collection year"
                style={{
                  width: 180,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "jack",
                    label: "All",
                  },
                  {
                    value: "lucy",
                    label: "2022",
                  },
                  {
                    value: "disabled",
                    // disabled: true,
                    label: "2021",
                  },
                  {
                    value: "Yiminghe",
                    label: "Below 2020",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSideBar;
