import React from 'react';
import styled from 'styled-components';
import Frise from '../image/frise.png';
import Champion from '../image/overlay/overlayclerget.png';
import Overlaybackground1 from '../image/overlay/overlaybackground1.png';
import Overlaybackground2 from '../image/overlay/overlaybackground2.png';

const Container = styled.div`
background-image: url(${Overlaybackground1}); 
background-size: cover; 
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  text-align:left;
`;

const Background = styled.div`
position: absolute;`

const Overlayimage = styled.img`
  position: absolute;
  height: 107%;
  left: 5%;
  overflow: hidden;
  animation : slideInLeft 1s
`;

const Overlayname = styled.div`
color: white;
font-size: 7vh;
margin-bottom: 2%;
`

const Overlaydata1 = styled.div`
font-family: Aileron;
font-size: 2.5vh;
margin-left: 10%;
margin-bottom: 8%;

color: rgba(255, 255, 255, 0.60);

`
const Overlaymargin = styled.div`
margin-top: 5%;
margin-left: 60%;
animation : zoomIn 1s
`

const Overlaydata2 = styled.div`
  color: white;
  height: 55vh;
  width: 50vh;
  overflow-y: auto;
  font-family: Aileron;
  font-size: 2vh;
  background-color: transparent;


  scrollbar-color: white transparent; /* Pour Firefox */
  scrollbar-border-radius: 5px;

`;

function Overlay() {
  return (
    <Container>
        <Overlayimage src={Champion}></Overlayimage>
        <Overlaymargin>
        <Overlayname>A x e l <br /> <br /> C l e r g e t </Overlayname>
        <Overlaydata1>28 Février 1987 (37 ans)</Overlaydata1>
        <Overlaydata2>
        Catégorie :  - 90 Kg <br /> <br />

Récompenses : Or ( 2020)
Champion du monde par équipes <br /> <br />

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue lacus viverra vitae congue eu. Mauris vitae ultricies leo integer. Tincidunt lobortis feugiat vivamus at augue. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. <br /> <br />

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue lacus viverra vitae congue eu. Mauris vitae ultricies leo integer. Tincidunt lobortis feugiat vivamus at augue. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. <br /> <br />

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue lacus viverra vitae congue eu. Mauris vitae ultricies leo integer. Tincidunt lobortis feugiat vivamus at augue. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. <br /> <br />

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue lacus viverra vitae congue eu. Mauris vitae ultricies leo integer. Tincidunt lobortis feugiat vivamus at augue. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus.
<br /><br /> 

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue lacus viverra vitae congue eu. Mauris vitae ultricies leo integer. Tincidunt lobortis feugiat vivamus at augue. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. 

</Overlaydata2>
        </Overlaymargin>
    </Container>
  );
}

export default Overlay;
