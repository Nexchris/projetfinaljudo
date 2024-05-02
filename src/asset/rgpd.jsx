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
        <Datatitle>Règlement général sur la protection des données</Datatitle>
        <Datatext>
          Assurer et justifier une collecte de données à la fois exhaustive et respectueuse de la législation en vigueur. <br /> <br />
          TikTok, le phénomène mondial de partage de vidéos, a mis en œuvre son propre ensemble de règles de protection des données conformément au Règlement Général sur la Protection des Données (RGPD). En vertu de ces règles, TikTok s'engage à collecter, traiter et stocker les données personnelles des utilisateurs de manière transparente et sécurisée. Les utilisateurs ont le droit d'accéder à leurs données, de les rectifier ou de les supprimer, et TikTok s'engage à obtenir le consentement explicite des utilisateurs avant de collecter leurs informations personnelles. <br /> <br />
          De même, Instagram, l'une des plateformes de partage de photos et de vidéos les plus populaires au monde, est soumise à ses propres politiques de confidentialité conformes au RGPD. Instagram s'efforce de garantir la confidentialité et la sécurité des données de ses utilisateurs en mettant en place des mesures de sécurité robustes et en offrant aux utilisateurs un contrôle sur leurs propres informations personnelles. Cela inclut la possibilité de gérer les paramètres de confidentialité, de contrôler qui peut voir leurs publications et de limiter la collecte de données par des tiers.
          En résumé, tant TikTok qu'Instagram sont assujettis à des politiques de protection des données rigoureuses, conformes aux normes du RGPD. Ces plateformes s'engagent à respecter la confidentialité et les droits des utilisateurs en ce qui concerne leurs données personnelles, ce qui en fait des choix relativement sûrs pour les communications en ligne. Cependant, il est toujours recommandé aux utilisateurs de lire attentivement les politiques de confidentialité de ces plateformes et de prendre des mesures supplémentaires pour protéger leurs informations personnelles lorsqu'ils interagissent en ligne.
        </Datatext>
      </Overlaymargin>
    </Container>
  );
}

export default Overlay;
