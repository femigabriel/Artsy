import React from "react";
import PaymentMethodsForm from "./PaymentMethodsForm";

function PaymentDetails() {
  return (
    <div className="p-10 pl-20 pr-20">
      <div className="pt-5 pb-10">
        <h2 className="text-[#292929] text-[24px]">Payment method</h2>
      </div>
      <div className="w-full flex">
        <div className="w-1/2">
          <PaymentMethodsForm />
        </div>
        <div className="w-1/2 p-5">
          <div className="">
            <h1 className="pb-5 text-[22px]">Payment Summary</h1>
          </div>
          <div className="border p-10 border-l-0 border-r-0">
            <h1 className="text-[20px] text-[#292929]">
              Metamask wallet : 002345KJi90pzzz3
            </h1>
            <p className="text-[#616161] text-[16px]">
              Actively linked to Yaba, Lagos Nigeria.
            </p>
          </div>
          <div className="border p-10 border-l-0 border-r-0 border-t-0">
            <p className="text-[#616161] text-[16px] w-[18em]">
              Expected arrival date: Between 22nd September and 26th September
              20222.
            </p>
          </div>
          <div className="flex justify-between p-10 pb-10">
            <div className="text-[#888888] text-[19px]">
              <h3 className="pb-5"> Products in cart : </h3>
              <h3 className="pb-5"> Shipping : </h3>
              <h3 className="pb-5"> Total : </h3>
            </div>
            <div className="text-[#292929] text-[18px]">
              <p className="pb-5">6</p>
              <p className="pb-5">$2.50</p>
              <p className="pb-5">$114.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDetails;
