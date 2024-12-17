
import "./Cards.css";
import beautyImage from "../assets/foto-card-beauty.webp";
import fragancesImage from "../assets/foto-card-fragances.avif";
import furnitureImage from "../assets/foto-card-furniture.jpg";

export function Card({backgroundImage, buttonText}) {
  return (
    <div
    className="card"
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
  >
    <button className="card-button">{buttonText}</button>
  </div>
  );
}

export function CardsContainer() {
    return (
      <div className="cards-container">
        <Card backgroundImage={beautyImage}
         buttonText="Productos de Belleza" />
        <Card backgroundImage={fragancesImage}
        buttonText="Perfumes y Fragancias" />
        <Card backgroundImage={furnitureImage}
        buttonText="Muebles y Decoracion" />
      </div>
    );
  }


