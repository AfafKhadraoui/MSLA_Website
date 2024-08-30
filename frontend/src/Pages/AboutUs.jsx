import "./CSS/AboutUs.css";
import SearchBar from "../containers/SearchBar";
import Buttom from "../containers/BlueButtom.jsx";
import pic1 from "../components/Assets/AboutUsPics/pic1.jpg";
import pic2 from "../components/Assets/AboutUsPics/pic2.webp";
import pic3 from "../components/Assets/AboutUsPics/pic3.jpg";
import pic4 from "../components/Assets/AboutUsPics/pic4.jpeg";
import pic5 from "../components/Assets/AboutUsPics/pic5.jpg";
import pic6 from "../components/Assets/AboutUsPics/pic6.jpeg";
import pic7 from "../components/Assets/AboutUsPics/pic7.jpg";

import line from "../components/Assets/AboutUsPics/pink_line.png";
function AboutUs() {
  return (
    
    <center>
        <SearchBar/>
         <img className="pink_line" src={line} alt="background pink line"/>
      <div className="AboutUs_container">

        
       
        <p className="title">About MSLA</p>
        <p className="AboutUs_paragraph">
          <b>MSLA</b> is your go-to destination for stylish and affordable
          clothing for the entire family. We believe that everyone deserves to
          look and feel their best, no matter their age or gender.
        </p>
        <img className="image" src={pic1} alt="family modeling" width="75%" height="300px" />
        <p className="AboutUs_paragraph">
          <b> Women's Fashion:</b>
          <br />
          Discover a world of fashion possibilities at MSLA. Our women's
          collection features a wide range of styles, from trendy casual wear to
          elegant evening gowns. Find your perfect fit with our extensive size
          options and diverse selection of brands and designers.
        </p>
        <img className="image"src={pic4} alt="women modeling" width="75%" height="300px" />
        <p className="AboutUs_paragraph">
          <b> Men's Fashion:</b>
          <br />
          Elevate your wardrobe with MSLA's curated collection of men's fashion.
          From timeless classics to modern essentials, we have something for
          every style. Explore our selection of shirts, pants, jackets, and
          accessories to express your individuality.
        </p>
        <img className="image" src={pic3} alt="men modeling" width="75%" height="300px" />
        <p className="AboutUs_paragraph">
          <b> Kids' Fashion:</b>
          <br />
          Dress your little ones in adorable and comfortable outfits from MSLA.
          Our kids' collection features age-appropriate styles for boys and
          girls, including playful prints, vibrant colors, and durable
          materials. Let your children express their unique personalities
          through their clothing choices.
        </p>
        <img className="image" src={pic2} alt="kids modeling" width="75%" height="300px" />
        <p className="AboutUs_paragraph">
          <b> Our Commitment to Diversity and Inclusion:</b>
          <br />
          At MSLA, we're committed to creating a more inclusive and equitable
          fashion industry. We offer our MSLA Brands in a wide range of sizes
          for women, men, and children, ensuring that everyone can find their
          perfect fit. We also work with a diverse group of models to represent
          our audience and promote a healthy body image.
        </p>
        <img className="image" src={pic7} alt="Diversity" width="75%" height="300px" />

        <p className="AboutUs_paragraph">
          <b>People: </b>
          <br />
          We're serious about making sure every person in our global supply
          chain is safe at work and has their rights respected and protected. We
          set high ethical standards and support our suppliers to help them meet
          them. Our priorities include transparency; improving wages; health and
          safety; addressing and reducing modern-slavery risks, and identifying
          and stopping child labour.
        </p>
        <img className="image" src={pic6} alt="people" width="75%" height="300px" />
        <p className="AboutUs_paragraph">
          <b>Join the MSLA Community:</b>
          <br />
          Become part of our vibrant community and connect with like-minded
          individuals who share your passion for fashion. Follow us on social
          media, sign up for our newsletter, and share your MSLA looks with the
          world. MSLA is more than just a name; it's a statement of our{" "}
          <b>commitment to Fashion for Everyone.</b>
        </p>
        <img className="image" src={pic5} alt="online shop pic" width="75%" height="300px" />
      </div>
      <Buttom/>
    </center>
  );
}
export default AboutUs;
