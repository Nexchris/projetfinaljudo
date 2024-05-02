import React from 'react';
import styled from 'styled-components';
import RGPD from './rgpd';
import Cookie from './footercookie';
import Politique from './politique';

const Background = styled.div`
  width: 100%;
  height: 10vh;
  background-color: royalblue;
`;

const FooterContainer = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  font-size: 2vh;
  padding: 0vh 70vh;
`;

const FooterItem = styled.p`
  margin-top: 5vh;
  cursor: pointer;
`;

class Footer extends React.Component {
  state = {
    overlayOpen: false,
    currentOverlay: null,
  };

  // Fonction pour ouvrir l'overlay correspondant
  openOverlay = (overlayComponent) => {
    this.setState({ overlayOpen: true, currentOverlay: overlayComponent });
  };

  // Fonction pour fermer l'overlay
  closeOverlay = () => {
    this.setState({ overlayOpen: false, currentOverlay: null });
  };

  render() {
    const { overlayOpen, currentOverlay } = this.state;

    return (
      <>
        <Background>
          <FooterContainer>
            <FooterItem onClick={() => this.openOverlay(<RGPD />)}>RGPD</FooterItem>
            <FooterItem onClick={() => this.openOverlay(<Cookie />)}>Cookies</FooterItem>
            <FooterItem onClick={() => this.openOverlay(<Politique />)}>Politique</FooterItem>
          </FooterContainer>
        </Background>

        <Overlay isOpen={overlayOpen}>
          {currentOverlay}
          <CloseButton onClick={this.closeOverlay}>&times;</CloseButton>
        </Overlay>
      </>
    );
  }
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Ajout d'un fond semi-transparent */
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const CloseButton = styled.span`
  color: white;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
`;

export default Footer;
