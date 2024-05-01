import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import '../App.css';
import { Link } from 'react-router-dom';
import Francejudo from './FranceJudo.ttf';
import Headerimage from '../image/headerbackground.png';
import Usericon from '../image/user.png'



const Animateimage = styled.div`
left: 0%;
    position: absolute;
    width: 80vh;
    top: -20%;
    height: 1vh;
`;

const Background = styled.div`
  width: 100%;
  background-color: royalblue;
  height: 20vh;
  overflow: hidden;
`;

const Headerbackground = styled.div`
  top: -25%;
  left: 0%;
  position: absolute;
  width: 100%;
`;



const Animatetext = styled.div`
  font-size: 50px;
  position: absolute;
  font-weight: bold;
  white-space: nowrap; /* Empêche le texte de revenir à la ligne */
  color: white;
  display:none;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const User = styled.img`
position: absolute;
top: 0%;
left:95%;
width:5%;
`


const TextAnimation = styled.div`
  width: 100%;
  color: white;
  font-size: ${({ fontSize }) => fontSize}px;
  padding-top: 55px;
  font-weight: 900;
  position: relative;
  top: 50%;
  transform: translateY(${({ translateY }) => Math.min(translateY, 10)}%);
  transition: transform 0.5s linear;

  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 13vh;
  }
`;



function Header() {
  const [translateY, setTranslateY] = useState(-60); // Valeur initiale pour translateY
  const [fontSize, setFontSize] = useState(210); // Valeur initiale pour fontSize

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newTranslateY = -60 + scrollPosition * 1; // Augmenter le multiplicateur pour accélérer le mouvement
      setTranslateY(newTranslateY);

      const newFontSize = 210 - scrollPosition; // Diminue le fontSize de 1 à chaque pixel de défilement
      // setFontSize(Math.max(newFontSize, 100)); // Limitez la taille minimale du fontSize à 100px
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>

      <Background>


          <Animatetext>Les Legendes du Judo Francais</Animatetext>
        <TextAnimation translateY={translateY} fontSize={fontSize}>
          Judo
        </TextAnimation>
        <Link to="/login">
          <User src={Usericon} alt="" />
        </Link>
      </Background>
    </>
  );
}

export default Header;
