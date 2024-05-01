
import React from 'react';
import styled from 'styled-components';
import Overlayprofile from '../image/overlay/overlaydecosse.png';
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
  padding-right:3vh;
  font-size: 2vh;
  background-color: transparent;

  
`;

function Overlayrinet() {
  return (
    <Container>
      <Backgroundimage />
        <Overlayimage src={Overlayprofile}></Overlayimage>
        <Overlaymargin>
        <Overlayname>L U C I E <br /> <br />D E C O S S E</Overlayname>
        <Overlaydata1>6 Aout 1981 (41 ans)</Overlaydata1>
        <Overlaydata2>
        Catégorie :  +70 Kg<br /> <br />
        Récompenses: Or (2008, 2012)<br /> <br />

L  ucie Décosse, née le 17 octobre 1986 à Étampes, est une judokate française évoluant dans la catégorie des moins de 70 kg. Considérée comme l'une des plus grandes judokates de sa génération, elle a marqué son époque par son talent, sa détermination et son esprit combatif. <br /> <br />

Surnommée "La Fauvette", Lucie Décosse a collectionné les titres tout au long de sa carrière. Elle a notamment été :
<li>Championne du monde à trois reprises (2005, 2010 et 2011)
Championne olympique à Londres en 2012
Vice-championne olympique à Pékin en 2008
Quatre fois championne d'Europe
</li> <br /> <br />

Au-delà de ses exploits sportifs, Lucie Décosse est également une personnalité engagée. Elle a notamment été ambassadrice de l'UNICEF et a créé sa propre fondation pour aider les jeunes en difficulté. Véritable modèle pour les générations futures de judokates, Lucie Décosse est une source d'inspiration pour tous ceux qui aspirent à l'excellence.
</Overlaydata2>
        </Overlaymargin>
    </Container>
  );
}

export default Overlayrinet;
