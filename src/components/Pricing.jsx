import { pricing } from "../data/content";
import "../styles/Pricing.css";

export default function Pricing() {
  const handlePlan = (name) => {
    alert(`You selected the ${name} plan!`);
  };

  return (
    <section className="pricing" id="pricing">
      <p className="section__label">PRICING</p>
      <h2 className="section__title">Simple Plans for Every Stage</h2>
      <p className="section__sub">Choose the plan that matches your current needs and scale when you grow.</p>

      <div className="pricing__grid">
        {pricing.map((plan) => (
          <div className={`pricing-card ${plan.popular ? "pricing-card--popular" : ""}`} key={plan.id}>
            {plan.popular && <span className="pricing-card__badge">Most Popular</span>}
            <h3 className="pricing-card__name">{plan.name}</h3>
            <p className="pricing-card__desc">{plan.desc}</p>
            <div className="pricing-card__price">
                <span className="pricing-card__amount">{plan.price}</span>
              <span className="pricing-card__currency">egp</span>
              <span className="pricing-card__per">/month</span>
            </div>
            <ul className="pricing-card__perks">
              {plan.perks.map((p) => (
                <li key={p}>
                  <span className="perk-icon">{plan.popular ? "✓" : "○"}</span> {p}
                </li>
              ))}
            </ul>
            <button
                className="btn btn--outline pricing-card__btn"
              onClick={() => handlePlan(plan.name)}
            >
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
