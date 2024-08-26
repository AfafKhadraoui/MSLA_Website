import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./containers/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart.jsx";
import LoginSignup from "./Pages/loginSignup.jsx"
import Wishlist from "./Pages/Wishlist.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<LoginSignup />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
