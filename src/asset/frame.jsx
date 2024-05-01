import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Frame1 from '../image/frame/frame1.png';
import Frame2 from '../image/frame/frame2.png';
import Frame3 from '../image/frame/frame3.png';
import Frame4 from '../image/frame/frame4.png';
import Frame5 from '../image/frame/frame5.png';
import Frame6 from '../image/frame/frame6.png';
import Frame7 from '../image/frame/frame7.png';
import Frame8 from '../image/frame/frame8.png';
import Frame9 from '../image/frame/frame9.png';
import Frame10 from '../image/frame/frame10.png';
import Frame11 from '../image/frame/frame11.png';
import Frame12 from '../image/frame/frame12.png';
import Frame13 from '../image/frame/frame13.png';
import Frame14 from '../image/frame/frame14.png';
import Frame15 from '../image/frame/frame15.png';
import Frame16 from '../image/frame/frame16.png';
import Frame17 from '../image/frame/frame17.png';
import Frame18 from '../image/frame/frame18.png';
import Frame19 from '../image/frame/frame19.png';
import Frame20 from '../image/frame/frame20.png';
import Frame21 from '../image/frame/frame21.png';
import Frame22 from '../image/frame/frame22.png';
import Frame23 from '../image/frame/frame23.png';
import Frame24 from '../image/frame/frame24.png';
import Frame25 from '../image/frame/frame25.png';
import Frame26 from '../image/frame/frame26.png';
import Frame27 from '../image/frame/frame27.png';
import Frame28 from '../image/frame/frame28.png';
import Frame29 from '../image/frame/frame29.png';

// Styled component pour le conteneur d'image
const ImageContainer = styled.div`
  position: absolute;
  width: 50vh; /* Largeur de l'image */
  height: auto; /* Ajuste la hauteur automatiquement */
  top: 45%;
  left: 10%;

  @media (max-width: 768px) { /* Définis la largeur maximale pour les écrans de taille d'un ordinateur */
    display: none; /* Cache le contenu si l'écran est plus petit */
  }
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
    animationComplete ? 'fadeOutLeft 0.1s forwards' : 'none'};
`;

const Image2 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutRight 0.1s forwards' : 'none'};
`;

const Image3 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutLeft 0.1s forwards' : 'none'};
`;

const Image4 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutRight 0.1s forwards' : 'none'};
`;

const Image5 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutLeft 0.1s forwards' : 'none'};
`;

const Image6 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutRight 0.1s forwards' : 'none'};
`;

const Image7 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutLeft 0.1s forwards' : 'none'};
`;

const Image8 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutRight 0.1s forwards' : 'none'};
`;

const Image9 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutLeft 0.1s forwards' : 'none'};
`;

const Image10 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutRight 0.1s forwards' : 'none'};
`;

const Image11 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutLeft 0.1s forwards' : 'none'};
`;

const Image12 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutRight 0.1s forwards' : 'none'};
`;

const Image13 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutLeft 0.1s forwards' : 'none'};
`;

const Image14 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutRight 0.1s forwards' : 'none'};
`;

const Image15 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutLeft 0.1s forwards' : 'none'};
`;

const Image16 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutRight 0.1s forwards' : 'none'};
`;

const Image17 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutLeft 0.1s forwards' : 'none'};
`;

const Image18 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutRight 0.1s forwards' : 'none'};
`;

const Image19 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutLeft 0.1s forwards' : 'none'};
`;

const Image20 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutRight 0.1s forwards' : 'none'};
`;

const Image21 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutLeft 0.1s forwards' : 'none'};
`;

const Image22 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutRight 0.1s forwards' : 'none'};
`;

const Image23 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutLeft 0.1s forwards' : 'none'};
`;

const Image24 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutRight 0.1s forwards' : 'none'};
`;

const Image25 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutLeft 0.1s forwards' : 'none'};
`;

const Image26 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutRight 0.1s forwards' : 'none'};
`;

const Image27 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutLeft 0.1s forwards' : 'none'};
`;

const Image28 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutRight 0.1s forwards' : 'none'};
`;

const Image29 = styled(Image)`
  animation: ${({ animationComplete }) =>
    animationComplete ? 'fadeOutLeft 0.1s forwards' : 'none'};
