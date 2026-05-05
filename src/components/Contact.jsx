import { useState } from "react";
import "../styles/Contact.css";

const empty = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = (data) => {
    const e = {};
    if (!data.name.trim()) e.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Enter a valid email address.";
    if (data.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
    return e;
  };

  const handleChange = (e) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    // Real-time: clear error once field is valid
    const e2 = validate(updated);
    setErrors((prev) => ({ ...prev, [e.target.name]: e2[e.target.name] || "" }));
  };

  const handleSubmit = () => {
    const e = validate(form);
    if (Object.keys(e).length) { setErrors(e); return; }
    setSuccess(true);
    setForm(empty);
    setErrors({});
  };

  return (
    <section className="contact" id="contact">
      <p className="section__label">CONTACT</p>
      <h2 className="section__title">Ready to Get Started?</h2>
      <p className="section__sub">Send us a message and our team will help you choose the right plan.</p>

      <div className="contact__box">
        {/* Left panel */}
        <div className="contact__panel">
          <h3>Let's talk about your workflow</h3>
          <p>Get a quick recommendation for the best plan, features, and launch setup for your team.</p>
          <div className="contact__detail">
              <img
                  src="/icons/fastresponse.svg"
                  alt="icon"
                  className="contact__detail-icon"
              />
            <div>
              <strong>Fast response</strong>
              <span>We usually reply within one business day.</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="contact__form">
          {success && (
            <div className="contact__success">
              Message sent! We'll get back to you soon.
            </div>
          )}

          <div className="field">
            <label>Full Name</label>
            <input
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? "field__input--error" : ""}
            />
            {errors.name && <span className="field__error">{errors.name}</span>}
          </div>

          <div className="field">
            <label>Email Address</label>
            <input
              name="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? "field__input--error" : ""}
            />
            {errors.email && <span className="field__error">{errors.email}</span>}
          </div>

          <div className="field">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Tell us how we can help your team..."
              value={form.message}
              onChange={handleChange}
              rows={4}
              className={errors.message ? "field__input--error" : ""}
            />
            {errors.message && <span className="field__error">{errors.message}</span>}
          </div>

          <button className="btn btn--primary contact__submit" onClick={handleSubmit}>
            Send Message →
          </button>
        </div>
      </div>
    </section>
  );
}
