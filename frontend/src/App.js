
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./containers/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart.jsx";
import LoginSignup from "./Pages/loginSignup.jsx"
import Wishlist from "./Pages/Wishlist.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Contact from "./Pages/Contact.jsx";
// import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route index element={<Home/>} />
      <Route path="/" element={<Home />}/>
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/contact" element={<Contact />} />  
         
       
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
    </div>

  );
}

export default App;
