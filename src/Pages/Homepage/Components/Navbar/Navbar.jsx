import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import IEEELogo from "./Assets/ieeelogo.png";
import { Cross as Hamburger } from "hamburger-react";
import { animateScroll as scroll } from "react-scroll";
import { Link as LNK } from "react-scroll";

function Navbar() {
  const [header, setHeader] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  const onClickHeader = () => {
    setIsOpen1(!isOpen1);
  };

  const closeNavbar = () => {
    setOpen(false);
    setIsOpen1(false); // Close the mobile menu when a link is clicked
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div className={header ? "header active" : "header"}>
      <div
        className={`header-wrapper ${isOpen1 ? "header-wrapper active" : ""} `}
      >
        <NavLink to="/" className="header-logojyc">
          <img onClick={"/"} className="header-logo" src={IEEELogo} />
        </NavLink>

        <div onClick={onClickHeader} className="menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        <div className={`nav-items ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link
                onClick={() => {
                  scroll.scrollToTop();
                  closeNavbar();
                }}
                to="/"
              >
                HOME
              </Link>
            </li>
            <li>
              <LNK
                onClick={closeNavbar}
                to="about"
                spy={true}
                smooth={true}
                offset={-30}
                duration={1000}
              >
                ABOUT
              </LNK>
            </li>
            <li>
              <LNK
                onClick={closeNavbar}
                to="schedule"
                spy={true}
                smooth={true}
                offset={-0}
                duration={1000}
              >
                SCHEDULE
              </LNK>
            </li>
            <li>
              <LNK
                onClick={closeNavbar}
                to="register-sec"
                spy={true}
                smooth={true}
                offset={-30}
                duration={1000}
                id="nav-register"
              >
                REGISTRATION
              </LNK>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
