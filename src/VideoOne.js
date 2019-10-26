import React from 'react';
import Video from "./video/vortex.mp4";

function VideoOne() {
  return (
    <video loop autoPlay muted>
      <source src={Video} type="video/mp4" />
    </video>
  );
}

export default VideoOne;
