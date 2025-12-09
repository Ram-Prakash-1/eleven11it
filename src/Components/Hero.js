import React, { useState, useEffect } from "react";
import eleven11_with_background from "../Images/Eleven11_background.png";
import eleven11_video from "../Videos/Eleven11video.mp4";

const Hero = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // 📌 Scroll Spy
  useEffect(() => {
    const sections = document.querySelectorAll("section, header, footer");
    const navLinks = document.querySelectorAll(".nav-links a");

    function activateScrollSpy() {
      let scrollPos = window.scrollY + 120;

      sections.forEach((sec) => {
        if (!sec.id) return;

        if (
          scrollPos >= sec.offsetTop &&
          scrollPos < sec.offsetTop + sec.offsetHeight
        ) {
          navLinks.forEach((a) => a.classList.remove("active-link"));
          const target = document.querySelector(
            `.nav-links a[href="#${sec.id}"]`
          );
          if (target) target.classList.add("active-link");
        }
      });
    }

    window.addEventListener("scroll", activateScrollSpy);
    return () => window.removeEventListener("scroll", activateScrollSpy);
  }, []);

  // ⭐ WhatsApp handler
  function openWhatsApp() {
    const phone = "918807252105"; // 🔥 YOUR NUMBER
    const message =
      "Hello! I have a requirement for my business and would like to connect with Eleven11 IT Solutions. Can we schedule a call?";
    
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <header className="hero-root" id="home">

      {/* NAVBAR */}
      <nav className="nav">
        <div className="nav-inner">

          {/* LOGO */}
          <div className="brand">
            <div className="brand-logo">
              <img src={eleven11_with_background} alt="Eleven11 Logo" />
            </div>
            <div className="brand-name">Eleven11</div>
          </div>

          {/* MOBILE MENU */}
          <button
            className="nav-toggle"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            ☰
          </button>

          {/* LINKS */}
          <ul className={`nav-links ${mobileOpen ? "open" : ""}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#value-prop">Services</a></li>
            <li><a href="#features">Why Us</a></li>
            <li><a href="#industries">Made By Us</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>

        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          <span className="pill">• Startup Launch Partner</span>

          <h1 className="hero-title">
            We Build Startups<br />That Scale.
          </h1>

          <p className="hero-copy">
            A complete engineering team for your startup — UI/UX, Full-Stack
            Development, Cloud Systems, Data Annotation & Agile Product Execution.
            Launch 3× faster with world-class engineering.
          </p>

          <div className="hero-actions">
            <button className="btn-primary large" onClick={openWhatsApp}>
              Schedule a Call →
            </button>

            <button className="btn-primary large">
              View Portfolio →
            </button>
          </div>

          <div className="metrics">
            <div className="metric">
              <div className="metric-value">12+</div>
              <div className="metric-label">Products Launched</div>
            </div>

            <div className="divider" />

            <div className="metric">
              <div className="metric-value">98%</div>
              <div className="metric-label">Launch Success</div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="hero-right">

          <div className="card-shadow" />

          <div className="revenue-card video-card">

            <video
              className="hero-video"
              src={eleven11_video}
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="rev-stats">
              <div>
                <div className="stat-label">Conversions</div>
                <div className="stat-value">783</div>
              </div>
              <div>
                <div className="stat-label">Engagement</div>
                <div className="stat-value">87.3%</div>
              </div>
              <div>
                <div className="stat-label">Growth</div>
                <div className="stat-value">2.4×</div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Hero;
