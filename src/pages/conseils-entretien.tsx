import Link from "next/link";

export default function ConseilsEntretien() {
  return (
    <main className="bg-white text-gray-800 min-h-screen p-4">
      {/* Titre principal */}
      <header className="text-center py-8 bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500 text-white shadow-lg rounded-lg mb-8">
        <h1 className="text-4xl font-bold">Conseils d&apos;entretien</h1>
        <p className="text-lg mt-2">
          Prenez soin de vos fleurs et plantes avec nos conseils essentiels.
        </p>
      </header>

      <section className="max-w-6xl mx-auto space-y-12">
        {/* Conseils pour les fleurs */}
        <div className="bg-pink-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">
            Conseils généraux pour les fleurs
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>
              Changez l&apos;eau du vase tous les deux jours pour éviter la
              prolifération des bactéries.
            </li>
            <li>
              Coupez les tiges en biais avec un couteau ou une paire de ciseaux
              bien aiguisés pour faciliter l&apos;absorption de l&apos;eau.
            </li>
            <li>
              Évitez d&apos;exposer vos fleurs à la lumière directe du soleil ou
              à proximité de sources de chaleur.
            </li>
            <li>
              Ajoutez un conservateur pour fleurs dans l&apos;eau pour prolonger
              leur durée de vie.
            </li>
          </ul>
        </div>

        {/* Conseils pour les plantes */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Conseils généraux pour les plantes
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>
              Arrosez vos plantes en fonction de leurs besoins : attendez que la
              couche supérieure du terreau soit sèche avant d&apos;arroser à
              nouveau.
            </li>
            <li>
              Placez vos plantes dans un endroit où elles reçoivent une lumière
              indirecte et évitez les courants d&apos;air.
            </li>
            <li>
              Fertilisez vos plantes une fois par mois pendant la période de
              croissance (printemps et été).
            </li>
            <li>
              Dépoussiérez les feuilles régulièrement avec un chiffon humide
              pour permettre une meilleure photosynthèse.
            </li>
            <li>
              Taillez les feuilles mortes ou jaunies pour encourager une
              croissance saine.
            </li>
          </ul>
        </div>

        {/* Section pour pages spécifiques */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center ">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Explorez nos guides spécifiques
          </h2>
          <p className="text-gray-700 mb-6">
            Chaque plante est unique ! Découvrez des conseils d&apos;entretien
            spécifiques pour vos plantes et fleurs préférées sur leurs pages
            dédiées.
          </p>
          <Link
            href="/guides"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Explorer les guides
          </Link>
        </div>
      </section>
    </main>
  );
}
