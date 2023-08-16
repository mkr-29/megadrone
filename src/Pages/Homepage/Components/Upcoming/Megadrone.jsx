import React from "react";
import "./Upcoming.css";
import MegadronePoster from "./Assets/megadrone.png";

export default function Megadrone() {
  return (
    <div className="upcoming-events">
      <h1>Upcoming Events</h1>
      <img src={MegadronePoster} alt="" />
    </div>
  );
}
