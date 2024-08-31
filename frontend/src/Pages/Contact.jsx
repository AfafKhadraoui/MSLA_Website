import "./CSS/Contact.css";
import SearchBar from "../containers/SearchBar";

function Contact() {
  return (
    <center>
      <SearchBar />

      <p className="title">Get In Touch</p>
      <p className="Get_In_Touch_p">
        Want to get in touch? We would love to hear from you.Here is how you can
        reach us...
      </p>
      <div className="contact_container">
        <div className="information">
          <p className="General_Inquiry">GeneralInquiry</p>
          
          <i class="fa fa-phone"></i>
          <span className="info_title">Our phone number</span>
          <p className="info_contents">+213 773 642 559</p>
         

          <i class="fa fa-shopping-bag"></i>
          <span className="info_title">Our address</span>
          <p className="info_contents">144 Meyer St, Germiston, 1400 Johannesburg</p>
          
          <i class="fa fa-envelope"></i>
          <span className="info_title">Our email</span>
          <p className="info_contents">MSLAwebsite@gmail.com</p>

          <i class="fa fa-group"></i>
          <span className="info_title">Our members</span>
          <p className="info_contents">Malak , Serine , Lina , Afaf</p>
        </div>







        <div className="send_process">
          <p className="message_title">Send a message</p>
          <form>
            <label>First Name : </label>
            <input type="text" placeholder="enter your first name" required />
            <label>Last Name : </label>
            <input type="text" placeholder="enter your last name" required />
            <label>Email : </label>
            <input type="email" placeholder="enter your email"  required/>
            <label>Object : </label>
            <input type="text" placeholder="enter the object " required />
            <label>Your message : </label>
            <textarea placeholder="write the message you want ..."  required/>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </center>
  );
}
export default Contact;
