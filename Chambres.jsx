import Chambre from "./Chambre";

// Reçoit chambres (tableau d'objets {nom, image, prix, description}) en props
export default function Chambres({ chambres }) {
  return (
    <section id="chambres" className="chambres">
      <h2 className="section-title">Nos Chambres</h2>
      <div className="chambres__grid">
        {chambres.map((chambre, index) => (
          <Chambre
            key={index}
            nom={chambre.nom}
            image={chambre.image}
            prix={chambre.prix}
            description={chambre.description}
          />
        ))}
      </div>
    </section>
  );
}