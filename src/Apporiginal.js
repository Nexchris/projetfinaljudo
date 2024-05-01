import React, { useState } from 'react';
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
import Mainview from './firebase/backoffice';
import LoginScreen from './firebase/loginScreen';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'FranceJudo';
    src: url(${Francejudo}) format('truetype');
    font-display: swap; /* Utilisez 'swap' pour afficher le texte avec une police de secours avant que la police principale ne soit téléchargée */
  }

  body {
    font-family: 'FranceJudo', sans-serif;
    margin: 0; /* Supprime la marge par défaut du corps */
  }
`;

export default function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const handleAcceptCookies = () => {
    // Mettre en œuvre la logique pour accepter les cookies ici
    setShowCookieBanner(false);
  };

  const handleRejectCookies = () => {
    // Mettre en œuvre la logique pour refuser les cookies ici
    setShowCookieBanner(false);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <PageHistoire />
      <PageChampion />
      <PageRecompense />
      <PageGeneration />
      <PageDates />
      <Footer />
      {showCookieBanner && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',

          textAlign: 'center',
        }}>
          <Cookie onAccept={handleAcceptCookies} onReject={handleRejectCookies} />
        </div>
      )}
    </div>
  );
}
