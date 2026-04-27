 import Header from "./Component/Header";
import Accueil from "./Component/Accueil";
import Services from "./Component/Services";
import Chambres from "./Component/Chambres";
import Contact from "./Component/Contact";

import C1 from "./assets/images/C1.jpg";
import C2 from "./assets/images/C2.jpg";
import C3 from "./assets/images/C3.jpg";

import "./App.css";

// ── SERVICES DATA ─────────────────────────────
const servicesData = [
  { nom: "Spa" },
  { nom: "Restaurant" },
  { nom: "Wi-Fi" },
  { nom: "Piscine" },
  { nom: "Parking" },
  { nom: "Room Service" },
];

// ── CHAMBRES DATA ─────────────────────────────
const chambresData = [
  {
    nom: "Suite Deluxe",
    image: C1,
    prix: "€160",
    description: "Vue sur la Seine, lit king-size, salle de bain marbre.",
  },
  {
    nom: "Chambre Standard",
    image: C2,
    prix: "€129",
    description: "Vue sur cour, lit king-size, salle de bain moderne.",
  },
  {
    nom: "Suite Familiale",
    image: C3,
    prix: "€197",
    description: "Vue sur le jardin, lit king-size, salle de bain marbre.",
  },
];

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Accueil />
        <Services services={servicesData} />
        <Chambres chambres={chambresData} />
        <Contact />
      </main>
    </div>
  );
}