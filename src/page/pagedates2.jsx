import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ff5a01;
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
  margin-bottom: 5%;
`;

const Title1 = styled.div`
  margin-left: 53%;
  margin-top: 1%;
`;

const Dotcontainer = styled.div``;

const Dot = styled.div`
  width: 3vh;
  height: 3vh;
  background-color: white;
  border-radius: 50%;
  margin-bottom: 4vh;
  margin-left: 10%;
  margin-top: 3vh;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

const Dot1 = styled(Dot)``;
const Dot2 = styled(Dot)``;
const Dot3 = styled(Dot)``;
const Dot4 = styled(Dot)``;
const Dot5 = styled(Dot)``;
const Dot6 = styled(Dot)``;
const Dot7 = styled(Dot)``;
const Dot8 = styled(Dot)``;
const Dot9 = styled(Dot)``;
const Dot10 = styled(Dot)``;
const Dot11 = styled(Dot)``;

const Triangle = styled.div`
top: 16%;
  left: 13.5%;
  width: 0;
  height: 0;
  border-left: 3vh solid transparent;
  border-right: 3vh solid transparent;
  border-bottom: 6vh solid #E45000;
  transform: rotate(270deg);
  position: absolute;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transition: opacity 0.5s ease;
`;

const Triangle1 = styled(Triangle)``;
const Triangle2 = styled(Triangle)`
  top: 23%;
`;
const Triangle3 = styled(Triangle)`
  top: 30%;
`;
const Triangle4 = styled(Triangle)`
  top: 37%;
`;
const Triangle5 = styled(Triangle)`
  top: 45%;
`;
const Triangle6 = styled(Triangle)`
  top: calc(45% + 7%);
`;
const Triangle7 = styled(Triangle)`
  top: calc(52% + 7%);
`;
const Triangle8 = styled(Triangle)`
  top: calc(59% + 7%);
`;
const Triangle9 = styled(Triangle)`
  top: calc(66% + 7%);
`;
const Triangle10 = styled(Triangle)`
  top: calc(73% + 7%);
`;
const Triangle11 = styled(Triangle)`
  top: calc(80% + 7%);
`;


const Text = styled.div`
  color: white;
  font-size: 20px;
  margin-top: 10px;
`;

const DateContainer = styled.div`
background-color: #E45000;
border-radius: 4vh;
width: 80%;
height: 10vh;
color: white;
font-size: 4vh;
font-family: Inter;
position: absolute;
top: 14%;
left: 16%;
opacity: ${(props) => (props.isVisible ? '1' : '0')};
transition: opacity 0.5s ease;
`;

const DateContainer1 = styled(DateContainer)``;
const DateContainer2 = styled(DateContainer)`
  top: 21%;
`;
const DateContainer3 = styled(DateContainer)`
  top: 28%;
`;
const DateContainer4 = styled(DateContainer)`
  top: calc(28% + 7%);
`;
const DateContainer5 = styled(DateContainer)`
  top: calc(35% + 7%);
`;
const DateContainer6 = styled(DateContainer)`
  top: calc(42% + 7%);
`;
const DateContainer7 = styled(DateContainer)`
  top: calc(49% + 7%);
`;
const DateContainer8 = styled(DateContainer)`
  top: calc(56% + 7%);
`;
const DateContainer9 = styled(DateContainer)`
  top: calc(63% + 7%);
`;
const DateContainer10 = styled(DateContainer)`
  top: calc(70% + 7%);
`;
const DateContainer11 = styled(DateContainer)`
  top: calc(77% + 7%);
`;


