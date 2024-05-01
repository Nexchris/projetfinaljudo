import React, { useState, Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { config } from "react-spring";
import Agbegnenou from '../image/champion/championagbegnenou.png';
import Decosse from '../image/champion/championdecosse.png';
import Douillet from '../image/champion/championdouillet.png';
import Parisi from '../image/champion/championparisi.png';
import Riner from '../image/champion/championriner.png';
import Overlayabegnenou from '../overlay/overlayagbegnenou';
import Overlayparisi from '../overlay/overlayparisi';
import Overlaydecosse from '../overlay/overlaydecosse';
import Overlaydouillet from '../overlay/overlaydouillet';
import Overlayriner from '../overlay/overlayrinet';

const Container = styled.div`
  background-color: #0A094B;
  width: 100%;
  height: 100vh;
  position: relative;
  align-items: flex-start; 
`;

const Titleflex = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-content: stretch;
  align-items: baseline;
`;

const Titleanimation = styled.div`
  animation: swing 2s; /* Ajout de l'animation zoomIn */
`;

const Title1 = styled.div`
  margin-left: 6%;
  margin-top: 2%;
  margin-bottom: 10px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  z-index: 9999; /* Valeur de z-index élevée pour que l'overlay soit au-dessus de tout */
`;

const CloseButton = styled.span`
  color: white;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    opacity: 0.5;
  }
`;

const Title2 = styled.div``;

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
    overlayOpen: false, // État pour contrôler la visibilité de l'overlay
    currentOverlay: null // Pour stocker le composant d'overlay actuellement ouvert
  };

  slides = [
    {
      key: uuidv4(),
      content: <StyledImage src={Agbegnenou} alt="1" onClick={() => this.openOverlay(<Overlayabegnenou />, 'Agbegnenou')} />
    }, 
    {
      key: uuidv4(),
      content: <StyledImage src={Decosse} alt="2" onClick={() => this.openOverlay(<Overlaydecosse />, 'Decosse')} />
    },
    {
      key: uuidv4(),
      content: <StyledImage src={Douillet} alt="3" onClick={() => this.openOverlay(<Overlaydouillet />, 'Douillet')} />
    },
    {
      key: uuidv4(),
      content: <StyledImage src={Parisi} alt="4" onClick={() => this.openOverlay(<Overlayparisi />, 'Parisi')} />
    },
    {
      key: uuidv4(),
      content: <StyledImage src={Riner} alt="5" onClick={() => this.openOverlay(<Overlayriner />, 'Riner')} />
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  // Fonction pour ouvrir l'overlay
  openOverlay = (overlayComponent, overlayName) => {
    this.setState({ overlayOpen: true, currentOverlay: overlayComponent });
  };

  // Fonction pour fermer l'overlay
  closeOverlay = () => {
    this.setState({ overlayOpen: false, currentOverlay: null });
  };

  render() {
    return (
      <Container>
        <Titleanimation>
          <Titleflex>
            <Title1>Les</Title1>
            <Title2>Legendes</Title2>
          </Titleflex>
        </Titleanimation>
        <div style={{ width: "50%", height: "60vh", margin: "0 auto" }}>
          <Carousel
            slides={this.slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            showNavigation={this.state.showNavigation}
            animationConfig={this.state.config}
          />
          <div
            style={{
              margin: "0 auto",
              marginTop: "2rem",
              width: "50%",
              display: "flex",
              justifyContent: "space-around"
            }}
          >
            
   
        {/* Logique de rendu pour l'overlay */}
        <Overlay isOpen={this.state.overlayOpen}>
          {this.state.currentOverlay}
          <CloseButton onClick={this.closeOverlay}>&times;</CloseButton>
        </Overlay>
      </div>
    </div>
  </Container>
);
}
}
