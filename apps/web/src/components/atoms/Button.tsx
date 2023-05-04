import React from 'react';
import { TCommonReactNode } from '@/types';

interface TButtonProps extends TCommonReactNode {
  onClick?: () => void;
}

const Button = ({ children, onClick }: TButtonProps) => {
  return (
    <button
      className="rounded-md bg-primary1 px-4 py-1 duration-100 ease-in-out hover:shadow hover:shadow-slate-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
