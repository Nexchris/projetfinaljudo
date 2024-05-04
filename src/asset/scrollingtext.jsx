import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  @media (min-width: 300px) and (max-width: 500px) {
    display: none;
  }
  
  

`;

const Text = styled.div`
  display: inline-block;
  white-space: nowrap;
  color: white;
  font-size:8vh;
  position:absolute;
  top:10%;
  margin-top:5vh;
  @media (min-width: 300px) and (max-width: 1000px) {
 top:20%;
}


`;

const scrollAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
`;

const AnimatedText = styled(Text)`
  animation: ${scrollAnimation} 5s linear infinite;
  @media (min-width: 700px) and (max-width: 1000px) {
    animation: ${scrollAnimation} 10s linear infinite;
   }
`;

const ScrollingText = () => {
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    if (textWidth === 0) {
      // Measure the width of the text element
      const width = document.getElementById('scrolling-text').offsetWidth;
      setTextWidth(width);
    }
  }, [textWidth]);

  return (
    <Container>
      <AnimatedText id="scrolling-text">les legendes du judo francais</AnimatedText>
    </Container>
  );
};

export default ScrollingText;
