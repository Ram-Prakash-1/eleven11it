import React from 'react'

const Testimonials = () => {
  const items = [
    {quote: 'Luminex transformed how we operate.', author: 'Sarah Chen', role:'VP of Operations', company:'TechCorp'},
    {quote: 'The ROI was immediate.', author: 'Michael Rodriguez', role:'CTO', company:'DataFlow Inc'},
    {quote: 'Security exceeded expectations.', author: 'Emily Watson', role:'CISO', company:'SecureBank'}
  ];

  return (
    <section id="testimonials" className="testimonials-root">   {/* FIXED */}
      <div className="container">
        <div className="kicker">Testimonials</div>
        <h2 className="section-title">Trusted by Industry Leaders</h2>
        <p className="section-sub">See what our customers have to say.</p>

        <div className="test-grid">
          {items.map((t, i) => (
            <blockquote key={i} className="test-card">
              <div className="stars">★★★★★</div>
              <p className="quote">"{t.quote}"</p>

              <div className="author">
                <div className="avatar">{t.author.charAt(0)}</div>
                <div>
                  <div className="author-name">{t.author}</div>
                  <div className="author-meta">{t.role} at {t.company}</div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
