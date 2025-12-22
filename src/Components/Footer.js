import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import eleven11_with_background from "../Images/Eleven11_background.png";
import { Link } from "react-router-dom";


// ---- PUT YOUR REAL IDs HERE ----
const SERVICE_ID = "service_Eleven11x121";     // 👈 EmailJS service ID
const TEMPLATE_ID = "template_xjt12pp";   // 👈 EmailJS template ID
const PUBLIC_KEY  = "x4-V2ySYW75uaDd4N";  // 👈 EmailJS public key
// --------------------------------

const Footer = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.email || !form.message) {
      alert("Email & Message are required");
      return;
    }

    const templateParams = {
      name: form.name || "New visitor", // name empty na fallback
      email: form.email,
      phone: form.phone || "Not provided",
      message: form.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      })
      .then((res) => {
        console.log("EMAILJS SUCCESS:", res);
        alert("Message sent successfully 🎉");
        setForm({ name: "", email: "", phone: "", message: "" });
      })
      .catch((err) => {
        console.error("EMAILJS ERROR:", err);   // 👈 console la full error
        alert("Something went wrong 😢 Please check console & try again.");
      });
  }

  return (
    <footer id="footer" className="footer-root">
      <div className="container footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <div className="brand-logo-square">
            <img src={eleven11_with_background} alt="Eleven11 Logo" />
          </div>

          <h4>Eleven11 IT Solutions</h4>
          <p>
            Modern digital services for growing businesses.
            Build, scale, and automate with confidence.
          </p>

          <div className="socials">
            <a
              href="https://www.linkedin.com/company/eleven11-it-solutions"
              className="social"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/"
              className="social"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://youtube.com/"
              className="social"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <a
              href="https://www.instagram.com/eleven11_it_solutions?igsh=bXR3MWp2aXJ2ZjBl"
              className="social"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Product */}
        <div className="footer-col">
          <h5>Product</h5>
          <ul>
            <li>
              <a href="#features"
              style={{
               textDecoration: "none",
               color: "inherit",
               cursor: "pointer"
              }}>
                Features
              </a>
            </li>
            {/* <li><Link to="/projects" className="footer-link">
                  Projects
                </Link>
            </li> */}
            <li>Projects</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li>
              <a href="#home"
               style={{
               textDecoration: "none",
               color: "inherit",
               cursor: "pointer"
              }}>
               About Us
              </a>

            </li>
            <li>Careers</li>
            {/* <li>Portfolio</li> */}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h5>Contact Us</h5>

          <form className="footer-contact" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message..."
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
            />
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Eleven11 IT Solutions. All rights reserved.</p>
        <div className="legal-links">
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
          <a>Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
