import React, { CSSProperties, ReactNode } from "react";

interface WSpacedContainerPorps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}
const WSpacedContainer: React.FC<
  WSpacedContainerPorps & React.HTMLProps<HTMLDivElement>
> = ({ children, style, className }) => {
  return (
    <div className={`lg:mx-auto lg:w-[90%] 2lg:mx-auto 2lg:w-[80%] xl:mx-auto xl:w-[80%] 2xl:mx-auto 2xl:w-[65%] ${className}`} style={{ ...style }}>
      {children}
    </div>
  );
};

export default WSpacedContainer;
