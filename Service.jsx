// Icônes SVG pour chaque service
const ICONS = {
  Spa: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
      <path d="M24 8 C24 8 16 16 16 24 C16 28.4 19.6 32 24 32 C28.4 32 32 28.4 32 24 C32 16 24 8 24 8Z" stroke="#1b2d4f" strokeWidth="2" fill="none"/>
      <path d="M14 34 C14 34 10 30 8 26" stroke="#1b2d4f" strokeWidth="2" strokeLinecap="round"/>
      <path d="M34 34 C34 34 38 30 40 26" stroke="#1b2d4f" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10 38 Q24 42 38 38" stroke="#1b2d4f" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M8 42 Q24 46 40 42" stroke="#1b2d4f" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M24 14 C24 14 20 18 20 22" stroke="#1b2d4f" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Restaurant: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
      <path d="M14 6 L14 20 C14 23.3 16.7 26 20 26 L20 42" stroke="#1b2d4f" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 6 L20 18" stroke="#1b2d4f" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 6 L8 18" stroke="#1b2d4f" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 18 Q14 22 20 18" stroke="#1b2d4f" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M32 6 C32 6 38 10 38 20 C38 24 36 26 32 26 L32 42" stroke="#1b2d4f" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <line x1="32" y1="26" x2="32" y2="6" stroke="#1b2d4f" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  "Wi-Fi": (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
      <path d="M6 18 C12 12 20 8 24 8 C28 8 36 12 42 18" stroke="#1b2d4f" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M11 24 C15 19 19 17 24 17 C29 17 33 19 37 24" stroke="#1b2d4f" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M16 30 C18.5 27 21 26 24 26 C27 26 29.5 27 32 30" stroke="#1b2d4f" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <circle cx="24" cy="37" r="3" fill="#1b2d4f"/>
    </svg>
  ),
  Piscine: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
      <path d="M6 30 Q12 24 18 30 Q24 36 30 30 Q36 24 42 30" stroke="#1b2d4f" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M6 38 Q12 32 18 38 Q24 44 30 38 Q36 32 42 38" stroke="#1b2d4f" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <circle cx="31" cy="14" r="4" stroke="#1b2d4f" strokeWidth="2" fill="none"/>
      <path d="M31 18 L31 26 L22 22" stroke="#1b2d4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Parking: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
      <rect x="8" y="14" width="32" height="22" rx="3" stroke="#1b2d4f" strokeWidth="2"/>
      <path d="M8 22 L40 22" stroke="#1b2d4f" strokeWidth="1.5"/>
      <circle cx="16" cy="36" r="3" stroke="#1b2d4f" strokeWidth="2" fill="none"/>
      <circle cx="32" cy="36" r="3" stroke="#1b2d4f" strokeWidth="2" fill="none"/>
      <path d="M12 14 L15 8 L33 8 L36 14" stroke="#1b2d4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 22 L20 33" stroke="#1b2d4f" strokeWidth="1.5"/>
      <path d="M28 22 L28 33" stroke="#1b2d4f" strokeWidth="1.5"/>
    </svg>
  ),
  "Room Service": (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
      <ellipse cx="24" cy="30" rx="16" ry="4" stroke="#1b2d4f" strokeWidth="2" fill="none"/>
      <path d="M8 30 L8 34 Q8 38 24 38 Q40 38 40 34 L40 30" stroke="#1b2d4f" strokeWidth="2" fill="none"/>
      <path d="M14 30 C14 22 18 16 24 16 C30 16 34 22 34 30" stroke="#1b2d4f" strokeWidth="2" fill="none"/>
      <line x1="24" y1="10" x2="24" y2="16" stroke="#1b2d4f" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="24" cy="8" r="2" fill="#1b2d4f"/>
    </svg>
  ),
};

// Composant Service réutilisable – reçoit nom et image en props
export default function Service({ nom, image }) {
  return (
    <div className="service-card">
      <div className="service-card__icon">
        {ICONS[nom] || (
          <img src={image} alt={nom} className="service-card__img" />
        )}
      </div>
      <p className="service-card__nom">{nom}</p>
    </div>
  );
}