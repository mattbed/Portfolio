import './HomeAfterLoad.css';
import HomeTransition from './HomeTransition';
import HomeImage from './portfolio.png';
import React from "react";

function HomeAfterLoad() {
  const [counter1, setCounter1] = React.useState(true);
  const updateCounter1 = function() {
    setCounter1(false);
  }
  setTimeout(updateCounter1, 300);

  return (
    <div className="outer-box">
      {(counter1 ? <HomeTransition /> : 
      <main className="inner-box02">
        <div className="home-box">
          <img src={HomeImage} className="width-fit" alt=""/>
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
