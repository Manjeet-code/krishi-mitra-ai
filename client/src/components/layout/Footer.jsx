import {
  FaLinkedin,
  FaYoutube,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
  FaArrowUp,
} from "react-icons/fa";
import Logo from "../common/Logo";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        {/* Top */}
        <div className="footer-top">
          {/* Logo */}
          <div>
            <h2 className="footer-logo-title">
              <Logo /> KrishiMitra AI
            </h2>
            <p className="footer-description">
              India's AI-powered Smart Farming Assistant helping farmers with
              weather forecasting, crop recommendation, disease detection,
              mandi prices and voice-enabled AI support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            {[
              { name: "Home", link: "#hero" },
              { name: "Features", link: "#features" },
              { name: "How It Works", link: "#how-it-works" },
              { name: "Testimonials", link: "#testimonials" },
              { name: "Contact", link: "#footer" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="footer-link"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Features */}
          <div>
            <h3 className="footer-heading">Features</h3>
            {[
              "AI Chat",
              "Voice Assistant",
              "Weather",
              "Crop Recommendation",
              "Disease Detection",
              "Mandi Prices",
            ].map((item) => (
              <p key={item} className="footer-text">
                {item}
              </p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-heading">Contact</h3>
            <p className="footer-contact-item">
              <FaEnvelope /> info@krishimitraai.com
            </p>
            <p className="footer-contact-item">
              <FaPhone /> +91 9142847934
            </p>
            <p className="footer-contact-item">
              <FaMapMarkerAlt /> India
            </p>
            <div className="footer-socials">
              <a href="https://3d-portfolio-eight-drab.vercel.app/" target="_blank" rel="noopener noreferrer">
                <FaGlobe className="social-icon" />
              </a>
              <a href="https://Youtube.com/@theUnfilteredManjeet" target="_blank" rel="noreferrer">
                <FaYoutube className="social-icon" />
              </a>
              <a href="https://instagram.com/manjeet.explorer" target="_blank" rel="noreferrer">
                <FaInstagram className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/manjeet-kumar-571981347/" target="_blank" rel="noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://github.com/Manjeet-code" target="_blank" rel="noreferrer">
                <FaGithub className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          {/* Left */}
          <div className="footer-bottom-left">
            © {new Date().getFullYear()} KrishiMitra AI. All Rights Reserved.
          </div>

          {/* Center */}
          <div className="footer-bottom-center">
            <div className="footer-dev-info">
              <span>Designed & Developed with</span>
              <span style={{ color: "#EF4444", fontSize: "16px", animation: "heartbeat 1.5s infinite" }}>
                ❤️
              </span>
              <span>by</span>
              <span style={{ color: "#22C55E", fontWeight: "700" }}>
                Manjeet Kumar
              </span>
            </div>
            <div style={{ color: "#94A3B8", fontSize: "13px", marginTop: "4px", fontStyle: "italic" }}>
              Empowering Farmers Through AI Innovation 🌾
            </div>
          </div>

          {/* Right */}
          <button
            className="footer-scroll-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;