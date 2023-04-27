import React, { useEffect, useRef, useState } from "react";
import eyesImage0 from "../../../resources/blink/eyes0.svg";
import eyesImage1 from "../../../resources/blink/eyes1.svg";
import eyesImage2 from "../../../resources/blink/eyes2.svg";
import eyesImage3 from "../../../resources/blink/eyes3.svg";
import eyesImage4 from "../../../resources/blink/eyes4.svg";
import eyesImage5 from "../../../resources/blink/eyes5.svg";
import eyesImage6 from "../../../resources/blink/eyes6.svg";
import eyesImage7 from "../../../resources/blink/eyes7.svg";
import eyesImage8 from "../../../resources/blink/eyes8.svg";
import eyesImage9 from "../../../resources/blink/eyes9.svg";
import eyesImage10 from "../../../resources/blink/eyes10.svg";
import eyesImage11 from "../../../resources/blink/eyes11.svg";
import eyesImage12 from "../../../resources/blink/eyes12.svg";

const IMAGES = [
  eyesImage0,
  eyesImage1,
  eyesImage2,
  eyesImage3,
  eyesImage4,
  eyesImage5,
  eyesImage6,
  eyesImage7,
  eyesImage8,
  eyesImage9,
  eyesImage10,
  eyesImage11,
  eyesImage12,
];

interface TBlinkProps {
  interval?: number;
}

const Blink = ({ interval = 2000 }: TBlinkProps) => {
  const [image, setImage] = useState<string>(IMAGES[0]);
  const imageIdx = useRef<number>(0);
  const prevTimer = useRef<number>(0);
  const intervalStart = useRef<number>(0);

  useEffect(() => {
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, []);

  const animate: FrameRequestCallback = (timestamp) => {
    const delta = timestamp - prevTimer.current;
    if (prevTimer.current === 0 || delta > 10) {
      prevTimer.current = timestamp;
      imageIdx.current = imageIdx.current + 1;
      if (imageIdx.current > IMAGES.length - 1) {
        if (intervalStart.current === 0) {
          intervalStart.current = timestamp;
        }
        if (timestamp - intervalStart.current > interval) {
          intervalStart.current = 0;
          imageIdx.current = 0;
          setImage(IMAGES[imageIdx.current]);
        }
      } else {
        setImage(IMAGES[imageIdx.current]);
      }
    }
    requestAnimationFrame(animate);
  };

  return (
    <div className="flex justify-between px-40 pt-20">
      <div className="flex flex-col justify-end items-center">
        <img src={image} />
      </div>
      <div className="flex flex-col justify-end items-center">
        <img src={image} />
      </div>
    </div>
  );
};

export default Blink;
