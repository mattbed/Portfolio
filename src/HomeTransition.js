import './HomeTransition.css';
import HomeImage from './portfolio.png';
import React from "react";

function HomeTransition() {
   return (
    <div className="outer-box">
      <main className="transform-box">
        <img src={HomeImage} className="width-fit-transform" alt=""/>
      </main>
    </div>
  );
}

export default HomeTransition;
