import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 10vh;
  background-color: royalblue;
`;

const FooterContainer = styled.div`
  display: flex;
  color: white;
  justify-content: space-between; /* Utilisation de space-between */
  font-size: 2vh;
  padding: 0vh 70vh; /* Ajout de padding pour un espacement intérieur */
`;

const FooterItem = styled.p`
  margin-top: 5vh; /* Suppression des marges par défaut */
  cursor: pointer;
`;

function Footer() {
  return (
    <Background>
      <FooterContainer>
        <FooterItem>RGPD</FooterItem>
        <FooterItem>Mentions Legales</FooterItem>
        <FooterItem>Presse</FooterItem>
      </FooterContainer>
    </Background>
  );
}

export default Footer;
