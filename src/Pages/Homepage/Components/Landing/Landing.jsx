import React from "react";
import "./Landing.css";
import car1 from "./assets/car-1.png";
import car2 from "./assets/car-2.png";

export default function Landing() {
  return (
    <div className="landing">
      <div className="front">
        <div className="links">
          <a className="link" href="https://www.instagram.com/ieeejuit/">
            Instagram
          </a>
          <a className="link" href="https://twitter.com/ieee_juit/">
            Twitter
          </a>
          <a className="link" href="https://www.linkedin.com/in/ieeejuitsb/">
            LinkedIn
          </a>
        </div>
        <div className="title">
          <h1 id="hero-text">MEGADRONE</h1>
          <h2 id="hero-subtext">
            Transform your creativity into reality at <br />
            MegaDrone: The Ultimate Transformer-Themed Drone Making Event!
          </h2>
        </div>
      </div>
      <div className="cars">
        {/* <span>A</span> */}
        {/* <span>B</span> */}
        {/* <img id="img-1" className="car" src={car1} alt="car-1"></img> */}
        {/* <img id="img-2" className="car" src={car2} alt="car-2"></img> */}
      </div>
    </div>
  );
}
