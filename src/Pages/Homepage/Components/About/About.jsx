import React from "react";
import "./About.css";
import Treads from "./Assets/treads.png";
import RoboPoster from "./Assets/poster.png";

export default function About() {
  return (
    <div id="about">
      <div id="tread-image">
        <img src={Treads} className="treads" alt="" />
        <img src={Treads} className="treads" id="tread-2" alt="" />
      </div>
      <p id="about-text">About</p>
      <img src={RoboPoster} className="robo-poster" alt="" />
      <div className="about-text">
        <p id="upper-text">
          Welcome to Robotrix: A 3-Day Workshop on Robotics and Robo Race!
        </p>
        <p id="lower-text">
          Are you fascinated by the world of robotics and eager to dive into its
          intricate workings? Look no further! Join us for a thrilling and
          immersive experience at Robotrix, a 3-day workshop that will introduce
          you to the exciting realm of robotics and culminate in an
          adrenaline-pumping robo race.
        </p>
      </div>
    </div>
  );
}
