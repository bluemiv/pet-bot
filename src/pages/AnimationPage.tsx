import React, { useState } from "react";
import { FACE_ID } from "@/constants";
import { Face, Viewer } from "@/components/atoms";
import { Controller } from "@animation/components/modules";

const AnimationPage = () => {
  const [faceId, setFaceId] = useState<string>(FACE_ID.BLINK);

  const onClickButton = (id: string) => setFaceId(id);

  const renderFace = () => {
    switch (faceId) {
      case FACE_ID.WINK:
        return <Face.Wink />;
      case FACE_ID.WINK_KEYFRAME:
        return <Face.WinkWithKeyFrame />;
      case FACE_ID.SMILE:
        return <Face.Smile />;
      case FACE_ID.DARAE:
        return <Face.Darae />;
      default:
        return <Face.Blink />;
    }
  };

  return (
    <div className="flex align-bottom gap-x-4">
      <Viewer face={renderFace()} />
      <Controller onClickButton={onClickButton} />
    </div>
  );
};

export default AnimationPage;
