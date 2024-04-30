import React from 'react';

export default function ChampionCard({ champion }) {
  return (
    <div className="champion-card">
      <img src={champion.url}  />
    </div>
  );
}