import React from "react";
const dot = "/images/home/dot.png";
const forward = "/images/icons/forward.svg";
const backward = "/images/icons/backward.svg";

function AuctionFrame() {
  return (
    <div className="auction-page p-10 ">
      <div>
        <h1 className="auction-header p-10 pb-20">
          See Upcoming Auctions and Exhibitions
        </h1>
      </div>
      <div className="inner-content ">
        <div className="inner p-10">
          <div className=" content-head flex pt-80">
            <img src={dot} className="dot" />
            <h1 className="head-content">MONALISA REDEFINED IN STYLE.</h1>
          </div>
          <div className="flex">
            <span className="number pr-3 ">01</span>
            <p className="time pt-10">Start on : 08:00 GTS . Monday </p>
          </div>
          <div className="flex justify-betweem">
            <p className="get pl-24 ">
              GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
              INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST
              AND LOWEST BIDS.
            </p>
            <div className="flex pl-52">
              <span className="see pt-5">See more</span>
              <button className="set-btn">
                <span className="set">Set a reminder</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between pl-14 pr-14 pt-20">
        <div className="parent-color">
          <button className="color-white absolute "></button>
        </div>
        <div className="flex">
          <div className="round">
            <img src={backward} className="" />
          </div>
          <div className="round">
          <img src={forward} className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuctionFrame;
