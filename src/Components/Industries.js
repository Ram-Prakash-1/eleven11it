import React from 'react'

const Industries = () => {
  const items = [
    {icon:'🏬', title:'E-commerce', desc:'Optimize inventory, personalize customer experiences, and boost conversions with data-driven insights.', stats:'2.5x increase in sales'},
    {icon:'❤️', title:'Healthcare', desc:'Improve patient outcomes with secure data management and compliance-ready analytics.', stats:'40% efficiency gain'},
    {icon:'🏢', title:'Financial Services', desc:'Real-time fraud detection, risk assessment, and automated compliance reporting.', stats:'85% faster processing'},
    {icon:'🎓', title:'Education', desc:'Track student performance, optimize resources, and enhance learning outcomes.', stats:'3x engagement rate'},
    {icon:'✈️', title:'Travel & Hospitality', desc:'Streamline bookings, predict demand, and deliver personalized travel experiences.', stats:'60% cost reduction'},
    {icon:'🏭', title:'Manufacturing', desc:'Optimize supply chains, predict maintenance needs, and reduce operational costs.', stats:'50% less downtime'}
  ];

  return (
    <section id="industries" className="industries-root">
      <div className="container">
        <div className="kicker">Industries</div>
        <h2 className="section-title">Built for Every Industry</h2>
        <p className="section-sub">Tailored solutions that address the unique challenges of your sector.</p>

        <div className="industries-grid">
          {items.map((it, i) => (
            <div key={i} className="industry-card">
              <div className="industry-icon">{it.icon}</div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
              <div className="industry-badge">{it.stats}</div>
            </div>
          ))}
        </div>

        <div className="industries-cta">
          <p>Don't see your industry? We work with businesses of all types.</p>
          <button className="btn-primary">Schedule a Consultation</button>
        </div>
      </div>
    </section>
  );
}

export default Industries