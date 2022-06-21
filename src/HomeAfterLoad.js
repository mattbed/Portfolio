import './HomeAfterLoad.css';
import HomeTransition from './HomeTransition';
import HomeImage from './portfolio.png';
import React from "react";

function HomeAfterLoad() {
  const [counter, setCounter] = React.useState(true);
  const updateCounter = function() {
    setCounter(false);
  }
  window.onload = function() {
    setTimeout(updateCounter, 1000);
  };

  return (
    <div className="outer-box">
      {(counter ? <HomeTransition /> : 
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
      </main>)}
    </div>
  );
}

export default HomeAfterLoad;
