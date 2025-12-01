import React from 'react'

const Footer = () => {
  return (
    <footer id="footer" className="footer-root">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand-logo-square">11</div>
          <h4>Eleven11</h4>
          <p>Transform your business with intelligent automation and advanced analytics. Built for the modern enterprise.</p>
          <div className="socials">
            <span className="social">Twitter</span>
            <span className="social">LinkedIn</span>
            <span className="social">GitHub</span>
            <span className="social">YouTube</span>
          </div>
        </div>

        <div className="footer-col">
          <h5>Product</h5>
          <ul>
            <li>Features</li>
            <li>Integrations</li>
            <li>Pricing</li>
            <li>API</li>
            <li>Changelog</li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Partners</li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Resources</h5>
          <ul>
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
            <li>Status</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Eleven11. All rights reserved.</p>
        <div className="legal-links">
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
          <a>Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer