import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black-soft text-white py-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo et nom de la boutique */}
        <Link href="/" className="text-xl font-bold flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 10.25c-1.24 0-2.25-1.01-2.25-2.25S10.76 7.75 12 7.75 14.25 8.76 14.25 10 13.24 12.25 12 12.25z"
            />
          </svg>
          <span>Au Temps de la Rose</span>
        </Link>

        {/* Menu hamburger */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 hover:text-gray-200 transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Navigation (desktop uniquement) */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-200 transition">
            Accueil
          </Link>
          <Link href="/galerie" className="hover:text-gray-200 transition">
            Galerie
          </Link>
          <Link href="/conseils-entretien" className="hover:text-gray-200 transition">
            Conseils
          </Link>
          <Link href="/guides" className="hover:text-gray-200 transition">
            Guides
          </Link>
          <Link href="/plantes" className="hover:text-gray-200 transition">
            Plantes
          </Link>
        </nav>
      </div>

      {/* Menu déroulant (mobile uniquement) */}
      {menuOpen && (
        <nav className="bg-black-soft text-white md:hidden shadow-lg">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link
                href="/"
                className="block py-2 px-4 rounded hover:bg-gold-veryDark transition"
                onClick={() => setMenuOpen(false)}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/galerie"
                className="block py-2 px-4 rounded hover:bg-gold-veryDark transition"
                onClick={() => setMenuOpen(false)}
              >
                Galerie
              </Link>
            </li>
            <li>
              <Link
                href="/conseils-entretien"
                className="block py-2 px-4 rounded hover:bg-gold-veryDark transition"
                onClick={() => setMenuOpen(false)}
              >
                Conseils
              </Link>
            </li>
            <li>
              <Link
                href="/guides"
                className="block py-2 px-4 rounded hover:bg-gold-veryDark transition"
                onClick={() => setMenuOpen(false)}
              >
                Guides
              </Link>
            </li>
            <li>
              <Link
                href="/plantes"
                className="block py-2 px-4 rounded hover:bg-gold-veryDark transition"
                onClick={() => setMenuOpen(false)}
              >
                Plantes
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
