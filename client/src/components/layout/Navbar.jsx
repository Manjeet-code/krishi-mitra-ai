import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const navItems = [
  { name: "Home", id: "hero" },
  { name: "Features", id: "features" },
  { name: "How It Works", id: "how-it-works" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact", id: "footer" },
];

const scrollToSection = (id) => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  setMenuOpen(false);
};
  return (
    <header
      style={{
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 999,
        transition: ".3s",
        background: scrolled
          ? "rgba(255,255,255,.9)"
          : "transparent",
        backdropFilter: scrolled ? "blur(15px)" : "none",
        boxShadow: scrolled
          ? "0 10px 35px rgba(0,0,0,.08)"
          : "none",
      }}
    >
      <div
        className="container"
        style={{
          height: "85px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}

        <div
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#15803D",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          🌾 Krishi Mitra AI
        </div>

        {/* Desktop Menu */}

        <div
          className="desktop-menu"
          style={{
            display: "flex",
            gap: "35px",
            alignItems: "center",
          }}
        >
{navItems.map((item) => (
  <button
    key={item.id}
    onClick={() => scrollToSection(item.id)}
    style={{
      background: "none",
      border: "none",
      color: "#CBD5E1",
      cursor: "pointer",
      fontSize: "16px",
      transition: "0.3s",
    }}
    onMouseEnter={(e) =>
      (e.target.style.color = "#22c55e")
    }
    onMouseLeave={(e) =>
      (e.target.style.color = "#CBD5E1")
    }
  >
    {item.name}
  </button>
))}

          <button
            onClick={() => navigate("/app")}
            style={{
              background: "#16A34A",
              color: "#fff",
              border: "none",
              padding: "13px 30px",
              borderRadius: "999px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile */}

        <div
          style={{
            display: "none",
          }}
          className="mobile-menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div
          style={{
            background: "#fff",
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            boxShadow: "0 10px 25px rgba(0,0,0,.1)",
          }}
        >
          {navItems.map((item) => (
            <span
              key={item}
              onClick={() =>
                scrollToSection(
                  item
                    .toLowerCase()
                    .replace(/\s/g, "-")
                )
              }
              style={{
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              {item}
            </span>
          ))}

          <button
            onClick={() => navigate("/app")}
            style={{
              background: "#16A34A",
              color: "#fff",
              border: "none",
              padding: "14px",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;