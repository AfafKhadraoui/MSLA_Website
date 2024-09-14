import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./containers/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart.jsx";
import LoginSignup from "./Pages/loginSignup.jsx";
import Wishlist from "./Pages/Wishlist.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Contact from "./Pages/Contact.jsx";
import SearchBar from "./containers/SearchBar.jsx";
import BlueButtom from "./containers/BlueButtom.jsx";
import Product from "./Pages/Product.jsx";
import ProductInfo from "./Pages/ProductInfo.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SearchBar />
      <div className="main-content"> {/* Wrap routes in a container if needed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<LoginSignup />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:id" element={<ProductInfo />} />
        </Routes>
      </div>
      <BlueButtom />
    </BrowserRouter>
  );
}


export default App;
