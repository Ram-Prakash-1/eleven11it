import React from 'react'

const Features = () => {
  const list = [
    {icon:'📊', title:'Advanced Analytics', desc:'Transform raw data into actionable insights with our powerful analytics engine and customizable dashboards.'},
    {icon:'💾', title:'Unified Data Platform', desc:'Connect all your data sources in one place. No more silos, just seamless integration across systems.'},
    {icon:'⚙️', title:'Smart Automation', desc:'Automate repetitive tasks and workflows. Focus on strategy while we handle the execution.'},
    {icon:'👥', title:'Team Collaboration', desc:'Real-time collaboration tools that keep your team aligned and productive, wherever they are.'},
    {icon:'🔐', title:'Advanced Security', desc:'Multi-layer security architecture with end-to-end encryption and granular access controls.'},
    {icon:'📱', title:'Mobile First', desc:'Full-featured mobile apps for iOS and Android. Manage your business on the go.'}
  ];

  return (
    <section id="features" className="features-root">
      <div className="container">
        <div className="kicker">Features</div>
        <h2 className="section-title">Everything You Need to Succeed</h2>
        <p className="section-sub">Powerful features designed to streamline your operations and accelerate growth.</p>

        <div className="features-grid">
          {list.map((f, i) => (
            <article key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>

        <div className="cta-band">
          <h3>And Much More...</h3>
          <p>API access, webhooks, custom integrations, white-label options, dedicated support, and enterprise features.</p>
          <button className="btn-explore">Explore All Features</button>
        </div>
      </div>
    </section>
  );
}

export default Features