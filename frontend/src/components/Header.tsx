import Link from "next/link";

export default function Header() {
  return (
    <header className="navbar">
      <nav className="nav0">
        <ul>
          <li className="nav1">
            <Link href="/">Accueil</Link>
          </li>
          <li className="nav1">
            <Link href="/foods">Nos Plats</Link>
          </li>
          <li className="nav2">
            <Link href="/add-food">Ajoute un plat</Link>
          </li>
          <li className="nav3">
            <Link href="/food-details">Détails de vos plats</Link>
          </li>
          <li className="nav3">
            <Link href="/customer-advice">Les avis clients</Link>
          </li>
          <li className="nav3">
            <Link href="/blog">Notre Blog</Link>
          </li>
          <li className="nav3">
            <Link href="/contact">Contacte</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
