import React from "react";
import Link from "next/link";
const product1 = "/images/home/product1.png";
const featured1 = "/images/home/featured1.png";
const arrow = "/images/home/arrow.png";
const frames = "/images/home/frames.png";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Image, Tooltip } from "antd";
function FeatCards() {
  const featCard = [
    {
      id: 0,
      // Img: <img src={product1} className="" />,
      Img: <Image src={product1} />,
      header: "The Boolean Egyptian",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur",
      creators: "64 major creators",
      icon: <img src={arrow} className="" />,
      likes: <img src={arrow} className="" />,
    },
  ];

  return (
    <div>
      <div className="w-full max-w-[1200px] card pb-10">
        <Link className="" href="/editorals">
          {featCard.map((list, key) => (
            <div className="flex feat-map p-5">
              <div className="feat-img">{list.Img}</div>
              <div className="">
                <h1 className="p-5 feat-item-head">{list.header}</h1>
                <p className="feat-content">{list.content}</p>
                <div className="flex justify-between">
                  <div className="flex pt-5">
          
                    <Avatar.Group>
                      <Avatar src="https://joeschmoe.io/api/v1/random" />
                      <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
                      <Tooltip title="Ant User" placement="top">
                        <Avatar
                          style={{ backgroundColor: "#87d068" }}
                          icon={<UserOutlined />}
                        />
                      </Tooltip>
                      <Avatar
                        style={{ backgroundColor: "#1890ff" }}
                        icon={<AntDesignOutlined />}
                      />
                    </Avatar.Group>
                  </div>
                  <div className="p-5 pr-20 pt-5">
                    <img src={arrow} className="w-[45px] h-[45px]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Link>
      </div>
    </div>
  );
}

export default FeatCards;
