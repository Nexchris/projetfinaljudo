import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Agbegnenou from '../image/champion/championagbegnenou.png';
import Decosse from '../image/champion/championdecosse.png';
import Douillet from '../image/champion/championdouillet.png';
import Parisi from '../image/champion/championparisi.png';
import Riner from '../image/champion/championriner.png';

const Container = styled.div`
  position: relative;
  background-color: green;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ImageStack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  transition: opacity 0.5s ease;
  opacity: ${props => (props.visible ? 1 : 0)};
`;

const ImageStackAnimation = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Container>
      <ImageStack>
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            visible={index === currentIndex}
          />
        ))}
      </ImageStack>
    </Container>
  );
};

const Stackimage = () => {
  const images = [
    Agbegnenou,
    Decosse,
    Douillet,
    Parisi,
    Riner,
  ];

  return <ImageStackAnimation images={images} />;
};

export default Stackimage;
