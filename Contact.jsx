    import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ nom: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact</h2>
      <p className="contact__address">12 Rue de Rivoli, 75001 Paris &nbsp;|&nbsp; +33 1 42 60 34 56</p>

      <form className="contact__form" onSubmit={handleSubmit}>
        <input
          className="contact__input"
          type="text"
          name="nom"
          placeholder="Nom"
          value={form.nom}
          onChange={handleChange}
          required
        />
        <input
          className="contact__input"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="contact_input contact_textarea"
          name="message"
          placeholder="Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
        />
        <button className="contact__btn" type="submit">
          {sent ? "Message envoyé ✓" : "Envoyer"}
        </button>
      </form>
    </section>
  );
}