function Dates() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);
  const [isVisible9, setIsVisible9] = useState(false);
  const [isVisible10, setIsVisible10] = useState(false);
  const [isVisible11, setIsVisible11] = useState(false);

  const toggleVisibility1 = () => {
    setIsVisible1(true);
    setIsVisible2(false);
    setIsVisible3(false);
    setIsVisible4(false);
    setIsVisible5(false);
    setIsVisible6(false);
    setIsVisible7(false);
    setIsVisible8(false);
    setIsVisible9(false);
    setIsVisible10(false);
    setIsVisible11(false);
  };

  const toggleVisibility2 = () => {
    setIsVisible1(false);
    setIsVisible2(true);
    setIsVisible3(false);
    setIsVisible4(false);
    setIsVisible5(false);
    setIsVisible6(false);
    setIsVisible7(false);
    setIsVisible8(false);
    setIsVisible9(false);
    setIsVisible10(false);
    setIsVisible11(false);
  };

  const toggleVisibility3 = () => {
    setIsVisible1(false);
    setIsVisible2(false);
    setIsVisible3(true);
    setIsVisible4(false);
    setIsVisible5(false);
    setIsVisible6(false);
    setIsVisible7(false);
    setIsVisible8(false);
    setIsVisible9(false);
    setIsVisible10(false);
    setIsVisible11(false);
  };

  const toggleVisibility4 = () => {
    setIsVisible1(false);
    setIsVisible2(false);
    setIsVisible3(false);
    setIsVisible4(true);
    setIsVisible5(false);
    setIsVisible6(false);
    setIsVisible7(false);
    setIsVisible8(false);
    setIsVisible9(false);
    setIsVisible10(false);
    setIsVisible11(false);
  };

  const toggleVisibility5 = () => {
    setIsVisible1(false);
    setIsVisible2(false);
    setIsVisible3(false);
    setIsVisible4(false);
    setIsVisible5(true);
    setIsVisible6(false);
    setIsVisible7(false);
    setIsVisible8(false);
    setIsVisible9(false);
    setIsVisible10(false);
    setIsVisible11(false);
  };

  const toggleVisibility6 = () => {
    setIsVisible1(false);
    setIsVisible2(false);
    setIsVisible3(false);
    setIsVisible4(false);
    setIsVisible5(false);
    setIsVisible6(true);
    setIsVisible7(false);
    setIsVisible8(false);
    setIsVisible9(false);
    setIsVisible10(false);
    setIsVisible11(false);
  };

  const toggleVisibility7 = () => {
    setIsVisible1(false);
    setIsVisible2(false);
    setIsVisible3(false);
    setIsVisible4(false);
    setIsVisible5(false);
    setIsVisible6(false);
    setIsVisible7(true);
    setIsVisible8(false);
    setIsVisible9(false);
    setIsVisible10(false);
    setIsVisible11(false);
  };

  const toggleVisibility8 = () => {
    setIsVisible1(false);
    setIsVisible2(false);
    setIsVisible3(false);
    setIsVisible4(false);
    setIsVisible5(false);
    setIsVisible6(false);
    setIsVisible7(false);
    setIsVisible8(true);
    setIsVisible9(false);
    setIsVisible10(false);
    setIsVisible11(false);
  };

  const toggleVisibility9 = () => {
    setIsVisible1(false);
    setIsVisible2(false);
    setIsVisible3(false);
    setIsVisible4(false);
    setIsVisible5(false);
    setIsVisible6(false);
    setIsVisible7(false);
    setIsVisible8(false);
    setIsVisible9(true);
    setIsVisible10(false);
    setIsVisible11(false);
  };

  const toggleVisibility10 = () => {
    setIsVisible1(false);
    setIsVisible2(false);
    setIsVisible3(false);
    setIsVisible4(false);
    setIsVisible5(false);
    setIsVisible6(false);
    setIsVisible7(false);
    setIsVisible8(false);
    setIsVisible9(false);
    setIsVisible10(true);
    setIsVisible11(false);
  };

  const toggleVisibility11 = () => {
    setIsVisible1(false);
    setIsVisible2(false);
    setIsVisible3(false);
    setIsVisible4(false);
    setIsVisible5(false);
    setIsVisible6(false);
    setIsVisible7(false);
    setIsVisible8(false);
    setIsVisible9(false);
    setIsVisible10(false);
    setIsVisible11(true);
  };

  return (
    <Container>
      <Titleflex>
        <Title1>Dates importantes</Title1>
      </Titleflex>
      <Dotcontainer>
        <Dot1 onClick={toggleVisibility1} />
        <Dot2 onClick={toggleVisibility2} />
        <Dot3 onClick={toggleVisibility3} />
        <Dot4 onClick={toggleVisibility4} />
        <Dot5 onClick={toggleVisibility5} />
        <Dot6 onClick={toggleVisibility6} />
        <Dot7 onClick={toggleVisibility7} />
        <Dot8 onClick={toggleVisibility8} />
        <Dot9 onClick={toggleVisibility9} />
        <Dot10 onClick={toggleVisibility10} />
        <Dot11 onClick={toggleVisibility11} />
      </Dotcontainer>
      {isVisible1 && (
        <>
          <Triangle1 isVisible={isVisible1} />
          <DateContainer1 isVisible={isVisible1}>
            <Text>Element 1</Text>
          </DateContainer1>
        </>
      )}
      {isVisible2 && (
        <>
          <Triangle2 isVisible={isVisible2} />
          <DateContainer2 isVisible={isVisible2}>
            <Text>Element 2</Text>
          </DateContainer2>
        </>
      )}
      {isVisible3 && (
        <>
          <Triangle3 isVisible={isVisible3} />
          <DateContainer3 isVisible={isVisible3}>
            <Text>Element 3</Text>
          </DateContainer3>
        </>
      )}
      {isVisible4 && (
        <>
          <Triangle4 isVisible={isVisible4} />
          <DateContainer4 isVisible={isVisible4}>
            <Text>Element 4</Text>
          </DateContainer4>
        </>
      )}
      {isVisible5 && (
        <>
          <Triangle5 isVisible={isVisible5} />
          <DateContainer5 isVisible={isVisible5}>
            <Text>Element 5</Text>
          </DateContainer5>
        </>
      )}
      {isVisible6 && (
        <>
          <Triangle6 isVisible={isVisible6} />
          <DateContainer6 isVisible={isVisible6}>
            <Text>Element 6</Text>
          </DateContainer6>
        </>
      )}
      {isVisible7 && (
        <>
          <Triangle7 isVisible={isVisible7} />
          <DateContainer7 isVisible={isVisible7}>
            <Text>Element 7</Text>
          </DateContainer7>
        </>
      )}
      {isVisible8 && (
        <>
          <Triangle8 isVisible={isVisible8} />
          <DateContainer8 isVisible={isVisible8}>
            <Text>Element 8</Text>
          </DateContainer8>
        </>
      )}
      {isVisible9 && (
        <>
          <Triangle9 isVisible={isVisible9} />
          <DateContainer9 isVisible={isVisible9}>
            <Text>Element 9</Text>
          </DateContainer9>
        </>
      )}
      {isVisible10 && (
        <>
          <Triangle10 isVisible={isVisible10} />
          <DateContainer10 isVisible={isVisible10}>
            <Text>Element 10</Text>
          </DateContainer10>
        </>
      )}
      {isVisible11 && (
        <>
          <Triangle11 isVisible={isVisible11} />
          <DateContainer11 isVisible={isVisible11}>
            <Text>Element 11</Text>
          </DateContainer11>
        </>
      )}
    </Container>
  );
}

export default Dates;
