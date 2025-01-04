import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white text-white py-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 flex items-center relative">
        {/* Logo à droite */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <Image
            src="/images/rose-logo.webp"
            alt="Logo de la boutique"
            width={60} // Set width according to your design
            height={40} // Set height according to your design
            priority // Optimize for LCP by loading the logo eagerly
          />
        </div>

        {/* Nom de la boutique centré */}
        <div className="flex-1 text-center">
          <Link href="/" className="text-xl font-bold">
            <span className="text-black font-josefinslab text-2xl">
              Au Temps de la Rose
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
