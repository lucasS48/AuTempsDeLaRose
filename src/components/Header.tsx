import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white text-white py-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        {/* Espace réservé pour équilibrer le titre */}
        <div className="w-10 h-10" />

        {/* Nom de la boutique centré */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <span className="text-black font-josefinslab text-xl leading-tight text-center block sm:text-lg break-words">
            Au Temps<br />de la Rose
          </span>
        </div>

        {/* Logo à droite */}
        <div className="flex-shrink-0">
          <Image
            src="/icons/rose.webp"
            alt="Logo de la boutique"
            width={40}
            height={40}
            priority
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
