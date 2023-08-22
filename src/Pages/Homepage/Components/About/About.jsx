import React from "react";
import "./About.css";
import Treads from "./Assets/treads.png";
import RoboPoster from "./Assets/poster.png";

export default function About() {
  return (
    <div id="about">
      <div id="tread-image">
        {/* <img src={Treads} className="treads" alt="" /> */}
        {/* <img src={Treads} className="treads" id="tread-2" alt="" /> */}
      </div>
      <p id="about-text">About</p>
      <img src={RoboPoster} className="robo-poster" alt="" />
      <div className="about-text">
        <p id="upper-text">
          Welcome to Megadrone: A 3-Day Workshop on Drone Making!
        </p>
        <p id="lower-text">
          The MegaDrone workshop, organized by IEEE JUIT-SB, is a three-day
          immersive event focused on teaching participants the art of assembling
          FPV (First Person View) drones. Through hands-on sessions and expert
          guidance, attendees will have the opportunity to learn the intricacies
          of building their own drones from scratch. This workshop aims to
          provide a comprehensive understanding of the various components
          involved in drone construction, such as motors, flight controllers,
          ESCs (Electronic Speed Controllers), frames, and FPV equipment.
        </p>
      </div>
    </div>
  );
}
