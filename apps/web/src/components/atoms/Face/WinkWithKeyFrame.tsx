import React, { useEffect, useRef, useState } from "react";
import type { TEyesProps, TEyesImageSequence } from "@/types";
import eyesImage0 from "../../../resources/animation/wink/eyes0.svg";
import eyesImage1 from "../../../resources/animation/wink/eyes1.svg";
import eyesImage2 from "../../../resources/animation/wink/eyes2.svg";
import eyesImage3 from "../../../resources/animation/wink/eyes3.svg";
import eyesImage4 from "../../../resources/animation/wink/eyes4.svg";
import eyesImage5 from "../../../resources/animation/wink/eyes5.svg";
import eyesImage6 from "../../../resources/animation/wink/eyes6.svg";
import eyesImage7 from "../../../resources/animation/wink/eyes7.svg";
import eyesImage8 from "../../../resources/animation/wink/eyes8.svg";
import eyesImage9 from "../../../resources/animation/wink/eyes9.svg";

const imageSequence: TEyesImageSequence[] = [
  { image: eyesImage0 },
  { image: eyesImage1 },
  { image: eyesImage2 },
  { image: eyesImage3 },
  { image: eyesImage4 },
  { image: eyesImage5 },
  { image: eyesImage6 },
  { image: eyesImage7, time: 1000, leftKeyframe: "rotate-wink-left-eyes" },
  { image: eyesImage8 },
  { image: eyesImage9 },
];

interface TWinkWithKeyFrameProps extends TEyesProps {}

const WinkWithKeyFrame = ({ interval = 2000 }: TWinkWithKeyFrameProps) => {
  const [imageSeq, setImageSeq] = useState<TEyesImageSequence>(
    imageSequence[0]
  );

  const imageIdx = useRef<number>(0);
  const prevTimer = useRef<number>(0);
  const intervalStart = useRef<number>(0);

  useEffect(() => {
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, []);

  const animate: FrameRequestCallback = (timestamp) => {
    const delta = timestamp - prevTimer.current;
    if (
      prevTimer.current === 0 ||
      delta > (imageSequence?.[imageIdx.current]?.time ?? 25)
    ) {
      prevTimer.current = timestamp;
      imageIdx.current = imageIdx.current + 1;
      if (imageIdx.current > imageSequence.length - 1) {
        if (intervalStart.current === 0) {
          intervalStart.current = timestamp;
        }
        if (timestamp - intervalStart.current > interval) {
          intervalStart.current = 0;
          imageIdx.current = 0;
          setImageSeq(imageSequence[imageIdx.current]);
        }
      } else {
        setImageSeq(imageSequence[imageIdx.current]);
      }
    }
    requestAnimationFrame(animate);
  };

  return (
    <div className="flex justify-between px-40 pt-20">
      <div className="flex flex-col justify-end items-center">
        <img
          src={eyesImage0}
          alt="left eyes"
          className={`${imageSeq.rightKeyframe || ""}`}
        />
      </div>
      <div className="flex flex-col justify-end items-center">
        <img
          src={imageSeq.image}
          alt="right eyes"
          className={`${imageSeq.leftKeyframe || ""}`}
        />
      </div>
    </div>
  );
};

export default WinkWithKeyFrame;
