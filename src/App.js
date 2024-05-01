import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Francejudo from './asset/FranceJudo.ttf';
import logo from './logo.svg';
import Header from './asset/header';
import Cookie from './asset/cookie';
import PageHistoire from './page/pagehistoire';
import Overlay from './page/overlay';
import Overlaycopy from './page/overlaycopy';
import Stackimage from './asset/stackimage';
import Champion from './page/champion';
import PageRecompense from './page/pagerecompense';
import PageChampion from './page/pagechampion';
import PageGeneration from './page/pagegeneration';
import PageDates from './page/pagedates';
import Carouselle from './page/carouselle';
import Footer from './asset/footer';
import Frame from './asset/frame';
import Championlist from './asset/ChampionsList';
import ChampionCard from './asset/ChampionCard';
import MainView from './backoffice';
import LoginScreen from './loginScreen';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'FranceJudo';
    src: url(${Francejudo}) format('truetype');
    font-display: swap;
  }

  body {
    font-family: 'FranceJudo', sans-serif;
    margin: 0;
  }
`;

export default function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const handleAcceptCookies = () => {
    setShowCookieBanner(false);
  };

  const handleRejectCookies = () => {
    setShowCookieBanner(false);
  };

  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/backoffice" element={<MainView />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
        
       
   
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <PageHistoire />
      <PageChampion />
      <PageRecompense />
      <PageGeneration />
      <PageDates />
      <Footer />
    </>
  );
}
