import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-pink-500 text-white py-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo SVG de démonstration */}
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
          onClick={() => alert("Menu mobile à implémenter")}
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
              d="M4 6h16M4 12h16m-7 6h7"
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
