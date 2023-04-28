import { ReactNode } from "react";

export interface TFaceProps {
  interval?: number;
}

export type TImageSequence = { image: string; time?: number };

export interface TCommonReactNode {
  children?: ReactNode;
  className?: string;
}
