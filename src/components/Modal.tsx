import React, { ReactNode, useState } from "react";
import { CubeButton } from "./CubeButton";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [page, setPage] = useState(0);
  const onClickleash = () => {
    if (page == 0) setPage(1);
    else if (page == 1) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-7 z-50"
      onClick={onClose}
    >
      <div
        className="modal-bg relative bg-[#004D57A6] border-[1px] border-[#004D57] rounded-[20px] backdrop-blur-lg p-4 py-6 w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex justify-end">
          <img src="icons/close.png" className="" onClick={onClose}></img>
        </div>

        <div className="relative w-full h-full overflow-hidden">
          <div
            className={`absolute ${
              page == 0 ? "top-0" : "bottom-20"
            } w-full flex flex-col gap-10 items-center absolute transition-all duration-[5000] z-0`}
          >
            <div className="flex flex-col items-center">
              <span className="text-lg">Dtc's journey from</span>
              <span className="text-xl">heartbreak to hero</span>
            </div>
            <div className="flex items-center justify-around w-full gap-2">
              <img
                src="images/modal-1.png"
                className="w-[134px] h-[128px] rounded-[8px]"
              ></img>
              <span className="text-[12px] leading-[15px] tracking-[2%] max-w-[180px]">
                DTC, abandoned by his lover, roams the streets, scavenging for
                scraps, his spirit dimmed by loneliness. Yet, a faint hope
                endures, driven by dreams of a better life.
              </span>
            </div>
            <div className="w-[262px] border-[1px] border-[#FFFFFF45]"></div>
            <div className="flex items-center justify-around w-full gap-2">
              <span className="text-[12px] leading-[15px] tracking-[2%] max-w-[180px]">
                Weeks pass, and DTC's plight worsens. Homeless and begging, he's
                often met with pity or disdain. Yet, a faint hope persists a
                dream of a better life.
              </span>
              <img
                src="images/modal-2.png"
                className="w-[134px] h-[128px] rounded-[8px]"
              ></img>
            </div>
            <div className="w-[262px] border-[1px] border-[#FFFFFF45]"></div>
            <div className="flex items-center justify-around w-full gap-2">
              <img
                src="images/modal-3.png"
                className="w-[134px] h-[128px] rounded-[8px]"
              ></img>
              <span className="text-[12px] leading-[15px] tracking-[2%] max-w-[180px]">
                One day, DTC sees a faded Dogecoin poster of strength and
                success. Inspired, he vows to rebuild his life and emulate the
                iconic mascot’s rise to greatness.
              </span>
            </div>
            <div className="w-[262px] border-[1px] border-[#FFFFFF45]"></div>
            <div className="flex items-center justify-around w-full gap-2">
              <span className="text-[12px] leading-[15px] tracking-[2%] max-w-[180px]">
                DTC discovers the TON blockchain, finds belonging, and learns
                crypto. Inspired, he launches a memecoin symbolizing resilience,
                inspiring others to support his vision.
              </span>
              <img
                src="images/modal-4.png"
                className="w-[134px] h-[128px] rounded-[8px]"
              ></img>
            </div>
            <div className="w-[262px] border-[1px] border-[#FFFFFF45]"></div>
            <div className="flex items-center justify-around w-full gap-2">
              <img
                src="images/modal-5.png"
                className="w-[134px] h-[128px] rounded-[8px]"
              ></img>
              <span className="text-[12px] leading-[15px] tracking-[2%] max-w-[180px]">
                Challenges test DTC, but his confidence and community drive him
                forward. His token spreads hope, turning him into a crypto
                legend. He uses his success to uplift others, leaving a legacy
                of resilience.
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 flex justify-center w-full bg-gradient-to-t from-[#00000080] to-[#00000000] backdrop-opacity-50 rounded-[20px] py-7">
          <div className="relative w-full flex justify-center mt-4">
            <CubeButton
              className="w-[174px] h-[50px] rounded-[12px] bg-[#003A5C] gap-2"
              onClick={onClickleash}
            >
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 8.26795C18.3333 9.03775 18.3333 10.9623 17 11.7321L3.5 19.5263C2.16667 20.2961 0.500001 19.3338 0.500001 17.7942L0.500002 2.20577C0.500002 0.66617 2.16667 -0.29608 3.5 0.47372L17 8.26795Z"
                  fill="white"
                />
              </svg>
              <span className="text-[20px] leading-[28px] tracking-[2%] text-white">
                Unleash
              </span>
            </CubeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
