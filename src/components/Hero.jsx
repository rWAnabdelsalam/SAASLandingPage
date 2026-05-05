import { hero } from "../data/content";
import "../styles/Hero.css";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <span className="hero__badge">{hero.badge}</span>

        <h1 className="hero__heading">
          {hero.heading.replace(hero.highlight, "").trim()}{" "}
          <span className="hero__highlight">{hero.highlight}</span>
        </h1>

        <p className="hero__desc">{hero.description}</p>

        <button className="btn btn--primary hero__cta" onClick={scrollToContact}>
          {hero.cta}
        </button>

        <p className="hero__sub">{hero.sub}</p>

        <div className="hero__trust">
          <div className="hero__avatars">
            {hero.avatars.map((a) => (
              <span className="hero__avatar" key={a}>{a}</span>
            ))}
          </div>
          <span>{hero.trust}</span>
        </div>
      </div>

      {/* Illustration */}
      <div className="hero__illustration" aria-hidden="true">
        <div className="hero__ill-cloud">☁️</div>
        <div className="hero__ill-device">
          <div className="hero__ill-screen">
            <div className="hero__ill-bar" />
            <div className="hero__ill-bar hero__ill-bar--short" />
            <div className="hero__ill-bar" />
            <div className="hero__ill-bar hero__ill-bar--mid" />
          </div>
        </div>
        <div className="hero__ill-figure">👤</div>
        <div className="hero__ill-gear">⚙️</div>
        <div className="hero__ill-dot hero__ill-dot--1" />
        <div className="hero__ill-dot hero__ill-dot--2" />
        <div className="hero__ill-dot hero__ill-dot--3" />
      </div>
    </section>
  );
}
