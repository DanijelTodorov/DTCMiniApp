import { CubeButton } from "../components/CubeButton";

export const Friends = () => {
  // const friends = [
  //   {
  //     avatar: "images/avatar.png",
  //     name: "Amelia",
  //     score: "129K",
  //   },
  //   {
  //     avatar: "images/avatar.png",
  //     name: "Lee Jia Wei",
  //     score: "849k",
  //   },
  //   {
  //     avatar: "images/avatar.png",
  //     name: "Lucas",
  //     score: "545k",
  //   },
  //   {
  //     avatar: "images/avatar.png",
  //     name: "Low Wei Jie",
  //     score: "314k",
  //   },
  //   {
  //     avatar: "images/avatar.png",
  //     name: "Amelia",
  //     score: "129K",
  //   },
  //   {
  //     avatar: "images/avatar.png",
  //     name: "Lee Jia Wei",
  //     score: "849k",
  //   },
  //   {
  //     avatar: "images/avatar.png",
  //     name: "Lucas",
  //     score: "545k",
  //   },
  //   {
  //     avatar: "images/avatar.png",
  //     name: "Low Wei Jie",
  //     score: "314k",
  //   },
  // ];
  const friends: any[] = [];
  return (
    <div className="page overflow-x-hidden overflow-y-scroll">
      <img src="images/DTC-bg.png" className="absolute w-full pt-[130px]"></img>
      <div className="bg-[#004D57BF] border-[1px] border-[#004D5703] rounded-[33px] m-4 py-[30px] pb-[50px] px-[24px] flex flex-col gap-6 relative z-10">
        <span className="text-[15px] leading-[28px] tracking-[2%] text-white text-center">
          YOUR FRiENDS
        </span>
        <div className="px-[9px] flex flex-col h-full">
          {friends.length == 0 ? <span className="text-center">YOU HAVE NO FRIENDS YET</span> : <></>}
          {friends.map((item, index) => (
            <div
              className="flex justify-between items-center py-3 border-b-[1px] border-b-[#6990A7]"
              key={index}
            >
              <div className="flex items-center gap-[12px]">
                <img src={item.avatar}></img>
                <span className="text-[10px] leading-[28px] tracking-[2px]">
                  {item.name}
                </span>
              </div>
              <span className="text-[10px] leading-[28px] tracking-[2px] text-white">
                {item.score}
              </span>
            </div>
          ))}
        </div>
        <div className="relative h-[106px] flex flex-col items-center gap-[40px] rounded-[20px] border-[4px] border-white p-[20px]">
          <div className="flex items-center justify-center gap-4">
            <span className="text-[14px] leading-[28px] tracking-[2%] border-r-[1px] border-r-white pr-2">
              oiuyt789jhgfghqwert
            </span>
            <div className="bg-[#D9D9D9] rounded-[5px] border-[#003A5C] text-[#003A5C] text-[10px] leading-[28px] tracking-[2%] flex items-center px-2 hover:opacity-50">
              <div>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2077_148)">
                    <path
                      d="M4.89579 3.309C5.95487 3.22159 7.05884 3.6657 7.79442 4.42397C7.95832 4.59295 8.00203 4.75881 7.9072 4.97657C7.84984 5.10809 7.26761 5.8043 7.14898 5.88353C6.71973 6.16997 6.36852 5.60996 6.02082 5.40936C5.32114 5.00545 4.5996 5.15335 4.01035 5.66576C3.58422 6.03651 2.22856 7.3583 2.03422 7.80827C1.37629 9.33144 3.12882 10.7598 4.50282 9.78024C4.85364 9.53008 5.18261 8.90372 5.6622 9.27329C5.7699 9.35642 6.39544 9.98668 6.43603 10.0772C6.50393 10.2283 6.49651 10.4035 6.4052 10.5436C6.26121 10.7641 5.67001 11.2667 5.43704 11.4158C2.03617 13.5907 -1.74127 9.20968 0.872113 6.17856C1.38956 5.57835 2.31558 4.64836 2.91575 4.13244C3.45271 3.67116 4.18908 3.36715 4.89657 3.309H4.89579Z"
                      fill="#003A5C"
                    />
                    <path
                      d="M8.25498 0.00810619C11.0346 -0.176095 12.9163 2.81561 11.5376 5.24808C11.163 5.90918 9.76322 7.26415 9.1529 7.79997C7.70749 9.06869 5.60297 8.91376 4.25901 7.58026C4.07795 7.40074 4.00497 7.2181 4.12009 6.97341C4.17043 6.86609 4.75773 6.17884 4.85841 6.10509C5.28883 5.78976 5.65565 6.36305 6.00335 6.56676C6.68235 6.96443 7.42301 6.82121 7.99899 6.3248C8.41927 5.96264 9.69845 4.71772 9.93141 4.28454C10.7497 2.76176 8.9414 1.16053 7.50457 2.20798C7.16194 2.45775 6.83922 3.07045 6.36236 2.70283C6.25817 2.62244 5.64355 2.00817 5.5979 1.91919C5.52219 1.77324 5.52492 1.59255 5.60804 1.45049C5.66892 1.34708 6.06149 0.97243 6.17232 0.875647C6.74166 0.376899 7.49598 0.0584493 8.25498 0.00810619Z"
                      fill="#003A5C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2077_148">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span>copy</span>
            </div>
          </div>
          <div className="absolute bottom-[-30px]">
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
        </div>
      </div>
    </div>
  );
};
