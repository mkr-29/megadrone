import React from "react";
import "./footer.css";
import sight from "./assets/sight.png";
import ieee from "./assets/ieee.png";
import wie from "./assets/wie.png";
import instagram from "./assets/_Instagram.png";
import facebook from "./assets/_Facebook.png";
import youtube from "./assets/_YouTube.png";
import twitter from "./assets/_Twitter.png";
import linkedIn from "./assets/_Linkedin.png";
import mapImage from "./assets/image1.png";

const GoogleMap = () => {
  const iframe = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6838.721502956748!2d77.06981107804252!3d31.016197216448482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057db24364e085%3A0x4f4fefd65caa0317!2sJaypee%20University%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1692046409003!5m2!1sen!2sin"
      width="600"
      height="360"
      style={{ border: 0 }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
  return <div>{iframe}</div>;
};
export default function Footer() {
  return (
    <div id="Footer">
      <div id="logos">
        <img className="logo" src={sight} alt="IEEE_sight" />
        <img className="logo" src={ieee} alt="IEEE_juit" />
        <img className="logo" src={wie} alt="IEEE_wie" />
      </div>
      <div id="info">
        <div id="links">
          <a href="https://www.youtube.com/channel/UC2hmu28LJLJqGnXj3TZwADg">
            <img src={youtube} alt="youtube" />
          </a>
          <a href="https://www.facebook.com/ieeejuitsb/">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://www.linkedin.com/in/ieeejuitsb/">
            <img src={linkedIn} alt="linkedIn" />
          </a>
          <a href="https://www.instagram.com/ieeejuit/">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://twitter.com/ieee_juit/">
            <img src={twitter} alt="twitter" />
          </a>
        </div>
        <div id="contact">
          <a href="https://ieeejuit.co.in/">https://ieeejuit.co.in/</a>
          <a href="https://ieee.juit@juitsolan.in">ieee.juit@juitsolan.in</a>
          <a href="+91 7082787975">+91 7082787975</a>
        </div>
        <div id="quickLinks">
          <h3>Quick Links</h3>
          <a href="">IEEE JUIT SB</a>
          <a href="">IEEE JUIT SB WIE</a>
          <a href="">IEEE JUIT SB SIGHT</a>
        </div>
        <div id="mapImage">
          <GoogleMap />
        </div>
      </div>
      <p id="copyright">COPYRIGHT @IEEE JUIT-SB</p>
    </div>
  );
}
