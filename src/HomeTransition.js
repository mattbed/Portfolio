import './HomeTransition.css';
import HomeImage from './portfolio.png';
import React from "react";

function HomeTransition() {
   return (
    <div className="outer-box">
      <main className="transform-box">
        <img src={HomeImage} class="width-fit-transform" />
      </main>
    </div>
  );
}

export default HomeTransition;
