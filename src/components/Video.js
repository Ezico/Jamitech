import React from "react";
import video from "../images/video/solar-assessment-desktop.mp4";
import cover from "../images/video-cover.png";

const Video = () => {
  return (
    <>
      <video autoPlay muted poster={cover} id="vid">
        <source type="video/mp4" src={video}></source>
      </video>
    </>
  );
};

export default Video;
