import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-size: cover; 
  background-color:#0A094B;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  text-align: left;
`;

const Datatitle = styled.div`
  font-family: Aileron;
  font-size: 6vh;
  margin-left: 45vh;
  margin-bottom: 3%;
  color: white;
  font-weight: bold;

`;

const Overlaymargin = styled.div`
  margin-top: 8%;
  animation: backInUp 1s;
`;

const Datatext = styled.div`
  color: white;
  height: auto;
  width: 100vh;
  font-family: Aileron;
  font-size: 2.5vh;
  
  margin-left: 55vh;
  scrollbar-color: white transparent; /* Pour Firefox */
  scrollbar-border-radius: 5px;
`;

function Overlay() {
  return (
    <Container>
      <Overlaymargin>
        <Datatitle>Gestion des Cookies</Datatitle>
        <Datatext>
        Notre site utilise des cookies pour améliorer votre expérience de navigation. En continuant à utiliser notre site, vous acceptez notre utilisation de cookies conformément à notre politique de confidentialité. <br /> <br />

Nous utilisons différents types de cookies sur notre site, notamment des cookies de performance, de fonctionnalité et de ciblage. Les cookies de performance nous permettent d'évaluer l'efficacité de notre site et d'améliorer ses performances. Les cookies de fonctionnalité nous permettent de vous offrir une expérience personnalisée en fonction de vos préférences. Les cookies de ciblage nous permettent de vous proposer du contenu et de la publicité adaptés à vos centres d'intérêt. <br /> <br />

Vous pouvez gérer vos préférences en matière de cookies en modifiant les paramètres de votre navigateur ou en utilisant des outils de gestion de cookies tels que le module de gestion de cookies de notre site. Vous pouvez également refuser tous les cookies en configurant votre navigateur de manière appropriée. <br /> <br />

Pour en savoir plus sur notre utilisation des cookies et sur la manière dont nous traitons vos données personnelles, veuillez consulter notre politique de confidentialité.

        </Datatext>
      </Overlaymargin>
    </Container>
  );
}

export default Overlay;
