import {
  Form,
  Input,
  Select,
  Radio,
  InputNumber,
  DatePicker,
  Checkbox,
} from "antd";
import React from "react";
import Link from "next/link";

function ShoppingForm() {
  return (
    <div className="p-10 pl-20">
      <Form className="" layout="vertical">
        <Form.Item label="Your email">
          <Input placeholder="a@b.com" />
        </Form.Item>
        <div className="flex pb-5">
          <Checkbox />
          <p className="pl-5">Get updates about new drops & exclusive offers</p>
        </div>
        <Form.Item label="Your full name">
          <Input placeholder="Femi Gabriel" />
        </Form.Item>

        <Form.Item label="Choose a wallet">
          <Select>
            <Select.Option value="demo">Opay</Select.Option>
            <Select.Option value="demo">Palmpay</Select.Option>
            <Select.Option value="demo">Ocash</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="City">
          <Select>
            <Select.Option value="demo">Lagos</Select.Option>
            <Select.Option value="demo">Abuja</Select.Option>
            <Select.Option value="demo">Calabar</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Key">
          <InputNumber className="w-full" />
        </Form.Item>
        <div className="flex w-full">
          <div className="w-full pr-3">
            <Form.Item label="Country">
              <Select>
                <Select.Option value="demo">Nigeria</Select.Option>
                <Select.Option value="demo">Quatar</Select.Option>
                <Select.Option value="demo">Spain</Select.Option>
                <Select.Option value="demo">Australia</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div className="w-full pl-2">
            <Form.Item label="Postal code">
              <InputNumber placeholder="01234" className="w-full" />
            </Form.Item>
          </div>
        </div>
        <Form.Item label="Phone Number">
          <InputNumber placeholder="" className="w-full" />
        </Form.Item>
        <div className="pt-20">
          <Link className="" href="/payment">
            <button className="shopping-btn">Proceed to payment</button>
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default ShoppingForm;
