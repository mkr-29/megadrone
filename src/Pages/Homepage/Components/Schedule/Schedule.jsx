import React, { useEffect } from "react";
import Clock from "./assets/Clock.svg";
import Location from "./assets/venue.svg";
import Layer from "./assets/card.png";
import "./Schedule.css";

export default function Schedule() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show-cards");
        } else {
          entry.target.classList.remove("show-cards");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".cards");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

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
            <image xlinkHref={Layer} mask="url(#svgmask)"></image>

            <text x="12%" y="0%" id="text">
              Day 1
            </text>
            <text x="16%" y="43%" id="text" className="subhead-sch">
              Introduction to FPV Drones
            </text>
            <text x="13%" y="50%" id="text" className="subhead-sch">
              and Basics of Components
            </text>
            <g id="sub-text">
              <image href={Clock} x="15%" y="51.5%" width="40" height="40" />
              <text x="25%" y="60%" class="sub-text">
                17:00 - 19:30
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
              Day 2
            </text>
            <text x="25%" y="43%" id="text" className="subhead-sch">
              Electronics and FPV
            </text>
            <text x="33%" y="50%" id="text" className="subhead-sch">
              Equipments
            </text>
            <g id="sub-text">
              <image href={Clock} x="15%" y="51.5%" width="40" height="40" />
              <text x="25%" y="60%" class="sub-text">
                17:00 - 19:30
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
            <text x="26%" y="43%" id="text" className="subhead-sch">
              Final Assembly and
            </text>
            <text x="30%" y="50%" id="text" className="subhead-sch">
              FPV Equipment
            </text>
            <g id="sub-text">
              <image href={Clock} x="15%" y="51.5%" width="40" height="40" />
              <text x="25%" y="60%" class="sub-text">
                17:00 - 19:30
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
