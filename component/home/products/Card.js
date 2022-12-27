import React from "react";

function Card({ Img, content, header, description, icons }) {
  return (
    <div className="w-full max-w-[1200px]">
      <div className="flex feat-map p-5">
        <div className="feat-img">{Img}</div>
        <div className="">
          <h1 className="p-5 feat-item-head">{header}</h1>
          <p className="feat-content">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
