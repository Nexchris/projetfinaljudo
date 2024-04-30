import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Frame1 from '../image/frame/frame1.png';
import Frame2 from '../image/frame/frame2.png';
import Frame3 from '../image/frame/frame3.png';
import Frame4 from '../image/frame/frame4.png';
import Frame5 from '../image/frame/frame5.png';

// Styled component pour le conteneur d'image
const ImageContainer = styled.div`
  position: absolute;
  width: 50vh; /* Largeur de l'image */
  height: auto; /* Ajuste la hauteur automatiquement */
  top: 45%;
  left: 10%;
`;

// Styled component pour les images
const Image = styled.img`
  width: 100%; /* Ajuste la largeur à 100% */
  position: absolute;
  top: 0;
  left: 0;
`;

const Image1 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutLeft 0.2s forwards' : 'none'};
`;

const Image2 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutRight 0.2s forwards' : 'none'};
`;

const Image3 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutLeft 0.2s forwards' : 'none'};
`;

const Image4 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutRight 0.2s forwards' : 'none'};
`;

const Image5 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutLeft 0.2s forwards' : 'none'};
`;

const Frame = () => {
  const [animationCompletes, setAnimationCompletes] = useState([false, false, false, false, false]);
  const [currentFrame, setCurrentFrame] = useState(0);

  const handleAnimationEnd = () => {
    setAnimationCompletes((prevCompletes) =>
      prevCompletes.map((complete, index) => (index === currentFrame ? true : complete))
    );
    setCurrentFrame((prevFrame) => prevFrame + 1);
  };

  useEffect(() => {
    if (currentFrame < 5) {
      setTimeout(() => {
        setAnimationCompletes((prevCompletes) =>
          prevCompletes.map((complete, index) => (index === currentFrame ? true : complete))
        );
      }, 2000);
    }
  }, [currentFrame]);

  return (
    <ImageContainer>
      <Image5 src={Frame5} alt="Frame 5" animationComplete={animationCompletes[4]} onAnimationEnd={handleAnimationEnd} />
      <Image4 src={Frame4} alt="Frame 4" animationComplete={animationCompletes[3]} onAnimationEnd={handleAnimationEnd} />
      <Image3 src={Frame3} alt="Frame 3" animationComplete={animationCompletes[2]} onAnimationEnd={handleAnimationEnd} />
      <Image2 src={Frame2} alt="Frame 2" animationComplete={animationCompletes[1]} onAnimationEnd={handleAnimationEnd} />
      <Image1 src={Frame1} alt="Frame 1" animationComplete={animationCompletes[0]} onAnimationEnd={handleAnimationEnd} />
    </ImageContainer>
  );
};

export default Frame;
