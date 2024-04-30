// Overlay.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getFirestore, collection, getDoc, doc } from "firebase/firestore";

const Container = styled.div`
  background-color: #0A094B;
  background-size: cover; 
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  text-align: left;
`;

const Backgroundimage = styled.div`
  background-size: cover; 
  width: 100%;
  height: 100vh;
  position: absolute;
  opacity: 0.5;
`;

const Overlayimage = styled.img`
  position: absolute;
  height: 107%;
  left: 5%;
  overflow: hidden;
  animation: slideInLeft 1s;
`;

const Overlayname = styled.div`
  color: white;
  font-size: 7vh;
  margin-bottom: 2%;
`;

const Overlaydata1 = styled.div`
  font-family: Aileron;
  font-size: 2.5vh;
  margin-left: 10%;
  margin-bottom: 8%;
  color: rgba(255, 255, 255, 0.60);
`;

const Overlaymargin = styled.div`
  margin-top: 5%;
  margin-left: 60%;
  animation: zoomIn 1s;
`;

const Overlaydata2 = styled.div`
  color: white;
  height: 55vh;
  width: 50vh;
  overflow-y: auto;
  font-family: Aileron;
  font-size: 2vh;
  background-color: transparent;
`;

function Overlay({ athleteId }) {
  const [athleteData, setAthleteData] = useState(null);

  useEffect(() => {
    if (athleteId) {
      const fetchAthleteData = async () => {
        const firestore = getFirestore();
        const athleteDoc = await getDoc(doc(firestore, "champions", athleteId));
        if (athleteDoc.exists()) {
          setAthleteData(athleteDoc.data());
        } else {
          console.log("Aucun document trouvé pour cet ID d'athlète");
        }
      };

      fetchAthleteData();
    }
  }, [athleteId]);

  return (
    <Container>
      <Backgroundimage />
      {athleteData && (
        <Overlayimage src={athleteData.urlo} />
      )}
      <Overlaymargin>
        <Overlayname>
        {athleteData && (
  <>
    {athleteData.prenom} <br />
    <br />
    {athleteData.nom}
  </>
)}
        </Overlayname>
        <Overlaydata1>
        {athleteData && `${athleteData.age} `}
        </Overlaydata1>

        <Overlaydata2>
          {athleteData && (
            <>
              <h1>Catégorie : {athleteData.categorie} </h1>  
              Récompenses : {athleteData.recompenses} <br />
              {athleteData.description}
            </>
          )}
          <br /> <br />

{athleteData && `${athleteData.texte1} `}

<br /> <br />

{athleteData && `${athleteData.texte2} `}
<br /> <br />

{athleteData && `${athleteData.texte3} `}
<br /> <br />

{athleteData && `${athleteData.texte4} `}
<br /> <br />

{athleteData && `${athleteData.texte5} `}

        </Overlaydata2>
      </Overlaymargin>
    </Container>
  );
}

export default Overlay;
