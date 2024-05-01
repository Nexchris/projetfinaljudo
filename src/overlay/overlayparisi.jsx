
import React from 'react';
import styled from 'styled-components';
import Overlayprofile from '../image/overlay/overlayparisi.png';

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
        <Overlayimage src={Overlayprofile}></Overlayimage>
        <Overlaymargin>
        <Overlayname>A N G E L O <br /> <br />P A R I S I</Overlayname>
        <Overlaydata1>3 Janvier 1953 (71 ans)</Overlaydata1>
        <Overlaydata2>
        Catégorie :  +95 Kg<br /> <br />
        Récompenses : Argent (1980, 1984), Or (1980)
2 fois champion du monde <br /> <br />

Angelo Parisi, né le 3 janvier 1953 à Arpino en Italie, est un judoka franco-britannique. Surnommé "Le Magnifique", il est considéré comme l'un des plus grands judokas de l'histoire, avec un palmarès riche de deux médailles d'or, deux d'argent et une de bronze aux Jeux olympiques. <br /> <br />


Parisi a marqué son époque par sa force physique exceptionnelle, sa technique raffinée et son esprit combatif. Il a notamment été champion olympique en 1980 à Moscou, champion du monde en 1979 et 1980, et champion d'Europe à six reprises. En plus de ses exploits sportifs, Parisi est également connu pour sa personnalité charismatique et son implication dans la promotion du judo auprès des jeunes. <br /> <br />

Véritable icône du sport français, Angelo Parisi est une source d'inspiration pour les générations futures de judokas. Son palmarès exceptionnel et son parcours exemplaire font de lui un modèle pour tous ceux qui aspirent à l'excellence.

</Overlaydata2>
        </Overlaymargin>
    </Container>
  );
}

export default Overlayrinet;
