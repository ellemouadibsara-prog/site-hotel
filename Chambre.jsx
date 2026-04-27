// Composant Chambre réutilisable – reçoit nom, image, prix, description en props
export default function Chambre({ nom, image, prix, description }) {
  return (
    <div className="chambre-card">
      <div className="chambre-card__img-wrap">
        <img src={image} alt={nom} className="chambre-card__img" />
      </div>
      <div className="chambre-card__body">
        <h3 className="chambre-card__nom">{nom}</h3>
        <span className="chambre-card__prix">{prix} / nuit</span>
        <p className="chambre-card__desc">{description}</p>
        <button className="chambre-card__btn">Réserver</button>
      </div>
    </div>
  );
}