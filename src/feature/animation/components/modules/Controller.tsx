import React from "react";
import { FACE } from "@/constants";
import { Button } from "@/components/atoms";

interface TControllerProps {
  onClickButton: (id: string) => void;
}

const Controller = ({ onClickButton }: TControllerProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      {FACE.map(({ label, id }) => (
        <Button key={id} onClick={() => onClickButton(id)}>
          {label}
        </Button>
      ))}
    </div>
  );
};

export default Controller;
