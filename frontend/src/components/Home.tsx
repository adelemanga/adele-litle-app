// pages/index.js
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="video-container">
      <iframe
        className="background-video"
        src="https://www.youtube.com/embed/L1GYRZ2FXv8?autoplay=1&mute=1&loop=1&playlist=L1GYRZ2FXv8"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      <div className="content">
        <p className="text">
          <h1 className="home">Le Restaurants Français !</h1>
          <br />
          Bienvenue chez Le Bon Goût, un restaurant authentique français où
          l’art culinaire rencontre l'hospitalité chaleureuse dans une
          atmosphère conviviale et élégante. À propos de nous Situé au cœur de
          Colmar, Le Bon Goût incarne l'essence même de la cuisine française
          traditionnelle. Depuis 2024, nous avons à cœur de partager avec nos
          invités les saveurs et le raffinement de notre patrimoine
          gastronomique. Notre Philosophie Nous croyons que chaque repas doit
          être une expérience mémorable, un moment où les saveurs se conjuguent
          pour éveiller les sens. Nos chefs talentueux utilisent des ingrédients
          locaux et de saison pour créer des plats authentiques, inspirés des
          recettes classiques françaises mais revisités avec une touche
          contemporaine.
        </p>
      </div>
      <br />
      <br />
      <br />
      <h1>Nos recommandations</h1>
      <table className="presentation">
        <td>
          <img
            className="img-home"
            src="https://img.cuisineaz.com/700x560/2024/03/06/i197655-tous-des-chefs.webp"
            alt="image"
          />
          <figcaption className="figcaption">Philippe Etchebest</figcaption>
        </td>
        <td>
          {" "}
          <img
            className="img-home"
            src="https://www.premium-communication.fr/cache/f/b/6/4/4/fb6445e4cf888c189e1ee2245865017cf7337551.jpeg"
            alt="image"
          />
          <figcaption className="figcaption">Phillipe Etchebest</figcaption>
        </td>
        <td>
          {" "}
          <img
            className="img-home"
            src="https://cdn.eat-list.fr/blog/article/top-10-des-chefs-francais-les-plus-influents_6415.jpg"
            alt="image"
          />
          <figcaption>Cyril Lignac</figcaption>
        </td>
      </table>
    </div>
  );
}
