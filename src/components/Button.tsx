import React, { CSSProperties, ReactNode } from "react";

interface ButtonElement {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const Button: React.FC<ButtonElement & React.HTMLProps<HTMLButtonElement>> = ({
  children,
  style,
  className,
}) => {
  return (
    <button className={className} style={{ ...style }}>
      {children}
    </button>
  );
};

export default Button;
