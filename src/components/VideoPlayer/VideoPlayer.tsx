import React, { FC } from "react";
import ReactPlayer from "react-player";

interface IProps {
  videoUrl: string;
  width: string;
  height: string;
}

const VideoPlayer: FC<IProps> = ({ videoUrl, height, width }) => {
  return (
    <React.Fragment>
      <ReactPlayer
        url={videoUrl}
        width={width}
        height={height}
        controls={true}
      />
    </React.Fragment>
  );
};

export { VideoPlayer };
