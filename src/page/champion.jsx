import React from 'react';
import styled from 'styled-components';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'animate.css';
import Agbegnenou from '../image/champion/championagbegnenou.png';
import Decosse from '../image/champion/championdecosse.png';
import Douillet from '../image/champion/championdouillet.png';
import Parisi from '../image/champion/championparisi.png';
import Riner from '../image/champion/championriner.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Background = styled.div`
  flex: 1;
  width: 100%;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Titleflex = styled.div`
font-size: 60px;
color: white;
margin-top: 20px;
position: absolute;
top: 3%;
left: 3%;
`

const Title1 = styled.div`
margin-left: -215px;
`;

const Title2 = styled.div`
`;

const ImageWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 10%;
  height: auto;
  order: ${(props) => props.order}; /* Utilisation de la propriété order pour spécifier l'ordre */
`;

const Arrow = styled.div`
  font-size: 24px;
  color: white;
  cursor: pointer;
  margin: 0 10px; /* Ajout de marges pour l'esthétique */
`;



function Champion() {
  return (
    <Container>
      <Background>
        <Titleflex>
        <Title1>Les</Title1>
        <Title2>Champions</Title2>
        </Titleflex>
        
        <Arrow>◀️</Arrow>
        <ImageWrapper>
          <Image src={Agbegnenou} alt="Champion Agbegnenou"  />
          <Image src={Decosse} alt="Champion Decosse"  />
          <Image src={Douillet} alt="Champion Douillet"  />
          <Image src={Parisi} alt="Champion Parisi"  />
          <Image src={Riner} alt="Champion Riner"  />
        </ImageWrapper>
        <Arrow >▶️</Arrow>
      </Background>
    </Container>
  );
}

export default Champion;
