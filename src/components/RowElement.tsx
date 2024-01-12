import React, { CSSProperties, ReactNode } from "react";

interface RowElementProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export const RowElement: React.FC<
  RowElementProps & React.HTMLProps<HTMLDivElement>
> = ({ children, style, className, ...rest }) => {
  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      style={{ ...style, ...rest }}
    >
      {children}
    </div>
  );
};
