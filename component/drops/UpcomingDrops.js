import React from "react";
const drop1 = "/images/drop/drop1.png";
const drop2 = "/images/drop/drop2.png";
const drop3 = "/images/drop/drop3.png";
const drop4 = "/images/drop/drop4.png";

function UpcomingDrops() {
  const items = [
    {
      id: 0,
      title: "Eyo : Eko For Show",
      price: "$3.90",
      button: (
        <button className="upcoming p-5 pt-3 pb-3  bg-[#4693ED] text-[#FFFFFF] text-[18px] rounded-xl">
          UPCOMING
        </button>
      ),
      item: <img src={drop1} className="" />,
      date: "  November 21 at 11 am WAT",
      desc: "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitaetempus. Sed nunc tempus aliquet lectus ut vulputate.",
      creditor: "Aliya Minat",
      notifcation: (
        <a href="" className="text-[#006CA2] text-[18px] underline pt-10">
          Get notified
        </a>
      ),
      time: "Time remaining",
      remainder: "06 hrs : 45 min : 22 s",
      active: (
        <button className="p-5 pt-3 pb-3   bg-[#4693ED] text-[#FFFFFF] text-[16px] rounded-xl">
          Join
        </button>
      ),
    },
    {
      id: 1,
      title: "Ginger Suburbs",
      price: "$3.90",
      button: (
        <button className="upcoming p-5 pt-3 pb-3  bg-[#3EA03B] text-[#FFFFFF] text-[18px] rounded-xl">
          LIVE NOW
        </button>
      ),
      item: <img src={drop2} className="" />,
      date: "  November 21 at 11 am WAT",
      desc: "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitaetempus. Sed nunc tempus aliquet lectus ut vulputate.",
      creditor: "Tina Benson",
      notifcation: (
        <a href="" className="text-[#006CA2] text-[18px] underline pt-10">
          Join now
        </a>
      ),
      time: "Time remaining",
      remainder: "06 hrs : 45 min : 22 s",
      active: (
        <button className="p-5 pt-3 pb-3   bg-[#4693ED] text-[#FFFFFF] text-[16px] rounded-xl">
          Join
        </button>
      ),
    },
    {
      id: 2,
      title: "Sink",
      price: "$3.90",
      button: (
        <button className="upcoming p-5 pt-3 pb-3  bg-[#999EA5] text-[#FFFFFF] text-[18px] rounded-xl">
          ENDED
        </button>
      ),
      item: <img src={drop3} className="" />,
      date: "  November 21 at 11 am WAT",
      desc: "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitaetempus. Sed nunc tempus aliquet lectus ut vulputate.",
      creditor: "Aliya Minat",
      notifcation: (
        <a href="" className="text-[#006CA2] text-[18px] underline pt-10">
          View
        </a>
      ),

      time: "Auction ended",
      remainder: "2 hours ago",
      active: (
        <button className="p-5 pt-3 pb-3   bg-[#B8BABC] text-[#FFFFFF] text-[16px] rounded-xl">
          View
        </button>
      ),
    },
    {
      id: 3,
      title: "Warped '99",
      price: "$3.90",
      button: (
        <button className="upcoming p-5 pt-3 pb-3  bg-[#999EA5] text-[#FFFFFF] text-[18px] rounded-xl">
          ENDED
        </button>
      ),
      item: <img src={drop4} className="" />,
      date: "  November 21 at 11 am WAT",
      desc: "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitaetempus. Sed nunc tempus aliquet lectus ut vulputate.",
      creditor: "Aliya Minat",
      notifcation: (
        <a href="" className="text-[#006CA2] text-[18px] underline pt-10">
          Get notified
        </a>
      ),
      time: "Auction ended",
      remainder: "5 hours ago",
      active: (
        <button className=" p-5 pt-3 pb-3 bg-[#B8BABC] text-[#FFFFFF] text-[16px] rounded-xl">
          View
        </button>
      ),
    },
  ];
  return (
    <>
      {items.map((list, key) => (
        <div className="flex pt-20">
          <div className="p-10 pb-0">
            <div>{list.item}</div>
            <div className="text-[#FFFFFF] w-[578px] rounded-md pl-5 p-5 pb-0 relative bottom-[110px] left-[50px] drop-inner">
              <h3 className="text-[20px]">{list.time}</h3>
              <div className="flex justify-between">
                <h1 className="text-[32px]">{list.remainder}</h1>
                <span>{list.active}</span>
              </div>
            </div>
          </div>
          <div className="p-10 flex flex-col">
            <div>{list.button}</div>
            <span className="text[#000000] text-[18px] pt-20">{list.date}</span>
            <h1 className="text-[#000000] text-[36px] pt-5 font-medium">
              {list.title}
            </h1>
            <p className="text-[#616161] text-[18px] pt-5 w-[24em]">
              {list.desc}
            </p>
            <h3 className="text-[#000000] pt-10 text-[24px]">
              Creator : <span className="text-[#006CA2]">{list.creditor}</span>
            </h3>
            <div className="pt-5">{list.notifcation}</div>
          </div>
        </div>
      ))}
      <div className="flex justify-center item-center ">
        <button className="drop-btn">See more</button>
      </div>
    </>
  );
}

export default UpcomingDrops;
