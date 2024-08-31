import React, { useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

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
        <Link to="#" className="nav__brand">
          online shop
        </Link>
        <ul className={active}>
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>

          <li className="nav__item">
            <Link to="#" className="nav__link">
              Clothing
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link">
              About Us
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link">
              Contact Us
            </Link>
          </li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Navbar;
