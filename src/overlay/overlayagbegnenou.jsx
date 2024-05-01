
import React from 'react';
import styled from 'styled-components';
import Overlayprofile from '../image/overlay/overlayagbegnenou.png';
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
        <Overlayname>C L A R I S S E <br /> <br />A g B E G N E N O U</Overlayname>
        <Overlaydata1>25 Octobre 1992 (31 ans)</Overlaydata1>
        <Overlaydata2>
        Catégorie :  +70 Kg<br /> <br />
        Récompenses: Or (2016, 2020) 5 fois Championne du Monde<br /> <br />

        Clarisse Agbegnenou, née le 25 octobre 1992 à Rennes, est une judokate française évoluant dans la catégorie des moins de 70 kg. Considérée comme l'une des plus grandes judokates de tous les temps, elle est la judokate française la plus titrée avec un palmarès exceptionnel qui comprend notamment : <br /> <br />
        <li>Cinq titres de championne du monde (2014, 2017, 2018, 2019 et 2021)</li>
<li>Un titre de championne olympique (2020)</li>
<li>Cinq titres de championne d'Europe (2013, 2014, 2018, 2020 et 2021)</li>
<li>Deux médailles d'argent aux Jeux olympiques (2016 et 2024)</li> <br /> <br />

Surnommée "La Tigresse", Clarisse Agbegnenou est admirée pour sa combativité hors du commun, sa technique irréprochable et son mental d'acier. Elle est également connue pour son engagement dans la promotion du judo auprès des jeunes et des femmes, et pour son rôle de porte-drapeau de la délégation française aux Jeux olympiques de Tokyo en 2021. <br /> <br />

Figure emblématique du sport français, Clarisse Agbegnenou est une source d'inspiration pour les générations futures de judokas et pour tous ceux qui aspirent à l'excellence.
</Overlaydata2>
        </Overlaymargin>
    </Container>
  );
}

export default Overlayrinet;
