import React, { useState } from 'react';
import styled from 'styled-components';

const CookieBannerWrapper = styled.div`
  background-color: #0A0095;
  padding: 10px;
  position: sticky;
  width: 20%;
  height: 10vh;
  opacity: ${props => props.show ? 1 : 0}; /* Utilisation de la propriété show pour contrôler l'opacité */
  transition: opacity 0.5s ease; /* Ajout de la transition */
  left: ${props => props.show ? '40%' : '40%'}; /* Ajustement de la propriété left */
  z-index:9999;
`;

const Message = styled.p`
  color: white;
  font-size:1.9vh;
  margin-top:1vh;
  margin-bottom:1vh;
  font-family: 'Aileron';
`;

const Button = styled.button`
  background-color: #00488e;
  color: white;
  margin-right: 10px;
  width:15vh;
`;

const CookieBanner = () => {
  const [accepted, setAccepted] = useState(false);
  const [showBanner, setShowBanner] = useState(true); // Ajout de l'état pour contrôler l'affichage du CookieBanner

  const acceptCookies = () => {
    // Ici, vous pouvez ajouter la logique pour accepter les cookies, par exemple, en définissant un cookie.
    // Exemple : document.cookie = "cookiesAccepted=true";
    setAccepted(true);
    setShowBanner(false); // Cacher le CookieBanner après avoir accepté les cookies
    console.log("Cookie acceptés")
  };

  const refuseCookies = () => {
    // Ici, vous pouvez ajouter la logique pour refuser les cookies.
    setAccepted(true); // Pour cet exemple, même si l'utilisateur refuse les cookies, nous considérons qu'il a pris une décision et cachons le message.
    setShowBanner(false); // Cacher le CookieBanner après avoir refusé les cookies
    console.log("Cookie refusés")
  };

  return (
    <>
      <CookieBannerWrapper show={showBanner}>
        <Message>
          Ce site utilise des cookies pour ameliorer votre experience. Acceptez-vous l'utilisation des cookies ?
        </Message>
        <div className="cookie-buttons">
          <Button onClick={acceptCookies}>Accepter</Button>
          <Button onClick={refuseCookies}>Refuser</Button>
        </div>
      </CookieBannerWrapper>
    </>
  );
};

export default CookieBanner;
