import React from 'react'

const ValueProposition = () => {
  return (
    <section id="value-prop" className="value-root">    {/* FIXED */}
      <div className="container">
        <h2 className="section-title">Why Leading Companies Choose Eleven11 IT Solution</h2>
        <p className="section-sub">
          Experience the difference that intelligent automation and real-time insights can make for your organization.
        </p>

        <div className="value-grid">
          <div className="value-card">
            <div className="value-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Process data in milliseconds with our optimized infrastructure.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">🔒</div>
            <h3>Enterprise Security</h3>
            <p>Bank-grade encryption and compliance ready.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">📈</div>
            <h3>Proven Growth</h3>
            <p>3x ROI within the first 6 months.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValueProposition;
