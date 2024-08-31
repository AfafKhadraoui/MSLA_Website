import React , {useEffect,useState} from 'react';
import "./BlueButtom.css";
import Home from "../Pages/Home";
import aboutUs from "../Pages/AboutUs";
import contact from "../Pages/Contact";
import products from "../Pages/Product";
function Buttom() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the currentYear state whenever the component mounts or updates
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000); // Update every minute

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="Buttom_container">
      <div className="buttom_head">
        <ul className="links">
          <li className="nav__item">
            <a href={Home} className="nav__link">
              Home
            </a>
            <i class="fa fa-home"></i>
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
            <i class="fa fa-suitcase"></i>
          </li>
          <li className="nav__item">
            <a href={aboutUs} className="nav__link">
              About-Us
            </a>
            <i class="fa fa-info-circle"></i>
          </li>
          <li className="nav__item">
            <a href={contact} className="nav__link">
              Contact-Us
            </a>
            <i class="fa fa-envelope"></i>
          </li>
        </ul>
        <ul className="info">
          <li className="info_title">Email</li>
          <li className="info_content">
            <a href="https://mail.google.com/mail/u/0/">
              MSLAwebsite@gmail.com
            </a>
          </li>
          <li className="info_title">Phone Number</li>
          <li className="info_content">+213 773 642 559</li>
          <li className="info_title">Adrees</li>
          <li className="info_content">
            144 Meyer St, Germiston, 1400 Johannesburg
          </li>
          <li className="info_title">Members</li>
          <li className="info_content">Malak | Seine | Lina | Afaf</li>
          
        
        </ul>
        <ul className="Store_hours">
          <li><h3 className='stor_hours_title'>Store Hours</h3></li>
          <li className="Store_hours_details"><p>Mon-Fri</p><p> 9:00-18:00</p></li>
          <li className="Store_hours_details"><p>Saturdays</p> <p>10:00-14:00</p></li>
          <li className="Store_hours_details"><p>Sundays </p><p>Closed</p></li>
          <li className="Store_hours_details"><p>Holidays</p><p> closed</p></li>
        </ul>
        <div className="logo">
          <h2>MSLA</h2>
          <div className="media">
            <a href="https://www.facebook.com/" target="_blank">
              <i class="fa fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="https://www.snapchat.com/" target="_blank">
              <i class="fa fa-snapchat"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="buttom_foot">
        <ul>
          <li>
            
            <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwix38C8lI6IAxViVqQEHZYNIigQFnoECCcQAQ&url=https%3A%2F%2Fjumpseller.com%2Flearn%2Fsample-terms-and-conditions%2F&usg=AOvVaw1_-KIDMZyg0om51CbGp2zz&opi=89978449">
              Terms & Conditions
            </a>
          </li>
          <li>
            
            <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiYvc_6lI6IAxUATKQEHYeRA7QQFnoECBUQAQ&url=https%3A%2F%2Fwww.freeprivacypolicy.com%2Fblog%2Fprivacy-policy-ecommerce-stores%2F&usg=AOvVaw0LT6xtWi4uE6L_AcQ1ba70&opi=89978449">
              Privay Policy
            </a>
          </li>
          <li>
            
            <a href="https://www.google.com/aclk?sa=l&ai=DChcSEwjF4LuvlY6IAxUpU0ECHdbVD8AYABAAGgJ3cw&ae=2&co=1&gclid=CjwKCAjwiaa2BhAiEiwAQBgyHqCywp2x5BwfVI-0Gg1nmXqCJGtd13byshC0Hj12hE73LMCSwCtC5hoC69MQAvD_BwE&sig=AOD64_24waPGNRmfE8SBOyw1uyaNjEDI7g&q&adurl&ved=2ahUKEwi0ibWvlY6IAxXmdqQEHZRADPUQ0Qx6BAgNEAE">
             Cookie Policy
            </a>
          </li>
          <li className='year'>
          ©{currentYear} All rights reserved. Germiston Vintage Clothing
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Buttom;
