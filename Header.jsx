  import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="header__logo">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="2"
            width="28"
            height="28"
            rx="4"
            stroke="#b8983f"
            strokeWidth="2"
          />
          <path
            d="M8 24V10h4v5h8V10h4v14h-4v-6H12v6H8z"
            fill="#b8983f"
          />
        </svg>

        <span className="header__logo-text">Hôtel Lumière</span>
      </div>

      {/* Nav */}
      <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
        <a href="#accueil" onClick={() => setMenuOpen(false)}>Accueil</a>
        <a href="#chambres" onClick={() => setMenuOpen(false)}>Chambres</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>

      {/* Button */}
      <button className="header__cta">Connexion</button>

      {/* Burger menu */}
      <button
        className="header__burger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}