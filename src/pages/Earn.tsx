import { Link } from "react-router-dom";
import { CubeButton } from "../components/CubeButton";

export const Earn = () => {
  const tasks = [
    {
      avatar: "images/avatar.png",
      task: "FOLLOW X",
      score: "+100",
      link: "https://x.com/dogetonchain",
    },
    {
      avatar: "images/avatar.png",
      task: "LIKE AND REPOST PINNED TWEET ON X",
      score: "+100",
      link: "https://x.com/dogetonchain",
    },
    {
      avatar: "images/avatar.png",
      task: "JOIN TELEGRAM CHANNEL",
      score: "+100",
      link: "https://t.me/DogeTonChainnn",
    },
    {
      avatar: "images/avatar.png",
      task: "VISIT WEBSITE",
      score: "+100",
      link: "https://dogetonchain.com",
    },
  ];
  return (
    <div className="page overflow-x-hidden overflow-y-scroll">
      <img src="images/DTC-bg.png" className="absolute w-full pt-[130px]"></img>
      <div className="bg-[#004D57BF] border-[1px] border-[#004D5703] rounded-[33px] m-4 py-[30px] px-[24px] flex flex-col gap-6 relative z-10">
        <span className="text-[15px] leading-[28px] tracking-[2%] text-white">
          Daily tasks
        </span>
        <div className="px-[9px] flex flex-col">
          {tasks.map((item, index) => (
            <div
              className="flex justify-between items-center py-3 border-b-[1px] border-b-[#6990A7]"
              key={index}
            >
              <div className="flex items-center gap-[12px]">
                <img src={item.avatar} className="rounded-full"></img>
                <div className="flex flex-col">
                  <span className="text-[10px] leading-[28px] tracking-[2px]">
                    {item.task}
                  </span>
                  <div className="flex gap-1 items-center">
                    <img src="icons/cap.png"></img>
                    <span className="text-[10px] leading-[28px] tracking-[2px]">
                      {item.score}
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative flex justify-center">
                <CubeButton
                  className="w-[42px] h-[21px] rounded-[4px] bg-gradient-to-b from-[#0088CC40] to-[#FFFFFF40]"
                  small
                  onClick={() => {}}
                >
                  <Link to={item.link}>
                    <span className="text-[8px] leading-[28px] tracking-[2%] text-white">
                      Go
                    </span>
                  </Link>
                </CubeButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
