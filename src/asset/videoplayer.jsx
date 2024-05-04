import React from 'react';
import styled from 'styled-components';
import Video from '../video/lejudo.mp4';

const VideoContainer = styled.div`
  position: absolute;
  top: 158%;
  left: 70%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 75vh;
  @media (min-width: 300px) and (max-width: 500px) {
    top: 80%;
        left: 50%;
        width: 93%;
  }
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  @media (min-width: 300px) and (max-width: 500px) {
    height: auto;
    margin-top: 3vh;
  }
`;

function VideoAsset() {
  return (
    <VideoContainer>
      <VideoPlayer src={Video} controls />
    </VideoContainer>
  );
}

export default VideoAsset;

