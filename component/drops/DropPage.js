import React from "react";

function DropPage() {
  return (
    <div className="flex justify-center item-center pt-40">
      <div>
        <h1 className="text-[#000000] text-[48px] font-medium pl-32 pb-5	">
          Upcoming drops
        </h1>
        <p className="text-[#616161] text-[26px]">
          Turn on notifications so that no drops will miss you.
        </p>
        <div className="pt-10 flex  justify-center item-center">
          <button className="border-2 border-[#000000] text-[#000000] font-medium  notify">
            Notify me
          </button>
        
        </div>
      </div>
    </div>
  );
}

export default DropPage;
