import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0A094B;
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



function Pagerecompense() {
  return (
    <Background>
        <Titleflex>
        <Title1>Les</Title1>
        <Title2>Recompenses</Title2>
        </Titleflex>
    </Background>
  );
}
export default Pagerecompense;
