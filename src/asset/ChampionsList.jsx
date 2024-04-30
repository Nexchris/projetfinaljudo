import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ChampionCard from './ChampionCard';

export default function ChampionsList() {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const firestore = getFirestore();
        const championsSnapshot = await getDocs(collection(firestore, "champions"));
        const championsData = championsSnapshot.docs.map(doc => doc.data());
        setChampions(championsData);
      } catch (error) {
        console.error("Error fetching champions:", error);
      }
    };

    fetchChampions();
  }, []);

  return (
    <Carousel>
      {champions.map((champion, index) => (
        <div key={index}>
          <ChampionCard champion={champion} />
        </div>
      ))}
    </Carousel>
  );
}
