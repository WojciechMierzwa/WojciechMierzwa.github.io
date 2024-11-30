import React from 'react';
import CharacterCard from '../components/CharacterCard';

function Zad1() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Karty Postaci - Valorant</h1>
      <div className="flex flex-wrap">
        {}
        <CharacterCard 
          name="Jett"
          role="Duelist"
          image="https://img.redbull.com/images/c_crop,x_231,y_0,h_675,w_506/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2020/9/28/wgotviw3gjqzyj2u6ql2/jett-valorant"
        />
        <CharacterCard 
          name="Sage"
          role="Sentinel"
          image="https://i.pinimg.com/1200x/44/fc/18/44fc18211bb99bb7817ba297c29c1ef1.jpg"
        />
        <CharacterCard 
          name="Phoenix"
          role="Duelist"
          image="https://valoranttracker.org/images/agents/phoenix/phoenix.png"
        />
      </div>
    </div>
  );
}

export default Zad1;