`;




const Frame = () => {
  const [animationCompletes, setAnimationCompletes] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);



  const [currentFrame, setCurrentFrame] = useState(0);

  const handleAnimationEnd = () => {
    setAnimationCompletes((prevCompletes) =>
      prevCompletes.map((complete, index) => (index === currentFrame ? true : complete))
    );
    setCurrentFrame((prevFrame) => prevFrame + 1);
  };

  useEffect(() => {
    if (currentFrame < 29) {
      setTimeout(() => {
        setAnimationCompletes((prevCompletes) =>
          prevCompletes.map((complete, index) => (index === currentFrame ? true : complete))
        );
      }, 2000);
    }
  }, [currentFrame]);

  return (
    <ImageContainer>
      <Image29 src={Frame29} alt="Frame 29" animationComplete={animationCompletes[28]} onAnimationEnd={handleAnimationEnd} />
<Image28 src={Frame28} alt="Frame 28" animationComplete={animationCompletes[27]} onAnimationEnd={handleAnimationEnd} />
<Image27 src={Frame27} alt="Frame 27" animationComplete={animationCompletes[26]} onAnimationEnd={handleAnimationEnd} />
<Image26 src={Frame26} alt="Frame 26" animationComplete={animationCompletes[25]} onAnimationEnd={handleAnimationEnd} />
<Image25 src={Frame25} alt="Frame 25" animationComplete={animationCompletes[24]} onAnimationEnd={handleAnimationEnd} />
<Image24 src={Frame24} alt="Frame 24" animationComplete={animationCompletes[23]} onAnimationEnd={handleAnimationEnd} />
<Image23 src={Frame23} alt="Frame 23" animationComplete={animationCompletes[22]} onAnimationEnd={handleAnimationEnd} />
<Image22 src={Frame22} alt="Frame 22" animationComplete={animationCompletes[21]} onAnimationEnd={handleAnimationEnd} />
<Image21 src={Frame21} alt="Frame 21" animationComplete={animationCompletes[20]} onAnimationEnd={handleAnimationEnd} />
<Image20 src={Frame20} alt="Frame 20" animationComplete={animationCompletes[19]} onAnimationEnd={handleAnimationEnd} />
<Image19 src={Frame19} alt="Frame 19" animationComplete={animationCompletes[18]} onAnimationEnd={handleAnimationEnd} />
<Image18 src={Frame18} alt="Frame 18" animationComplete={animationCompletes[17]} onAnimationEnd={handleAnimationEnd} />
<Image17 src={Frame17} alt="Frame 17" animationComplete={animationCompletes[16]} onAnimationEnd={handleAnimationEnd} />
<Image16 src={Frame16} alt="Frame 16" animationComplete={animationCompletes[15]} onAnimationEnd={handleAnimationEnd} />  
<Image15 src={Frame15} alt="Frame 15" animationComplete={animationCompletes[14]} onAnimationEnd={handleAnimationEnd} />
<Image14 src={Frame14} alt="Frame 14" animationComplete={animationCompletes[13]} onAnimationEnd={handleAnimationEnd} />
<Image13 src={Frame13} alt="Frame 13" animationComplete={animationCompletes[12]} onAnimationEnd={handleAnimationEnd} />
<Image12 src={Frame12} alt="Frame 12" animationComplete={animationCompletes[11]} onAnimationEnd={handleAnimationEnd} />
<Image11 src={Frame11} alt="Frame 11" animationComplete={animationCompletes[10]} onAnimationEnd={handleAnimationEnd} />
<Image10 src={Frame10} alt="Frame 4" animationComplete={animationCompletes[9]} onAnimationEnd={handleAnimationEnd} />
      <Image9 src={Frame9} alt="Frame 5" animationComplete={animationCompletes[8]} onAnimationEnd={handleAnimationEnd} />
      <Image8 src={Frame8} alt="Frame 4" animationComplete={animationCompletes[7]} onAnimationEnd={handleAnimationEnd} />
      <Image7 src={Frame7} alt="Frame 3" animationComplete={animationCompletes[6]} onAnimationEnd={handleAnimationEnd} />
      <Image6 src={Frame6} alt="Frame 2" animationComplete={animationCompletes[5]} onAnimationEnd={handleAnimationEnd} />
      <Image5 src={Frame5} alt="Frame 5" animationComplete={animationCompletes[4]} onAnimationEnd={handleAnimationEnd} />
      <Image4 src={Frame4} alt="Frame 4" animationComplete={animationCompletes[3]} onAnimationEnd={handleAnimationEnd} />
      <Image3 src={Frame3} alt="Frame 3" animationComplete={animationCompletes[2]} onAnimationEnd={handleAnimationEnd} />
      <Image2 src={Frame2} alt="Frame 2" animationComplete={animationCompletes[1]} onAnimationEnd={handleAnimationEnd} />
      <Image1 src={Frame1} alt="Frame 1" animationComplete={animationCompletes[0]} onAnimationEnd={handleAnimationEnd} />
    </ImageContainer>
  );
};

export default Frame;
