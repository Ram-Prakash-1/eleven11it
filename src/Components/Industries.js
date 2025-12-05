import React from 'react'

const Industries = () => {
  const items = [
    {
      icon: '🌐',
      title: 'Webpage Development',
      desc: 'Create stunning, high-performance websites that engage users and drive conversions. Designed with modern UI, SEO optimization, and scalable architecture.',
      stats: '2.5x increase in user engagement'
    },

    {
      icon: '📝',
      title: 'Data Annotation',
      desc: 'High-quality labeling services for AI/ML models. From image tagging to NLP annotation, we ensure accuracy that improves your model performance.',
      stats: '40% boost in AI accuracy'
    },

    {
      icon: '⚡',
      title: 'Cloud Infrastructure & DevOps',
      desc: 'Deploy faster, scale globally, and achieve enterprise-grade reliability. We automate cloud operations, CI/CD pipelines, and monitoring systems for zero downtime.',
      stats: '99.99% uptime achieved'
    },

    {
      icon: '📚',
      title: 'Data Entry',
      desc: 'Accurate and efficient data entry services that help businesses organize, clean, and structure their information for better decision-making.',
      stats: '3x faster processing'
    },

    {
      icon: '🎨',
      title: 'UI & UX',
      desc: 'Design intuitive, modern interfaces that enhance user experience. We turn complex workflows into simple, beautiful user journeys.',
      stats: '60% improvement in user satisfaction'
    },

    {
      icon: '🗄️',
      title: 'API & Database Services',
      desc: 'Secure, scalable APIs and data systems for your business applications. From backend design to optimization, we ensure speed and reliability.',
      stats: '50% faster data operations'
    }
  ];

  return (
    <section id="industries" className="industries-root">
      <div className="container">
        <div className="kicker">Industries</div>
        <h2 className="section-title">Built for Every Industry</h2>
        <p className="section-sub">Tailored services designed to elevate your workflow and business growth.</p>

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
          <p>Need something unique? We customize solutions for all business types.</p>
          <button className="btn-primary">Schedule a Consultation</button>
        </div>
      </div>
    </section>
  );
}

export default Industries;
