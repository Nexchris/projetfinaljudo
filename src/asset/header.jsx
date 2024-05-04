import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import '../App.css';
import { Link } from 'react-router-dom';
import Francejudo from './FranceJudo.ttf';
import Headerimage from '../image/headerbackground.png';
import Olympic from '../image/olympic.png';
import Usericon from '../image/usericon.png'
import Usericonhover from '../image/usericonhover.png'
import ScrollingText from '../asset/scrollingtext'



const Animateimage = styled.div`
left: 0%;
    position: absolute;
    width: 80vh;
    top: -20%;
    height: 1vh;
`;

const Background = styled.div`
  width: 100%;
  background-image: url(${Headerimage}); 
  background-size:cover;
  background-color: #0A094B;
  height: 100vh;
  overflow: hidden;
  @media (min-width: 300px) and (max-width: 500px) {
    height: 30vh;
  }
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
top: 1%;
left:94%;
width:5%;
animation: bounceInRight 1s;

&:hover{
  filter: contrast(0.8);
}

@media (min-width: 300px) and (max-width: 1000px) {
    left: 85%;
    width: 13%;
}





`

const Ring = styled.div`
position:absolute;
top:54%;
left:40%;
animation: backInUp 1s;
@media (min-width: 300px) and (max-width: 500px) {
 display: none;
}
@media (min-width: 700px) and (max-width: 1000px) {
  left: 27%;
 }
`


const TextAnimation = styled.div`
  width: 100%;
  color: white;
  font-size: ${({ fontSize }) => fontSize}px;
  padding-top: 55px;
  margin-top: 20vh;
  font-weight: 900;
  position: relative;
  top: 50%;
  transform: translateY(${({ translateY }) => Math.min(translateY, 50)}%);
  transition: transform 0.5s linear;

  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 11vh;
    top: 46%;
    margin-top: 19vh;
  }
  @media (min-width: 700px) and (max-width: 1000px) {
    font-size: 20vh;
   }

`;



function Header() {
  const [translateY, setTranslateY] = useState(-150); // Valeur initiale pour translateY
  const [fontSize, setFontSize] = useState(300); // Valeur initiale pour fontSize

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newTranslateY = -150 + scrollPosition * 1; // Augmenter le multiplicateur pour accélérer le mouvement
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


      <ScrollingText  />
      <Ring><img src={Olympic} alt="" /></Ring>
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
