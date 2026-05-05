import { useState } from "react";
import { nav } from "../data/content";
import "../styles/Navbar.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const scrollTo = (id) => {
        const el = document.getElementById(id.toLowerCase());
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar__inner">
                <span className="navbar__logo">{nav.logo}</span>

                <ul className="navbar__links">
                    {nav.links.map((link) => (
                        <li key={link}>
                            <button onClick={() => scrollTo(link)}>{link}</button>
                        </li>
                    ))}
                </ul>

                <button className="navbar__cta" onClick={() => scrollTo("contact")}>
                    {nav.cta}
                </button>

                <button
                    className={`navbar__burger ${open ? "open" : ""}`}
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            <div className={`navbar__drawer ${open ? "navbar__drawer--open" : ""}`}>
                {nav.links.map((link) => (
                    <button key={link} onClick={() => scrollTo(link)}>
                        {link}
                    </button>
                ))}

                <button className="btn" onClick={() => scrollTo("contact")}>
                    {nav.cta}
                </button>
            </div>
        </nav>
    );
}