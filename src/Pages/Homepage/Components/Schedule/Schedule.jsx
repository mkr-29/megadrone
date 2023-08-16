import React from "react";
import Clock from "./assets/Clock.svg";
import Location from "./assets/venue.svg";
import Layer from "./assets/layer.png";
import "./Schedule.css";

export default function Schedule() {
  return (
    <section class="cards-container" id="schedule">
      <div class="cards-outer">
        <h1>Schedule</h1>
        <div class="cards-inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 443 385"
            class="cards"
          >
            <mask id="svgmask">
              <path
                d="M85.5147 48.3018C121.974 -25.8823 442.181 7.48161 442.181 7.48161C442.181 7.48161 386.911 271.802 339.509 342.302C292.107 412.802 9.61989 371.982 0.89696 376.482C-7.82597 380.982 49.0554 122.486 85.5147 48.3018Z"
                fill="white"
              />
            </mask>
            <image
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xlinkHref={Layer}
              mask="url(#svgmask)"
            ></image>

            <text x="20%" y="0%" id="text">
              DAY 1
            </text>
            <text x="20%" y="45%" id="text" className="subhead-sch">
              Introduction to Robotics
            </text>
            <g id="sub-text">
              <image href={Clock} x="15%" y="51.5%" width="40" height="40" />
              <text x="25%" y="60%" class="sub-text">
                17:30 - 19:30
              </text>
              <image href={Location} x="28%" y="70.5%" width="40" height="40" />
              <text x="40%" y="80%" class="sub-text">
                CL5
              </text>
            </g>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 443 385"
            class="cards"
          >
            <mask id="svgmask">
              <path
                d="M85.5147 48.3018C121.974 -25.8823 442.181 7.48161 442.181 7.48161C442.181 7.48161 386.911 271.802 339.509 342.302C292.107 412.802 9.61989 371.982 0.89696 376.482C-7.82597 380.982 49.0554 122.486 85.5147 48.3018Z"
                fill="white"
              />
            </mask>
            <image
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xlinkHref={Layer}
              mask="url(#svgmask)"
            ></image>

            <text x="20%" y="0%" id="text">
              Day 2
            </text>
            <text x="20%" y="45%" id="text" className="subhead-sch">
              Building & Programming
            </text>
            <g id="sub-text">
              <image href={Clock} x="15%" y="51.5%" width="40" height="40" />
              <text x="25%" y="60%" class="sub-text">
                17:30 - 19:30
              </text>
              <image href={Location} x="28%" y="70.5%" width="40" height="40" />
              <text x="40%" y="80%" class="sub-text">
                CL5
              </text>
            </g>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 443 385"
            class="cards"
          >
            <mask id="svgmask">
              <path
                d="M85.5147 48.3018C121.974 -25.8823 442.181 7.48161 442.181 7.48161C442.181 7.48161 386.911 271.802 339.509 342.302C292.107 412.802 9.61989 371.982 0.89696 376.482C-7.82597 380.982 49.0554 122.486 85.5147 48.3018Z"
                fill="white"
              />
            </mask>
            <image
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xlinkHref={Layer}
              mask="url(#svgmask)"
            ></image>

            <text x="12%" y="0%" id="text">
              Day 3
            </text>
            <text
              x="20%"
              y="45%"
              id="text"
              className="subhead-sch subhead-sch-l"
            >
              Robo Grand Prix
            </text>
            <g id="sub-text">
              <image href={Clock} x="15%" y="51.5%" width="40" height="40" />
              <text x="25%" y="60%" class="sub-text">
                17:30 - 19:30
              </text>
              <image href={Location} x="28%" y="70.5%" width="40" height="40" />
              <text x="40%" y="80%" class="sub-text">
                CL5
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
