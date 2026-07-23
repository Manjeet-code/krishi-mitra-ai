import "./Hero.css";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaArrowRight,
  FaPlay,
  FaStar,
} from "react-icons/fa";

import Container from "../../common/Container";

import Background from "./Background";
// import Dashboard from "./Dashboard";

import heroImage from "../../../assets/illustrations/heroImage.jpeg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <Background />

      <Container>

        <div className="hero-container">

          <div className="hero-grid">

            {/* LEFT */}

            <motion.div
              className="hero-left"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
            >

              <div className="hero-badge">

                🌱 AI Powered Agriculture Platform

              </div>

              <h1 className="hero-title">

                Grow Smarter

                <br />

                <span>with KrishiMitra AI</span>

              </h1>

              <p className="hero-description">

                India's next generation AI farming platform helping
                farmers make smarter decisions using Artificial
                Intelligence.

                Get intelligent crop recommendations, live weather,
                disease detection, mandi prices and multilingual
                voice assistance — all from one beautiful dashboard.

              </p>

              <div className="hero-buttons">

                <button
                  className="primary-btn"
                  onClick={() => navigate("/app")}
                >

                  Get Started

                  <FaArrowRight />

                </button>

               <button
  className="secondary-btn"
  onClick={() =>
    window.open(
      "https://youtube.com/@theUnfilteredManjeet",
      "_blank",
      "noopener,noreferrer"
    )
  }
>
  <FaPlay style={{ marginRight: "8px" }} />
  Watch Demo
</button>

              </div>

              {/* TRUST */}

              <div className="hero-trust">

                <div className="trust-item">

                  <h2>25K+</h2>

                  <p>Farmers</p>

                </div>

                <div className="trust-item">

                  <h2>150+</h2>

                  <p>Crops</p>

                </div>

                <div className="trust-item">

                  <h2>99%</h2>

                  <p>Accuracy</p>

                </div>

              </div>

              {/* Rating */}

              <div
                style={{
                  marginTop: 35,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "#F59E0B",
                }}
              >
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

                <span
                  style={{
                    color: "#64748B",
                    marginLeft: 10,
                    fontWeight: 600,
                  }}
                >
                  Trusted by Farmers Across India
                </span>

              </div>

            </motion.div>

            {/* RIGHT */}

<motion.div
  className="hero-right"
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9 }}
>

  <div className="hero-visual">

    <img
      src={heroImage}
      alt="KrishiMitra AI"
      className="hero-img"
    />

    {/* <motion.div
      className="dashboard-wrapper"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.4,
        duration: 0.8,
      }}
    >
      <Dashboard />
    </motion.div> */}

  </div>

</motion.div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default Hero;