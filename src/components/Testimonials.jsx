import { testimonials } from "../data/content";
import "../styles/Testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <p className="section__label">TESTIMONIALS</p>
      <h2 className="section__title">Trusted by Teams Who Move Fast</h2>
      <p className="section__sub">See how teams use BrandName to simplify their daily work.</p>

      <div className="testimonials__grid">
        {testimonials.map((t) => (
          <div className={`testi-card ${t.dark ? "testi-card--dark" : ""}`} key={t.id}>
            <span className="testi-card__quote">"</span>
            <p className="testi-card__text">{t.quote}</p>
              <div className="testi-card__author">
                  <img src={t.image} alt={t.name} className="testi-card__avatar" />

                  <div className="testi-card__author-text">
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                  </div>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
}
