import React from 'react';
import styled from 'styled-components';
import Rinetoverlay from '../image/overlay/overlayrinet.png';
import Overlaybackground1 from '../image/overlay/overlaybackground1.png';
import Overlaybackground2 from '../image/overlay/overlaybackground2.png';

const Container = styled.div`
background-color:#0A094B;
background-size: cover; 
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  text-align:left;
`;

const Backgroundimage = styled.div`

background-image: url(${Overlaybackground2}); 
background-size: cover; 
  width: 100%;
  height: 100vh;
  position: absolute;
  overflow: hidden;
  text-align:left;
  opacity: 0.5;
`;





const Background = styled.div`
position: absolute;`

const Overlayimage = styled.img`
  position: absolute;
  height: 107%;
  left: 5%;
  overflow: hidden;
  animation : slideInLeft 1s
`;

const Overlayname = styled.div`
color: white;
font-size: 7vh;
margin-bottom: 2%;
`

const Overlaydata1 = styled.div`
font-family: Aileron;
font-size: 2.5vh;
margin-left: 10%;
margin-bottom: 8%;

color: rgba(255, 255, 255, 0.60);

`
const Overlaymargin = styled.div`
margin-top: 5%;
margin-left: 60%;
animation : zoomIn 1s;
position: relative; /* Ajout de la position relative */
`

const Overlaydata2 = styled.div`
  color: white;
  height: 55vh;
  width: 50vh;
  overflow-y: auto;
  font-family: Aileron;
  font-size: 2vh;
  background-color: transparent;
  padding-right:3vh;

  
`;

function Overlayrinet() {
  return (
    <Container>
      <Backgroundimage />
        <Overlayimage src={Rinetoverlay}></Overlayimage>
        <Overlaymargin>
        <Overlayname>T e d d y <br /> <br /> R i n e r</Overlayname>
        <Overlaydata1>7 Avril 1989 (35 ans)</Overlaydata1>
        <Overlaydata2>
        Catégorie :  + 95 Kg <br /> <br />
Récompenses : Bronze (2020), 
Argent (2008), Or (2012,2016,2020) <br /> <br />

Teddy Riner, né le 7 avril 1989 à Pointe-à-Pitre en Guadeloupe, est un judoka français évoluant dans la catégorie des plus de 100 kg. Considéré comme l'un des plus grands judokas de tous les temps, il est le seul athlète, homme ou femme, à avoir remporté onze titres de champion du monde dans sa discipline. <br /> <br />


Au cours de sa carrière exceptionnelle, Teddy Riner a également décroché trois médailles d'or aux Jeux olympiques : deux en individuel (2012 et 2016) et une par équipes mixtes en 2020. Il compte également deux médailles de bronze aux JO (2008 et 2021) et cinq titres de champion d'Europe. <br /> <br />

Véritable monument du sport français, Teddy Riner est connu pour sa puissance physique hors norme, sa technique redoutable et son mental d'acier. Son palmarès extraordinaire et sa personnalité charismatique ont fait de lui un modèle pour de nombreux jeunes et une source d'inspiration pour les sportifs du monde entier.

</Overlaydata2>
        </Overlaymargin>
    </Container>
  );
}

export default Overlayrinet;
