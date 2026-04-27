 import img1 from "../assets/images/img1.jpg";

export default function Accueil() {
  return (
    <section id="accueil" className="accueil">
      <div className="accueil__image-wrap">
        <img
          src={img1}
          className="accueil__image"
        />
      </div>

      <div className="accueil__text">
        <h2>À propos</h2>
        <p>
          Niché au cœur de Paris, l'Hôtel Lumière vous accueille dans un cadre exceptionnel
          alliant élégance contemporaine et confort raffiné. Nos équipes sont à votre
          disposition pour rendre votre séjour inoubliable, entre gastronomie, bien-être
          et découverte de la Ville Lumière.
        </p>
      </div>
    </section>
  );
}