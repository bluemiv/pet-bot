import React, { ReactNode } from "react";

interface TPetBotViewerProps {
  face: ReactNode;
}

const Viewer = ({ face }: TPetBotViewerProps) => (
  <div className="relative w-viewer h-viewer bg-black rounded-3xl">{face}</div>
);

export default Viewer;
