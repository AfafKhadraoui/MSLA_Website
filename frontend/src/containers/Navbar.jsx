import React, { useState } from "react";
import "./Navbar.css";
import Home from "../Pages/Home";
import aboutUs from "../Pages/AboutUs";
import contact from "../Pages/Contact";
import products from "../Pages/Product";
import { Outlet } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  return (
    //nav.nav
    <>
      <nav className="nav">
        <a href={Home} className="nav__brand">
          online shop
        </a>
        <ul className={active}>
          <li className="nav__item">
            <a href={Home} className="nav__link">
              Home
            </a>
          </li>
          {/* <li className="nav_item">
          <a href="#" className="nav_link">
            New Arrivals
          </a>
        </li> */}
          <li className="nav__item">
            <a href={products} className="nav__link">
              Clothing
            </a>
          </li>
          <li className="nav__item">
            <a href={aboutUs} className="nav__link">
              {/* serine use links instead of href */}
              About Us
            </a>
          </li>
          <li className="nav__item">
            <a href={contact} className="nav__link">
              Contact Us
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <main>
        <Outlet/>
      </main>
    </>
  );
}
export default Navbar;
