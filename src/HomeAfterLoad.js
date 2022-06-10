import './HomeAfterLoad.css';
import HomeImage from './portfolio.png';
import React from "react";

function HomeAfterLoad() {
  return (
    <div className="outer-box">
      <main className="inner-box02">
        <div className="home-box">
          <img src={HomeImage} class="width-fit" />
        </div>
        <div className="menu-box">
          <div className="menu-box-item">
            {/* <About /> */}
          </div>
          <div className="menu-box-item">
            {/* <Contact /> */}
          </div>
          <div className="menu-box-item">
            {/* <Portfolio /> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomeAfterLoad;
