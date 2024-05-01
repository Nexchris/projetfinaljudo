import React from 'react';
import styled from 'styled-components';
import Or from '../image/medaille/or.png';
import Argent from '../image/medaille/argent.png';
import Bronze from '../image/medaille/bronze.png';

const Background = styled.div`
  width: 100%;
  height: 170vh;
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

const Title2 = styled.div``;

const Golddiv = styled.div`
  overflow-x: auto; /* Utilisez overflow-x au lieu de overflow-y */
  white-space: nowrap; /* Évite le retour à la ligne des enfants */
  width: 35%; /* Prend toute la largeur du conteneur */
  margin-left:65vh;
  margin-bottom:2vh;
  scrollbar-width: thin; /* Réduit la largeur de la barre de défilement */
`;

const Athlete = styled.div`
  text-align: center;
  color: white;
  font-size: 2vh;
  font-family: 'Inter';
  font-weight: 400;
  word-wrap: break-word;
  margin-bottom: 20px;
  display: inline-block;
  margin-left:4vh;
`;

const Weigthtext = styled.div`
  color: white;
  margin-top:5vh;
  font-size:2vh;
`;

const Image = styled.div`
  margin-top:3vh;
  margin-bottom:5vh;
`;

function Pagerecompense() {
  return (
    <Background>
      <Titleflex>
        <Title1>Les</Title1>
        <Title2>Recompenses</Title2>
      </Titleflex>
      <div><Weigthtext> 10 Medailles d'or </Weigthtext> </div>
      <Image><img src={Or} alt="" /></Image>
      <Golddiv>
        <Athlete>Teddy Riner<br />(+100 kg):<br />2012, 2016, 2020</Athlete>
        <Athlete>David Douillet<br />(-90 kg):<br />1996, 2000</Athlete>
        <Athlete>Laure Pécout<br />(-72 kg):<br />1996</Athlete>
        <Athlete>Priscilla Gneto<br />(-52 kg):<br />2000</Athlete>
        <Athlete>Sandrine Aubert<br />(-63 kg):<br />2000</Athlete>
        <Athlete>Lucie Décosse<br />(-70 kg):<br />2012</Athlete>
        <Athlete>Clarisse Agbégnénou<br />(-63 kg):<br />2020</Athlete>
        <Athlete>Équipe mixte:<br />2021</Athlete>
      </Golddiv>
      <div><Weigthtext> 10 Medailles d'Argent </Weigthtext> </div>
      <Image><img src={Argent} alt="" /></Image>
      <Golddiv>
        <Athlete>Jean-Luc Rougé<br />(-70 kg):<br />1972</Athlete>
        <Athlete>Arnaud Messonnier<br />(-65 kg):<br />1984</Athlete>
        <Athlete>Annick Level<br />(-66 kg):<br />1992</Athlete>
        <Athlete>Djamel Bouras<br />(-81 kg):<br />1992</Athlete>
        <Athlete>Laure Pécout<br />(-72 kg):<br />1992</Athlete>
        <Athlete>Céline Lebrun<br />(-57 kg):<br />2004</Athlete>
        <Athlete>Stéphanie Possamaï<br />(-70 kg):<br />2008</Athlete>
        <Athlete>Teddy Riner<br />(+100 kg):<br />2008</Athlete>
        <Athlete>Clarisse Agbégnénou<br />(-63 kg):<br />2016</Athlete>
        <Athlete>Madeleine Malonga<br />(-78 kg):<br />2016</Athlete>
        <Athlete>Amandine Buchard<br />(-52 kg):<br />2020</Athlete>
        <Athlete>Luka Mkheidze<br />(-60 kg):<br />2020</Athlete>
        <Athlete>Romane Dicko<br />(+78 kg):<br />2020</Athlete>
      </Golddiv>
      <div><Weigthtext> 10 Medailles de Bronze </Weigthtext> </div>
      <Image><img src={Bronze} alt="" /></Image>
      <Golddiv>
        <Athlete>Margaux Pinot<br />(-70 kg):<br />2020</Athlete>
        <Athlete>Sarah Lévy<br />(-57 kg):<br />2020</Athlete>
        <Athlete>Teddy Riner<br />(+100 kg):<br />2020</Athlete>
        <Athlete>Audrey Tautou<br />(-63 kg):<br />2004</Athlete>
        <Athlete>Marie-France Collard<br />(-48 kg):<br />1964</Athlete>
        <Athlete>Antoine Blachon<br />(-80 kg):<br />1964</Athlete>
        <Athlete>Jean-Luc Rougé<br />(-70 kg):<br />1976</Athlete>
        <Athlete>Patrick Vial<br />(-78 kg):<br />1980</Athlete>
        <Athlete>Annick Level<br />(-66 kg):<br />1980</Athlete>
        <Athlete>Véronique Genest<br />(-52 kg):<br />1984</Athlete>
        <Athlete>Cathy Fleury<br />(-66 kg):<br />1992</Athlete>
        <Athlete>Ghislaine Girard<br />(-61 kg):<br />1996</Athlete>
        <Athlete>David Douillet<br />(+100 kg):<br />1992</Athlete>
      </Golddiv>
    </Background>
  );
}

export default Pagerecompense;
