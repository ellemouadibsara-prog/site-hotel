import Service from "./Service";

// Reçoit services (tableau d'objets {nom, image}) en props
export default function Services({ services }) {
  return (
    <section id="services" className="services">
      <h2 className="section-title">Nos Services</h2>
      <div className="services__grid">
        {services.map((service, index) => (
          <Service
            key={index}
            nom={service.nom}
            image ={service.image}
            emoji={service.emoji}
          />
        ))}
      </div>
    </section>
  );
}