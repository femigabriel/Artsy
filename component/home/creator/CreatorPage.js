import React from "react";
const Loader = "/images/icons/Loader.svg";
const creator = "/images/home/creator.png";

function CreatorPage() {
  return (
    <div className="creator-page p-20">
      <div className="flex justify-between pr-44">
        <h1 className="creator-content">TOP CREATORS OF THE WEEK</h1>
        <div className="flex ">
          <img src={Loader} className="pr-5" />
          <nav className="creator-lists">
            <li>Editorials</li>
            <li>Fashion</li>
            <li>Lifestyle</li>
            <li>Blueprint</li>
          </nav>
        </div>
      </div>
      <div>
        <p className="creator-p">
          Everything always looked better in black and white. Everything always
          as if it were the first time; there’s always more people in a black
          and white photograph. It just makes it seem that there were more
          people at a gig, more people at a football match, than with colour
          photography. Everything looks more exciting.”– Jack Lowden{" "}
        </p>
      </div>
      <img src={creator} className="creator-img relative  " />
    </div>
  );
}

export default CreatorPage;
