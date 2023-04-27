import React, { useState } from "react";
import { Face, Viewer } from "../components/atoms";
import { Controller } from "../components/modules";
import { FACE_ID } from "../constants";

const HomePage = () => {
  const [faceId, setFaceId] = useState<string>(FACE_ID.BLINK);

  const onClickButton = (id: string) => setFaceId(id);

  const renderFace = () => {
    switch (faceId) {
      case FACE_ID.WINK:
        return <Face.Wink />;
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

export default HomePage;
