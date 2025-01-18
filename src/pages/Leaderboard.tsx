import { CubeButton } from "../components/CubeButton";

export const Leaderboard = () => {
  // const tasks = [
  //   {
  //     avatar: "images/avatar.png",
  //     task: "Discovery daily ",
  //     score: "Rank 01",
  //   },
  //   {
  //     avatar: "images/avatar.png",
  //     task: "Discovery daily ",
  //     score: "Rank 01",
  //   },
  //   {
  //     avatar: "images/avatar.png",
  //     task: "Discovery daily ",
  //     score: "Rank 01",
  //   },
  //   {
  //     avatar: "images/avatar.png",
  //     task: "Discovery daily ",
  //     score: "Rank 01",
  //   },
  //   {
  //     avatar: "images/avatar.png",
  //     task: "Discovery daily ",
  //     score: "Rank 01",
  //   },
  //   {
  //     avatar: "images/avatar.png",
  //     task: "Discovery daily ",
  //     score: "Rank 01",
  //   },
  //   {
  //     avatar: "images/avatar.png",
  //     task: "Discovery daily ",
  //     score: "Rank 01",
  //   },
  // ];

  const tasks: any[] = [];

  return (
    <div className="page overflow-x-hidden overflow-y-scroll">
      <img src="images/DTC-bg.png" className="absolute w-full pt-[130px]"></img>
      <div className="bg-[#004D57BF] border-[1px] border-[#004D5703] rounded-[33px] m-4 py-[30px] px-[24px] flex flex-col gap-6 relative z-10">
        <span className="text-[12px] leading-[28px] tracking-[2%] text-white">
          Leader board
        </span>
        <div className="px-[9px] flex flex-col">
          {tasks.length == 0 && (
            <div className="flex flex-col items-center gap-2">
              <span>YOU HAVE NO FRIENDS YET</span>
              <div className="relative w-full flex justify-center">
                <CubeButton
                  className="w-[240px] h-[50px] rounded-[12px] bg-[#003A5C]"
                  onClick={() => {}}
                >
                  <div className="flex items-center justify-center gap-2">
                    <img src="icons/invite-icon.png"></img>
                    <span className="text-[20px] leading-[28px] tracking-[2%] text-white">
                      Invite Friends
                    </span>
                  </div>
                </CubeButton>
              </div>
            </div>
          )}
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
                  <span className="text-[8px] leading-[28px] tracking-[2%] text-white">
                    Follow
                  </span>
                </CubeButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
