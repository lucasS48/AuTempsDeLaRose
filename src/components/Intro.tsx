const Intro = () => {
  return (
    <div className="py-10 sm:py-20 px-6 sm:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-40">
        {/* Titre à gauche */}
        <div>
          <h2 className="text-sm font-semibold mb-2">Conseils</h2>
          <h1 className="text-4xl sm:text-5xl font-bold">
            Prenez soin de vos plantes
          </h1>
        </div>

        {/* Texte court et boutons à droite */}
        <div className="lg:pl-8">
          <p className="text-base mb-4 sm:text-xl">
            Des conseils pratiques et personnalisés pour garder vos plantes en
            pleine santé.
          </p>
          <div className="flex space-x-4">
            <button className="bg-grey text-white px-4 py-2 font-semibold rounded hover:bg-gray-600 transition duration-300">
              En savoir plus
            </button>
            <button className="border border-grey px-4 py-2 font-semibold rounded hover:bg-gray-100 transition duration-300">
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
