
import React from 'react';
import styled from 'styled-components';
import Overlayprofile from '../image/overlay/overlaydouillet.png';

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
  padding-right:3vh;
  width: 50vh;
  overflow-y: auto;
  font-family: Aileron;
  font-size: 2vh;
  background-color: transparent;

  
`;

function Overlayrinet() {
  return (
    <Container>
      <Backgroundimage />
        <Overlayimage src={Overlayprofile}></Overlayimage>
        <Overlaymargin>
        <Overlayname>D A V I D <br /> <br />D O U I L L E T</Overlayname>
        <Overlaydata1>17 Février 1969 (55 ans)</Overlaydata1>
        <Overlaydata2>
        Catégorie :  +100 Kg<br /> <br />
        Récompenses: Or (1996, 2000)
4 fois Champion du monde<br /> <br />

David Douillet, né le 17 février 1969 à Rouen, est un judoka et homme politique français. Considéré comme l'un des plus grands judokas de l'histoire, il a marqué son époque par sa puissance physique hors norme, sa technique redoutable et son mental d'acier. <br /> <br />

Surnommé "Le Grand Blond", Douillet a dominé la catégorie des plus de 100 kg pendant près de deux décennies.Son palmarès est jalonné de succès, avec notamment deux titres olympiques (1996 et 2000), quatre titres de champion du monde (1995, 1997, 2001 et 2005) et cinq titres de champion d'Europe. <br /> <br />

Au-delà de ses exploits sportifs, David Douillet est également une personnalité engagée. Il a notamment été ministre des Sports de 2011 à 2012 et a été élu président de la Fédération française de judo en 2021. Véritable icône du sport français, David Douillet est une source d'inspiration pour les générations futures de judokas et pour tous ceux qui aspirent à l'excellence.

</Overlaydata2>
        </Overlaymargin>
    </Container>
  );
}

export default Overlayrinet;
