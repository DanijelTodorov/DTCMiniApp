import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  const subBg = [
    "images/subbar-1.png",
    "images/subbar-2.png",
    "images/subbar-3.png",
    "images/subbar-4.png",
    "images/subbar-5.png",
  ];
  const [index, setIndex] = useState(0);

  const subBar = [
    {
      title: "Build",
      icon: "icons/home.png",
      active_icon: "icons/home-active.png",
      navigate: "/",
    },
    {
      title: "DRop",
      icon: "icons/drop.png",
      active_icon: "icons/drop-active.png",
      navigate: "/drop",
    },
    {
      title: "Friends",
      icon: "icons/friend.png",
      active_icon: "icons/friend-active.png",
      navigate: "/friends",
    },
    {
      title: "Earn",
      icon: "icons/earn.png",
      active_icon: "icons/earn-active.png",
      navigate: "/earn",
    },
    {
      title: (
        <>
          Leader
          <br />
          board
        </>
      ),
      icon: "icons/leader.png",
      active_icon: "icons/leader-active.png",
      navigate: "/leaderboard",
    },
  ];
  return (
    <div className="absolute w-full h-[104px] left-0 bottom-0  z-10">
      <div className="absolute w-full h-full left-0 top-0">
        <img src={subBg[index]} className="w-full h-full"></img>
      </div>
      <div className="w-full h-full left-0 top-0 right-0 grid grid-cols-5 cursor-pointer relative z-20">
        {subBar.map((item, i) => (
          <div
            className="relative border-r-[1px] border-r-[#38DAF999] flex flex-col items-center justify-center gap-4 transition-all duration-100"
            onClick={() => {
              navigate(item.navigate);
              setIndex(i);
            }}
            key={i}
          >
            <img
              src={`${index == i ? item.active_icon : item.icon}`}
              className={`${
                index == i ? "absolute top-[-20px]" : ""
              } transition-all duration-100`}
            ></img>
            <span
              className={`text-[10px] leading-[12px] text-center font-bold ${
                index == i
                  ? "text-white bg-[#003A5C]"
                  : "text-[#003A5C] bg-transparent"
              }  transition-all duration-100 p-1 rounded-[3px]`}
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
