import React from "react";
import { TCommonReactNode } from "../../types";

interface TButtonProps extends TCommonReactNode {
  onClick?: () => void;
}

const Button = ({ children, onClick }: TButtonProps) => {
  return (
    <button className="rounded-xl bg-primary px-10 py-2" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
