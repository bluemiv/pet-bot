import React from 'react';
import { TCommonReactNode } from '@/types';

interface TSectionProps extends TCommonReactNode {
  title?: string;
}

const Section = ({ title, children, className }: TSectionProps) => {
  return (
    <section className="flex flex-col gap-y-4 bg-secondary0 rounded p-4">
      {title && <p className="font-bold">{title}</p>}
      <div className={className}>{children}</div>
    </section>
  );
};

export default Section;
