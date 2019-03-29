import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { VideoContainer, Mute, Video } from './styled';

const VideoBackground = ({ videoURL }) => {
  const [onCheck, setonCheck] = useState(true);
  const updateMuted = () => {
    setonCheck(!onCheck);
  };

  return (
    <VideoContainer>
      <Mute onClick={() => updateMuted()} muted={onCheck} />
      <Video autoPlay loop muted={onCheck}>
        <source src={videoURL} type="video/mp4" />
      </Video>
    </VideoContainer>
  );
};

VideoBackground.propTypes = {
  videoURL: PropTypes.string.isRequired,

};

export default VideoBackground;
