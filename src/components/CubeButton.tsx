import { ReactNode, useState } from "react";

interface CubeButtonProps {
  children: ReactNode;
  className: string;
  small?: boolean;
  onClick: Function;
}

export const CubeButton: React.FC<CubeButtonProps> = ({
  children,
  className,
  small = false,
  onClick,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    console.log("onClick");
    onClick();
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 100);
  };
  return (
    <div className={`${className}`}>
      <button
        onClick={handleClick}
        className={`${
          isClicked
            ? ``
            : `${
                small
                  ? "-translate-y-1 border-[1px]"
                  : "-translate-y-3 border-[2px]"
              }`
        } flex items-center justify-center transition-transform duration-100  border-[#FFFFFF33] ${className}`}
      >
        {children}
      </button>
    </div>
  );
};
