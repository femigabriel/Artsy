import React, { useEffect, useState } from "react";
const live = "/images/auctions/live.png";
const send = "/images/auctions/send.svg";
const likes = "/images/auctions/likes.svg";
const forwardIcon = "/images/auctions/forwardIcon.svg";
import { Avatar, List, message } from "antd";
import VirtualList from "rc-virtual-list";
import Link from "next/link";
const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 450;

function LiveAuctionPage() {
  const [data, setData] = useState([]);
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        // message.success(`${body.results.length} more items loaded!`);
      });
  };
  useEffect(() => {
    appendData();
  }, []);
  const onScroll = (e) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendData();
    }
  };
  return (
    <div>
      <div className="flex justify-center item-center ">
        <div className="border border-[#1E1E1E] flex pr-5">
          <h1 className="text-[#fff] text-[30px] font-semibold relative">
            Current bid $4500
          </h1>
          <div className="">
            <img src={live} className="w-[460px] " />
          </div>
          <List className="">
            <VirtualList
              data={data}
              height={ContainerHeight}
              itemHeight={47}
              itemKey="email"
              onScroll={onScroll}
              // width= {1000}
            >
              {(item) => (
                <List.Item key={item.email}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.picture.large} />}
                    title={<a href="https://ant.design">{item.name.last}</a>}
                    description={item.email}
                  />
                </List.Item>
              )}
            </VirtualList>

            <div className="p-5 pb-0 pr-10">
              <div className="flex flex-col">
                <span className="text-[#BAB9B9] font-italic text-[14px] pb-5">
                  Creator : Stormi Rylie
                </span>
                <div className="flex justify-between w-full">
                  <div className="live-chat  p-5 w-full ">
                    <input className="border-0 " />
                    <button className="send-btn m-3">
                      <img src={send} className="" />
                    </button>
                  </div>
                  <span className="border rounded-full m-5 mb-5 w-[58px] h-[58px] ">
                    <img src={likes} className="m-3 ml-2 w-[38px] h-[25px]" />
                  </span>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
      <div className=" p-10 pl-64 flex">
        <span className="text-[#000000] text-[26px] pl-12 pr-5">
          See upcoming drops
        </span>

        <Link className="" href="/drop">
          <button className="border rounded-full w-[50px] h-[50px]">
            <img src={forwardIcon} className=" w-[35px] h-[25px] m-3 ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LiveAuctionPage;
