import "./Footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-company">
          <div className="footer-logo">
            <img src={logo} alt="" />
          </div>
          <div className="footer-address">
            <p>
              EM-4, EM Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091
            </p>
          </div>
        </div>
        <div className="footer-options">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <Link to="/about">about us</Link>
              </li>
              <li>
                <Link to="/services">our services</Link>
              </li>
              <li>
                <Link to="/privacy-policy">privacy policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="#">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-socials">
          <div className="social-links">
            <div className="social-link">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="social-link">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="social-link">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="social-link">
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-rights">
        <p>© 2023 Parkinova. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
