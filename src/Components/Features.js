import React from 'react'

const Features = () => {
  const list = [
    {
      icon: '🤖',
      title: 'AI-Powered Automation',
      desc: 'Automate repetitive workflows with intelligent AI that learns, adapts, and boosts productivity across teams.'
    },
    {
      icon: '📊',
      title: 'Real-Time Analytics',
      desc: 'Monitor KPIs, track performance, and make data-driven decisions with beautifully visualized dashboards.'
    },
    {
      icon: '🔗',
      title: 'Seamless Integrations',
      desc: 'Connect your apps, databases, and third-party tools effortlessly — ensuring a smooth, unified ecosystem.'
    },
    {
      icon: '🛡️',
      title: 'Enterprise-Grade Security',
      desc: 'Built with multi-layer encryption, secure authentication, and strict access control for complete protection.'
    },
    {
      icon: '⚡',
      title: 'High-Performance Infrastructure',
      desc: 'Optimized for speed and reliability, delivering lightning-fast load times and 24/7 operational stability.'
    },
    {
      icon: '📱',
      title: 'Mobile-Friendly Experience',
      desc: 'Manage, monitor, and collaborate from anywhere with a responsive mobile-first interface.'
    }
  ];

  return (
    <section id="features" className="features-root">
      <div className="container">
        <div className="kicker">Features</div>
        <h2 className="section-title">Powerful Features Built for Modern Businesses</h2>
        <p className="section-sub">From automation to security, every feature is designed to scale your workflow and drive long-term success.</p>

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
          <h3>And That’s Just the Beginning</h3>
          <p>
            Explore advanced APIs, custom integrations, automation suites, white-label services,
            and enterprise-level support tailored for your business.
          </p>
          <button className="btn-explore">Explore All Features</button>
        </div>
      </div>
    </section>
  );
}

export default Features;
