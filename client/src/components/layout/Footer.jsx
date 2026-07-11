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

const Footer = () => {
  return (
    <footer
      style={{
        background: "#0F172A",
        color: "#fff",
        padding: "80px 0 20px",
        marginTop: "100px",
      }}
    >
      <div className="container">

        {/* Top */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: "50px",
            marginBottom: "60px",
          }}
        >

          {/* Logo */}

          <div>

            <h2
              style={{
                color: "#22C55E",
                marginBottom: "20px",
                fontSize: "32px",
              }}
            >
              🌾 Krishi Mitra AI
            </h2>

            <p
              style={{
                color: "#CBD5E1",
                lineHeight: "30px",
              }}
            >
              India's AI-powered Smart Farming Assistant helping farmers with
              weather forecasting, crop recommendation, disease detection,
              mandi prices and voice-enabled AI support.
            </p>

          </div>

{/* Quick Links */}

<div>
  <h3 style={{ marginBottom: "25px" }}>
    Quick Links
  </h3>

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
      style={{
        display: "block",
        color: "#CBD5E1",
        marginBottom: "15px",
        cursor: "pointer",
        textDecoration: "none",
        transition: "0.3s",
      }}
    >
      {item.name}
    </a>
  ))}

</div>

          {/* Features */}

          <div>

            <h3 style={{ marginBottom: "25px" }}>
              Features
            </h3>

            {[
              "AI Chat",
              "Voice Assistant",
              "Weather",
              "Crop Recommendation",
              "Disease Detection",
              "Mandi Prices",
            ].map((item) => (
              <p
                key={item}
                style={{
                  color: "#CBD5E1",
                  marginBottom: "15px",
                }}
              >
                {item}
              </p>
            ))}

          </div>

          {/* Contact */}

          <div>

            <h3 style={{ marginBottom: "25px" }}>
              Contact
            </h3>

            <p style={{ marginBottom: "18px" }}>
              <FaEnvelope /> info@krishimitraai.com
            </p>

            <p style={{ marginBottom: "18px" }}>
              <FaPhone /> +91 9142847934
            </p>

            <p>
              <FaMapMarkerAlt /> India
            </p>
<div
  style={{
    display: "flex",
    gap: "18px",
    marginTop: "30px",
    fontSize: "22px",
  }}
>
  <a
    href="https://3d-portfolio-eight-drab.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
  >
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

<div
  style={{
    marginTop: "20px",
    paddingTop: "25px",
    borderTop: "1px solid rgba(255,255,255,.12)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
  }}
>
  {/* Left */}

  <div
    style={{
      color: "#CBD5E1",
      fontSize: "14px",
    }}
  >
    © {new Date().getFullYear()} Krishi Mitra AI. All Rights Reserved.
  </div>

{/* Center */}

<div
  style={{
    color: "#CBD5E1",
    fontSize: "14px",
    textAlign: "center",
    lineHeight: "1.8",
  }}
>
<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    flexWrap: "wrap",
  }}
>
  <span>Designed & Developed with</span>

  <span
    style={{
      color: "#EF4444",
      fontSize: "16px",
      animation: "heartbeat 1.5s infinite",
    }}
  >
    ❤️
  </span>

  <span>by</span>

  <span
    style={{
      color: "#22C55E",
      fontWeight: "700",
    }}
  >
    Manjeet Kumar
  </span>
</div>

  <div
    style={{
      color: "#94A3B8",
      fontSize: "13px",
      marginTop: "4px",
      fontStyle: "italic",
    }}
  >
   Empowering Farmers Through AI Innovation 🌾
  </div>
</div>

  {/* Right */}

  <button
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
    style={{
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      border: "none",
      background: "#22C55E",
      color: "#fff",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px",
      boxShadow: "0 10px 25px rgba(34,197,94,.35)",
      transition: "0.3s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
    }}
  >
    <FaArrowUp />
  </button>
</div>

      </div>
    </footer>
  );
};

export default Footer;