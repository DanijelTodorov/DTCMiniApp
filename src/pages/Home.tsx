import { useState } from "react";
import { CubeButton } from "../components/CubeButton";
import { MenuIcon } from "../svgs/MenuIcon";
import { Link } from "react-router-dom";
import { CloseMenu } from "../svgs/CloseMenu";

export const Home = () => {
  const [animation, setAnimation] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [pos1, setPos1] = useState(0);
  const [pos2, setPos2] = useState(0);
  const [pos3, setPos3] = useState(0);

  const startFairyTaleEffect = () => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 500);
    setPos1(-1 * Math.floor((Math.random() * 420) / 60) * 60);
    setPos2(-1 * Math.floor((Math.random() * 420) / 60) * 60);
    setPos3(-1 * Math.floor((Math.random() * 420) / 60) * 60);
  };

  return (
    <div className="page overflow-x-hidden overflow-y-scroll flex flex-col pt-[24px]">
      <div className="relative w-full flex justify-end px-[24px]">
        <div>
          {menuOpen ? (
            <div
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <CloseMenu />
            </div>
          ) : (
            <div
              onClick={() => {
                setMenuOpen(true);
              }}
            >
              <MenuIcon />
            </div>
          )}
        </div>

        <div
          className={`${
            menuOpen ? "absolute" : "hidden"
          } top-[100%] flex flex-col gap-1 text-[12px] bg-[#8BF0F9] p-2 rounded-md transition-all`}
        >
          <Link to="https://dogetonchain.com/dtc-white-paper/">
            <span className="hover:opacity-50">Whitepaper</span>
          </Link>
          <span className="cursor-pointer hover:opacity-50">Close App</span>
        </div>
      </div>

      <div className="w-full flex items-center px-[24px]">
        <div className="relative w-[178px] h-[28px] rounded-full">
          <div className="w-[34px] h-[34px] rounded-full bg-white absolute left-[-3px] top-[-3px]"></div>
          <div className="relative flex items-center justify-center h-full w-[148px] bg-gradient-to-b from-[#53C4ED] to-[#2F7087] rounded-full p-[3px]">
            <div className="absolute left-[3px] w-[22px] h-[22px] rounded-full bg-white flex items-center justify-center">
              <img src="icons/cap.png"></img>
            </div>
            <span className="text-[15px] leading-[18px] text-white">
              456,987,98
            </span>
          </div>
        </div>
      </div>

      <div className="relative w-full flex justify-center mt-[30px]">
        <img src="images/DTC-bg.png" className="absolute w-full"></img>
        <div
          className={`relative dtc-switch ${
            animation ? "animation" : ""
          } z-10 mt-4`}
        >
          <div className="w-[40px] h-[40px] absolute flow-1 left-[15%] top-[140px] overflow-hidden">
            <img
              className={`absolute w-full transition-all duration-1000`}
              src="images/flow.png"
              style={{ top: pos1 + "px" }}
            ></img>
          </div>
          <div className="w-[40px] h-[40px] absolute flow-2 left-[26%] top-[140px] overflow-hidden">
            <img
              className={`absolute w-full transition-all duration-1000`}
              src="images/flow.png"
              style={{ top: pos2 + "px" }}
            ></img>
          </div>
          <div className="w-[40px] h-[40px] absolute flow-3 left-[36.5%] top-[140px] overflow-hidden">
            <img
              className={`absolute w-full transition-all duration-1000`}
              src="images/flow.png"
              style={{ top: pos3 + "px" }}
            ></img>
          </div>
        </div>
      </div>

      <div className="relative w-full flex justify-center mt-4">
        <CubeButton
          className="w-[174px] h-[50px] rounded-[12px] bg-[#003A5C]"
          onClick={startFairyTaleEffect}
        >
          <span className="text-[30px] leading-[28px] tracking-[2%] text-white">
            TAP
          </span>
        </CubeButton>
      </div>
    </div>
  );
};
