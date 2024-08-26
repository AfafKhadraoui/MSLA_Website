import "./HomeTop.css";
import home_pic from "../components/Assets/images/pic2.png";

function HomeTop() {
  function goToPage() {
    window.location.href = "'../Pages/Product'";
  }
  return (

    <div className="HomeTop_container">
      <div className="info_container">
        <span className="p1">Elevate Your Style</span>
        <span className="p2">with</span>
        <p className="p3"> MSLA trendy Clothing</p>
        <p>
          Welcome to our online store, your one-stop shop for fashionable
          clothing for women, men, and children. Explore our carefully curated
          selection and discover stylish pieces that suit your unique taste.
        </p>
        <button className="shopNow_button" onClick={goToPage}>
          Shop Now →
        </button>
      </div>
      <div className="image_container">
        <img src={home_pic} alt="Home picture"/>
      </div>
    </div>
  );
}
export default HomeTop;
