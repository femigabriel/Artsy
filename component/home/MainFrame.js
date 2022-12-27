import React from "react";
const mainframe1 = "/images/home/mainframe1.png";
const mainframe2 = "/images/home/mainframe2.png";
const mainframe3 = "/images/home/mainframe3.png";
const mainframe4 = "/images/home/mainframe4.png";
const mainframe5 = "/images/home/mainframe5.png";
const mainframe6 = "/images/home/mainframe6.png";
const mainframe7 = "/images/home/mainframe7.png";
const mainframe8 = "/images/home/mainframe8.png";
const mainframe9 = "/images/home/mainframe9.png";
import { Carousel } from "antd";
function MainFrame() {
  return (
    <div className="flex main-frame justify-between pt-40 pb-40">
      <Carousel
         autoplay
        slidesToShow={4}
        className="w-[1250px]"
      >
        <img src={mainframe1} className="frame-1 relative top-20 pl-5 pr-5" />
        <img src={mainframe2} className="pl-5 pr-5" />
        <img src={mainframe3} className="relative bottom- mt-20 pl-5 pr-5" />
        <img src={mainframe4} className=" pl-5 pr-5" />
        <img src={mainframe5} className=" pl-5 pr-5 frame-1 relative top-20" />
        <img src={mainframe6} className=" pl-5 pr-5" />
        <img src={mainframe7} className="pl-5 pr-5 relative  mt-20 pl-5 pr-5" />
        <img src={mainframe2} className="pl-5 pr-5" />
      </Carousel>
    </div>
  );
}

export default MainFrame;
