import {React, useState}from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';
import Agbegnenou from '../image/champion/championagbegnenou.png';
import Decosse from '../image/champion/championdecosse.png';
import Douillet from '../image/champion/championdouillet.png';
import Parisi from '../image/champion/championparisi.png';
import Riner from '../image/champion/championriner.png';

const Container = styled.div`
  background-color: #3B3232;
  width: 100%;
  height: 100vh;
  position: relative;
  align-items: flex-start; 
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Paragraph = styled.p`
  color: black;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.5s;
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


const Title1 = styled.div`
margin-left: 6%;
margin-top: 2%;
margin-bottom: 10px;
`;

const Title2 = styled.div`
`;

export default function Carouselle() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const carouselStyle = {
    width: '80vw',
    height: '435px',
    marginTop: '3%',
    marginLeft: '10%',
  };

  const carouselContainerClass = "carousel-container";

  const [isParagraphVisible, setIsParagraphVisible] = useState(false);
  const [isDouillethover, setIsDouillethover] = useState(false)

  return (
    <Container>
      <div style={{ position: "relative" }}>
      <Titleflex>
        <Title1>Les</Title1>
        <Title2>Champions</Title2>
        </Titleflex>
        <Carousel 
  
          responsive={responsive}
          containerClass={carouselContainerClass}
          customTransition="all .5s"
        >
          <Image src={Douillet} alt="Champion Douillet"
          onMouseEnter={() => setIsDouillethover(true)}
          onMouseLeave={() => setIsDouillethover(false)} />
          <Image src={Parisi} alt="Champion Parisi" />
          <Image 
            src={Riner} 
            alt="Champion Riner" 
            onMouseEnter={() => setIsParagraphVisible(true)}
            onMouseLeave={() => setIsParagraphVisible(false)}
          />
          <Image src={Decosse} alt="Champion Decosse" />
          <Image src={Agbegnenou} alt="Champion Agbegnenou" />
        </Carousel>


        <Paragraph visible={isParagraphVisible}>
        <h1>Teddy Riner </h1>Triple champion olympique consécutif (2012, 2016, 2020), 5 médailles olympiques au total (2 en bronze), 10 titres de champion du monde.
        </Paragraph>



      </div>
      <style>
        {`.${carouselContainerClass} {
          width: ${carouselStyle.width};
          margin-top: ${carouselStyle.marginTop};
          margin-left: ${carouselStyle.marginLeft};
          height: ${carouselStyle.height};
        }`}
      </style>
    </Container>
  );
}
