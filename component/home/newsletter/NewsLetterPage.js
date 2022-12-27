import React from "react";

function NewsLetterPage() {
  return (
    <div className="pt-40 p-10 ">
      <div className="newsletter-page">
        <div className="newsletter-content pt-10">
          <h1>NewsLetter</h1>
        </div>
        <div className=" newsletter-content">
          <p>Subscribe to get daily updates on new drops & exciting deals </p>
        </div>
        <div className=" newsletter-content pt-10">
          <input type="email" placeholder="Enter your Email" className="p-5" />
          <button className="newletter-btn ml-5">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetterPage;
