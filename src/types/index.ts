import { ReactNode } from "react";

export interface TEyesProps {
  interval?: number;
}

export type TEyesImageSequence = {
  image: string;
  time?: number;
  leftKeyframe?: string;
  rightKeyframe?: string;
};

export interface TCommonReactNode {
  children?: ReactNode;
  className?: string;
}
