import React from 'react'

function Pricing() {
  const plans = [
    {name:'Starter', price:'$49', desc:'Perfect for small teams getting started', features:['Up to 10 users','50GB storage','Basic analytics']},
    {name:'Professional', price:'$149', desc:'For growing teams', features:['Up to 50 users','500GB storage','Advanced analytics'], popular:true},
    {name:'Enterprise', price:'Custom', desc:'Tailored solutions', features:['Unlimited users','Dedicated support']}
  ];

  return (
    <section id="pricing" className="pricing-root">
      <div className="container">
        <div className="kicker">Pricing</div>
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-sub">Choose the plan that fits your needs. All plans include a 14-day free trial.</p>

        <div className="pricing-grid">
          {plans.map((p,i)=>(
            <div key={i} className={`plan-card ${p.popular ? 'popular' : ''}`}>
              {p.popular && <div className="popular-pill">Most Popular</div>}
              <h3>{p.name}</h3>
              <div className="price">{p.price === 'Custom' ? 'Custom' : (<><span className="price-amount">{p.price}</span><span className="price-suffix">/month</span></>)}</div>
              <p className="plan-desc">{p.desc}</p>
              <button className={`btn ${p.popular ? 'btn-white' : 'btn-primary'}`}>{p.popular ? 'Start Free Trial' : 'Start Free Trial'}</button>

              <ul className="plan-features">
                {p.features.map((f,fi)=>(<li key={fi}>{f}</li>))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pricing-cta">
          <div>
            <h3>Ready to Transform Your Business?</h3>
            <p>Join thousands of companies already using Eleven11 IT Solution to drive growth and efficiency.</p>
          </div>
          <div>
            <button className="btn-white">Start Free Trial</button>
            <button className="btn-ghost">Schedule Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing