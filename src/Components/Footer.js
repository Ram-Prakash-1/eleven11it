import React, { useState } from "react";
import eleven11_with_background from "../Images/Eleven11_background.png";

const WEBSITE_EMAIL = "eleven11.itsolution@gmail.com";

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

    const subject = "New Inquiry from Eleven11 Website";
    const body = `
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Message:
${form.message}
`.replace(/\n/g, "%0D%0A");

    // Always open Gmail website compose
    const gmailWebURL = 
      `https://mail.google.com/mail/?view=cm&fs=1&to=${WEBSITE_EMAIL}` +
      `&su=${encodeURIComponent(subject)}&body=${body}`;

    window.open(gmailWebURL, "_blank");

    setForm({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <footer id="footer" className="footer-root">
      <div className="container footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <div className="brand-logo-square">
            <img src={eleven11_with_background} alt="Eleven11 Logo"/>
          </div>

          <h4>Eleven11 IT Solutions</h4>
          <p>
            Modern digital services for growing businesses.  
            Build, scale, and automate with confidence.
          </p>

          <div className="socials">

  <a
    href="https://www.linkedin.com/"
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
    href="https://instagram.com/"
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
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Projects</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h5>Contact Us</h5>

          <form className="footer-contact" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Your Name (optional)"
              value={form.name}
              onChange={handleChange}
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email *"
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
