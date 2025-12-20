import React from 'react';

const Features = () => {
  const list = [
    { icon: '📝', title: 'Data Annotation Services', desc: 'Accurately label images and create high-quality datasets using scalable human-in-the-loop workflows.' },
    { icon: '📊', title: 'Real-Time Analytics', desc: 'Monitor KPIs, track performance, and make data-driven decisions with beautifully visualized dashboards.' },
    { icon: '💻', title: 'Web Development & Engineering', desc: 'Build high-performance websites, dashboards, and applications with clean architecture and secure backend systems.' },
    { icon: '⚡', title: 'High-Performance Infrastructure', desc: 'Optimized for speed and reliability, delivering lightning-fast load times and 24/7 operational stability.' },
    { icon: '📱', title: 'Mobile-Friendly Experience', desc: 'Manage, monitor, and collaborate from anywhere with a responsive mobile-first interface.' },
    { icon: '🔗', title: 'Seamless Integrations', desc: 'Connect your apps, databases, and third-party tools effortlessly — ensuring a smooth ecosystem.' }
  ];

  return (
    <section id="features" className="features-root">
      <div className="container">
        <div className="kicker">Features</div>
        <h2 className="section-title">Powerful Features Built for Modern Businesses</h2>
        <p className="section-sub">
          Our platform is built to automate workflows, reduce manual effort, and unlock measurable productivity.
        </p>

        {/* ===== DESKTOP VIEW ===== */}
        <div className="icon-row desktop-only">
          {list.map((f, i) => (
            <div key={i} className="icon-item">
              <div className="icon-circle">{f.icon}</div>
              <div className="icon-popup">
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== MOBILE VIEW ===== */}
        <div className="mobile-only">
          {list.map((f, i) => (
            <div key={i} className="feature-mobile-card">
              <div className="feature-mobile-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
