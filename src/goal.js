Mon App.js : 
import Spline from '@splinetool/react-spline';
import logo from './logo.svg';
import './App.css';
import Page1 from './page/page1';
import Page2 from './page/page2';
import Page3 from './page/page3';
import GrandPage from './page/grandepage'
import GrandPage2 from './page/grandepage2'

export default function App() {
  return (
    <div className="App">
      <GrandPage/>
      <GrandPage2/>
      {/* <Page1 /> */}
      {/* <Page2 /> */}
      {/* <Page3 /> */}
    </div>
  );
}

Mon grandepage.jsx : 
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
  overflow: hidden;
`;


function GrandePage() {
  return (
    <Background>
    </Background>
  );
}

export default GrandePage;

Grandepage2
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: blue;
  overflow: hidden;
`;


function GrandePage2() {
  return (
    <Background>
    </Background>
  );
}

export default GrandePage2;

- Objectifs : 
Faire que lors d'un scroll vers le bas, la page2 caché par la 1 s'affiche