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
const MetaMask = "/images/payment/MetaMask.svg";
const Phantom = "/images/payment/Phantom.svg";
const WalletConnect = "/images/payment/WalletConnect.svg";
const Coinbase = "/images/payment/Coinbase.svg";
import Link from "next/link";
function PaymentMethodsForm() {
  return (
    <div>
      <div className="border p-5 pl-10 pr-10">
        <div className="flex justify-between ">
          <div className="flex">
            <div className="flex text-[20px] ">
              <Radio checked className="pt-2" />
              <div>
                <h3 className="text-[22px]">Select your wallet</h3>
                <p className="text-[#616161] text-[16px] w-[20em] pt-2">
                  Connect with one of our available wallet providers or add and
                  connect a new wallet.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <img src={MetaMask} className="w-[30px] h-[30px] ml-2 mr-2" />
            <img src={Coinbase} className="w-[30px] h-[30px] ml-2 mr-2" />
            <img src={WalletConnect} className="w-[30px] h-[30px] ml-2 mr-2" />
            <img src={Phantom} className="w-[30px] h-[30px] ml-2 mr-2" />
          </div>
        </div>
        <div className="pt-20 pay-method">
          <Form className="text-[#888888]" layout="vertical">
            <Form.Item label="Wallet type">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Key">
              <InputNumber className="w-full" />
            </Form.Item>
            <Form layout="vertical">
              <Form.Item label="Wallet typle">
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
              <div className="flex justify-between w-full">
                <div className="w-full pr-3">
                  <Form.Item label="Expiry date">
                    <DatePicker className="w-full" />
                  </Form.Item>
                </div>
                <div className="w-full pl-3">
                  <Form.Item label="InputNumber">
                    <InputNumber className="w-full" />
                  </Form.Item>
                </div>
              </div>
              <div className="flex">
                <Checkbox checked />
                <p className="pl-10 ">
                  Save my wallet details & information for future transactions
                </p>
              </div>
            </Form>
          </Form>
        </div>
      </div>
      <div className="pt-10 w-full">
        <Link className="" href="/confirmPayment">
          <button className="bg-[#3341C1] w-full text-[20px] text-[#ffff] rounded-md p-10 pt-5 pb-5">
            Confirm
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PaymentMethodsForm;
