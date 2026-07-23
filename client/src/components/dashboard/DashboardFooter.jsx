import "./DashboardFooter.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import Logo from "../common/Logo";

export default function DashboardFooter() {
  const navigate = useNavigate();
  return (
    <footer className="km-footer">

      <div className="km-footer-top">

        <div className="km-footer-brand">

          <div className="footer-logo">
            <Logo />
          </div>
          <div>
            <h3>KrishiMitra AI</h3>
            <p>
              Smart Farming • AI Powered • Future Ready
            </p>
          </div>

        </div>

        <div className="km-footer-links">

          

          <a href="#chat">AI Chat</a>

          <a href="#weather">Weather</a>

          <a href="#crop">Crop Recommendation</a>

          <a href="#market">Market Prices</a>

          <a href="#fertilizer">Fertilizer</a>

          <a href="#disease">Disease Detection</a>

          <a href="#schemes">Govt Schemes</a>

        </div>
        <button
  className="km-footer-home"
  onClick={() => navigate("/")}
>
  <FaHome />
  <span>Home</span>
</button>

      </div>

      <div className="km-footer-divider"></div>

<div className="km-footer-bottom">

  <p>
    © {new Date().getFullYear()} KrishiMitra AI. All Rights Reserved.
  </p>

  <p className="footer-credit">
    Designed and developed with
    <span className="footer-heart">❤</span>
    by <span className="footer-name">Manjeet Kumar</span>
  </p>

<div className="km-footer-social">

  <a
    href="https://github.com/Manjeet-code"
    target="_blank"
    rel="noopener noreferrer"
    title="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/manjeet-kumar-571981347/"
    target="_blank"
    rel="noopener noreferrer"
    title="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:manjeet@example.com"
    title="Email"
  >
    <FaEnvelope />
  </a>

</div>

      </div>

    </footer>
  );
}