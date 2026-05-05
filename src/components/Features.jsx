import { features } from "../data/content";
import "../styles/Features.css";

export default function Features() {
    return (
        <section className="features" id="features">
            <p className="features__label">FEATURES</p>
            <h2 className="features__title">Everything You Need to Work Smarter</h2>
            <p className="features__subtitle">
                Simple tools designed to help your team stay focused, organized, and productive.
            </p>

            <div className="features__grid">
                {features.map((f, index) => (
                    <div className={`feature-card feature-card--${index + 1}`} key={f.id}>
                        <div className="feature-card__iconBox">
                            <div className="feature-card__iconBox">
                                <img
                                    src={f.icon}
                                    alt={f.title}
                                    className="feature-card__icon"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <h3 className="feature-card__title">{f.title}</h3>
                        <p className="feature-card__desc">{f.description}</p>
                        <span className="feature-card__tag">{f.tag}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}