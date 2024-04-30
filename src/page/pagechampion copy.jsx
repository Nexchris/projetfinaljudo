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
import Overlayriner from './overlay';


const Container = styled.div`
  background-color: #3B3232;
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
  animation: swing
  2s; /* Ajout de l'animation zoomIn */
`

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
  z-index: 9999; // Valeur de z-index élevée pour que l'overlay soit au-dessus de tout
`;

const CloseButton = styled.span`
  color: white;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
`;

const CustomCarousel = styled(Carousel)`
  position: absolute;
  top: 42%;
  left: 37%;
  display: flex;
  height: 5vh;
  margin: 1rem auto 0px;
  z-index: 9999;
  width: 26%;
  justify-content: space-between;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    opacity: 0.5;
  }
`;

const Title2 = styled.div`
`;

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
    overlayRinerOpen: false // État pour contrôler la visibilité de l'overlay Riner
  };

  slides = [
    {
      key: uuidv4(),
      content: <StyledImage src={Agbegnenou} alt="1" />
    }, 
    {
      key: uuidv4(),
      content: <StyledImage src={Decosse} alt="2" />
    },
    {
      key: uuidv4(),
      content: <StyledImage src={Douillet} alt="3" />
    },
    {
      key: uuidv4(),
      content: <StyledImage src={Parisi} alt="4" />
    },
    {
      key: uuidv4(),
      content: <StyledImage src={Riner} alt="5" onClick={() => this.openOverlayRiner()} />
    },
  
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  // Fonction pour ouvrir l'overlay Riner
  openOverlayRiner = () => {
    this.setState({ overlayRinerOpen: true });
  };

  // Fonction pour fermer l'overlay Riner
  closeOverlayRiner = () => {
    this.setState({ overlayRinerOpen: false });
  };

  render() {
    return (
      <Container>
        <Titleanimation>
          <Titleflex>
            <Title1>Les</Title1>
            <Title2>Champions</Title2>
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
            <div>
              <label>Go to slide: </label>
              <input name="goToSlide" onChange={this.onChangeInput} />
            </div>
            <div>
              <label>Offset Radius: </label>
              <input name="offsetRadius" onChange={this.onChangeInput} />
            </div>
            <div>
              <label>Show navigation: </label>
              <input
                type="checkbox"
                checked={this.state.showNavigation}
                name="showNavigation"
                onChange={e => {
                  this.setState({ showNavigation: e.target.checked });
                }}
              />
            </div>
            <div>
              <button
                onClick={() => {
                  this.setState({ config: config.gentle });
                }}
                disabled={this.state.config === config.gentle}
              >
                Gentle Transition
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  this.setState({ config: config.slow });
                }}
                disabled={this.state.config === config.slow}
              >
                Slow Transition
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  this.setState({ config: config.wobbly });
                }}
                disabled={this.state.config === config.wobbly}
              >
                Wobbly Transition
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  this.setState({ config: config.stiff });
                }}
                disabled={this.state.config === config.stiff}
              >
                Stiff Transition
              </button>
            </div>
          </div>
        </div>
        {/* Ajoutez ici votre logique de rendu pour l'overlay Riner */}
        <Overlay isOpen={this.state.overlayRinerOpen}>
          <Overlayriner />
          <CloseButton onClick={this.closeOverlayRiner}>&times;</CloseButton>
        </Overlay>
      </Container>
    );
  }
}
