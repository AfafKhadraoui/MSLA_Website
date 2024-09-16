import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BlueButtom.css";

function Buttom() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="Buttom_container">
      <div className="buttom_head">
        <ul className="links">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Home
            </Link>
            <i className="fa fa-home"></i>
          </li>
          <li className="nav__item">
            <Link to="/products" className="nav__link">
              Clothing
            </Link>
            <i className="fa fa-suitcase"></i>
          </li>
          <li className="nav__item">
            <Link to="/about-us" className="nav__link">
              About Us
            </Link>
            <i className="fa fa-info-circle"></i>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link">
              Contact Us
            </Link>
            <i className="fa fa-envelope"></i>
          </li>
        </ul>

        <ul className="info">
          <li className="info_title">Email</li>
          <li className="info_content">
            <a href="https://mail.google.com/mail/u/0/" target="_blank" rel="noopener noreferrer">
              MSLAwebsite@gmail.com
            </a>
          </li>
          <li className="info_title">Phone Number</li>
          <li className="info_content">+213 773 642 559</li>
          <li className="info_title">Address</li>
          <li className="info_content">144 Meyer St, Germiston, 1400 Johannesburg</li>
          <li className="info_title">Members</li>
          <li className="info_content">Malak | Seine | Lina | Afaf</li>
        </ul>

        <ul className="Store_hours">
          <li>
            <h3 className="stor_hours_title">Store Hours</h3>
          </li>
          <li className="Store_hours_details">
            <p>Mon-Fri</p>
            <p>9:00-18:00</p>
          </li>
          <li className="Store_hours_details">
            <p>Saturdays</p>
            <p>10:00-14:00</p>
          </li>
          <li className="Store_hours_details">
            <p>Sundays</p>
            <p>Closed</p>
          </li>
          <li className="Store_hours_details">
            <p>Holidays</p>
            <p>Closed</p>
          </li>
        </ul>

        <div className="logo">
          <h2>MSLA</h2>
          <div className="media">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.snapchat.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-snapchat"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="buttom_foot">
        <ul>
          <li>
            <a href="https://jumpseller.com/learn/sample-terms-and-conditions/" target="_blank" rel="noopener noreferrer">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="https://www.freeprivacypolicy.com/blog/privacy-policy-ecommerce-stores/" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://www.google.com/aclk?sa=l&ai=DChcSEwjF4LuvlY6IAxUpU0ECHdbVD8AYABAAGgJ3cw&ae=2&co=1&gclid=CjwKCAjwiaa2BhAiEiwAQBgyHqCywp2x5BwfVI-0Gg1nmXqCJGtd13byshC0Hj12hE73LMCSwCtC5hoC69MQAvD_BwE&sig=AOD64_24waPGNRmfE8SBOyw1uyaNjEDI7g&q&adurl&ved=2ahUKEwi0ibWvlY6IAxXmdqQEHZRADPUQ0Qx6BAgNEAE" target="_blank" rel="noopener noreferrer">
              Cookie Policy
            </a>
          </li>
          <li className="year">
            ©{currentYear} All rights reserved. Germiston Vintage Clothing
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Buttom;
