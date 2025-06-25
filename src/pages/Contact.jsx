import "./Contact.css";
import { useNavigate } from "react-router-dom";


function Contact() {
   const navigate = useNavigate();
  function GoToHome() {
    navigate("/");
  }
  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p className="contact-intro">
          Have a question or want to order snacks in bulk? Reach out to Morning
          Bites — we're always here to help! 🍽️
        </p>

        <div className="contact-info">
          <h2>📞 Phone</h2>
          <p>+91 6265207525</p>

          <h2>📍 Address</h2>
          <p>Indore, Madhya Pradesh, 452001</p>

          <h2>📧 Email</h2>
          <p>rsourabh597@gmail.com</p>
           <button id="Gotohome" onClick={() => GoToHome()}>
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
