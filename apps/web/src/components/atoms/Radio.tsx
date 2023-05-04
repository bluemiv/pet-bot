import React, { ChangeEvent } from 'react';
import { TCommonReactNode } from '@/types';

interface TRadioProps extends TCommonReactNode {
  name?: string;
  label?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  defaultChecked?: boolean;
}

const Radio = ({ name, label, value, onChange, defaultChecked }: TRadioProps) => {
  const id = `radio-${name}-${value}`;
  return (
    <div className="flex items-center gap-x-1 group">
      <input
        id={id}
        name={name}
        type="radio"
        value={value}
        onChange={onChange}
        defaultChecked={defaultChecked}
        className="group-hover:cursor-pointer"
      />
      <label htmlFor={id} className="group-hover:cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default Radio;
