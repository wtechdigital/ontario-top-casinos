import React, { CSSProperties, ReactNode } from "react";

interface ButtonElement {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  onclick?: () => void
}

const Button: React.FC<ButtonElement & React.HTMLProps<HTMLButtonElement>> = ({
  children,
  style,
  className,
  onclick
}) => {
  return (
    <button className={className} onClick={onclick} style={{ ...style }}>
      {children}
    </button>
  );
};

export default Button;
