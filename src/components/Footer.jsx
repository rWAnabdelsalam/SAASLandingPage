import { footer } from "../data/content";
import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__brand">
                    <span className="footer__logo">{footer.logo}</span>
                    <p>{footer.tagline}</p>

                    <div className="footer__socials">
                        <a href="#" aria-label="LinkedIn">in</a>
                        <a href="#" aria-label="X">X</a>
                        <a href="#" aria-label="Facebook">f</a>
                        <a href="#" aria-label="Instagram" className="footer__social-icon">
                            <svg viewBox="0 0 24 24" className="footer__svg">
                                <circle
                                    cx="12.5"
                                    cy="12"
                                    r="5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                />
                                <circle
                                    cx="21"
                                    cy="5"
                                    r="1.2"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                <FooterColumn title="QUICK LINKS" links={footer.quickLinks} />
                <FooterColumn title="PRODUCT" links={footer.product} />
                <FooterColumn title="LEGAL" links={footer.legal} />
            </div>

            <div className="footer__bottom">
                <span>{footer.copy}</span>
            </div>
        </footer>
    );
}

function FooterColumn({ title, links }) {
    return (
        <div className="footer__col">
            <h4>{title}</h4>

            {links.map((link) => (
                <a href={link.href} key={link.label}>
                    {link.label}
                </a>
            ))}
        </div>
    );
}