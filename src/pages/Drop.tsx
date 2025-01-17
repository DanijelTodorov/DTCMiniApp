import { CubeButton } from "../components/CubeButton";

export const Drop = () => {
  return (
    <div className="page overflow-x-hidden overflow-y-scroll flex flex-col p-4">
      <img src="images/drop-bg.webp"></img>
      <div className="relative w-full flex justify-center mt-[-60px]">
        <CubeButton
          className="w-[276px] h-[50px] rounded-[12px] bg-[#003A5C]"
          onClick={() => {}}
        >
          <div className="w-full flex items-center justify-center gap-4">
            <img
              src="icons/connect-icon.png"
              className="w-[33px] h-[30px]"
            ></img>
            <span className="text-[20px] leading-[28px] tracking-[2%] text-white">
              CONNECT WALLET
            </span>
          </div>
        </CubeButton>
      </div>
    </div>
  );
};
