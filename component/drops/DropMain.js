import React from "react";
import Footer from "../home/footer/Footer";
import NewsLetterPage from "../home/newsletter/NewsLetterPage";
import DropPage from "./DropPage";
import UpcomingDrops from "./UpcomingDrops";

function DropMain() {
  return (
    <div className="pl-20 pl-20 p-5">
      <DropPage />
      <UpcomingDrops />
      <NewsLetterPage />
      <Footer />
    </div>
  );
}

export default DropMain;
