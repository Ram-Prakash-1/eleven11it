import React, { useState, useEffect } from 'react';

const Hero = () => {
 const [mobileOpen, setMobileOpen] = useState(false);

 useEffect(() => {
    const sections = document.querySelectorAll("section, header, footer");
    const navLinks = document.querySelectorAll(".nav-links a");

    function activateScrollSpy() {
      let scrollPos = window.scrollY + 120;

      sections.forEach((sec) => {
        if (!sec.id) return;

        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
          navLinks.forEach((a) => a.classList.remove("active-link"));

          const target = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
          if (target) target.classList.add("active-link");
        }
      });
    }

    window.addEventListener("scroll", activateScrollSpy);
    return () => window.removeEventListener("scroll", activateScrollSpy);
  }, []);

 return (
      <header className="hero-root" id="home">
      <nav className="nav">
        <div className="nav-inner">
          <div className="brand">
            <div className="brand-logo">11</div>
            <div className="brand-name">Eleven11</div>
          </div>

          <button
            className="nav-toggle"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
          >
            ☰
          </button>

          {/* Smooth scroll links */}
          <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#value-prop">Proposition</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#industries">Industries</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#footer">Footer</a></li>
            {/* <li><button className="btn-link">Sign In</button></li> */}
            <li><button className="btn-primary">Get Started</button></li>
          </ul>
        </div>
      </nav>

      <div className="hero-container">
        <div className="hero-left">
          <span className="pill">● Now available worldwide</span>
          <h1 className="hero-title">Transform Your Business with Intelligence</h1>
          <p className="hero-copy">Harness the power of advanced analytics and automation to drive growth, optimize operations, and stay ahead of the competition.</p>

          <div className="hero-actions">
            <button className="btn-primary large">Start Free Trial →</button>
            <button className="btn-ghost large">Watch Demo</button>
          </div>

          <div className="metrics">
            <div className="metric">
              <div className="metric-value">50K+</div>
              <div className="metric-label">Active Users</div>
            </div>
            <div className="divider" />
            <div className="metric">
              <div className="metric-value">4.9/5</div>
              <div className="metric-label">User Rating</div>
            </div>
            <div className="divider" />
            <div className="metric">
              <div className="metric-value">99.9%</div>
              <div className="metric-label">Uptime</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="card-shadow" />
          <div className="revenue-card">
            <div className="rev-header">
              <div>
                <div className="rev-small">Monthly Revenue</div>
                <div className="rev-big">$847,382</div>
              </div>
              <div className="rev-badge">+23.5%</div>
            </div>

            <div className="bar-chart">
              {[40, 65, 45, 80, 55, 90, 75, 95].map((h, i) => (
                <div key={i} className="bar" style={{ height: `${h}%` }} />
              ))}
            </div>

            <div className="rev-stats">
              <div>
                <div className="stat-label">Conversions</div>
                <div className="stat-value">12,483</div>
              </div>
              <div>
                <div className="stat-label">Engagement</div>
                <div className="stat-value">87.3%</div>
              </div>
              <div>
                <div className="stat-label">Growth</div>
                <div className="stat-value">2.4x</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero