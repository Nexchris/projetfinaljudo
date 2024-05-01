import React from 'react';
import styled, { keyframes } from 'styled-components';
import Frame from '../asset/frame';
import Video from '../video/lejudo.mp4';
import Videoasset from '../asset/videoplayer'
import 'animate.css';

// Déclaration de scrollImages en dehors du composant


const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0A094B;
  display: flex;
  align-items: flex-start; /* Aligner les enfants sur le début de l'axe transversal */
`;

const Titleflex = styled.div`
  display: flex;
  font-size: 7vh;
  color: white;
  align-items: flex-start;
  flex-direction: column;
  animation: bounceInLeft 1.5s;
  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 3.3vh;
    margin-top:3vh;
  }
`;

const Title1 = styled.div`
  margin-top: 3vh;
  margin-bottom: -8vh;
  margin-left: 11vh;
  @media (min-width: 300px) and (max-width: 500px) {
    margin-left: 13vh;
    margin-bottom: -5vh;
  }
`;

const Title2 = styled.div`
  margin-top: 25px;
  margin-left: 11vh;
  @media (min-width: 300px) and (max-width: 500px) {
    margin-left: 4vh;
  }
`;



const Videocontainer = styled.div`
  position: absolute;
  top: 73%; /* Centrer verticalement */
  left: 70%; /* Centrer horizontalement */
  transform: translate(-50%, -50%);
  width: 50%; /* Augmenter la largeur de la vidéo */
  height: 75vh; /* Définir une hauteur fixe pour la vidéo */
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
`;

function PageHistoire() {
  return (
    <Background>
      <Titleflex>
        <Title1>L'histoire</Title1>
        <br />
        <Title2> du Judo Francais</Title2>
      </Titleflex>
      <Frame />

      <Videoasset />
    </Background>
  );
}

export default PageHistoire;
