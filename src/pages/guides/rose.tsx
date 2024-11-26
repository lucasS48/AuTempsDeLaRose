import Image from "next/image";
import Link from "next/link";

export default function RoseGuide() {
  return (
    <main className="bg-white text-gray-800 min-h-screen p-4">
      {/* En-tête visuelle */}
      <header className="relative w-full h-64 sm:h-80 mb-8">
        <Image
          src="/images/rose.jpg"
          alt="Rose"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-lg flex items-end p-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Conseils pour entretenir vos roses
          </h1>
        </div>
      </header>

      {/* Contenu principal */}
      <section className="max-w-3xl mx-auto">
        {/* Informations générales */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">
            Pourquoi choisir les roses ?
          </h2>
          <p className="text-gray-700 leading-7">
            Les roses, symboles intemporels d&apos;amour et de beauté, sont parmi
            les fleurs les plus populaires. Leurs couleurs variées et leur parfum
            envoûtant les rendent incontournables dans les jardins et les
            bouquets.
          </p>
        </div>

        {/* Conseils d'entretien */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">
            Conseils d&apos;entretien
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>
              Changez l&apos;eau du vase tous les deux jours pour préserver la
              fraîcheur des roses coupées.
            </li>
            <li>
              Taillez les tiges en biais avec un couteau ou des ciseaux bien
              aiguisés.
            </li>
            <li>
              Évitez l&apos;exposition directe au soleil ou à des sources de
              chaleur.
            </li>
            <li>
              Utilisez un conservateur pour fleurs dans l&apos;eau pour
              prolonger leur durée de vie.
            </li>
            <li>
              Pour les rosiers, taillez régulièrement pour stimuler une
              floraison abondante.
            </li>
          </ul>
        </div>

        {/* Section visuelle */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">
            Roses en images
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="relative w-full h-32 sm:h-40 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/rose-closeup.jpg"
                alt="Rose en gros plan"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative w-full h-32 sm:h-40 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/rose-bouquet.jpg"
                alt="Bouquet de roses"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative w-full h-32 sm:h-40 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/rose-garden.jpg"
                alt="Rosier dans un jardin"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Appel à l'action */}
      <footer className="text-center mt-8">
        <Link
          href="/guides"
          className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-600 transition inline-block"
        >
          Découvrir d&apos;autres guides
        </Link>
      </footer>
    </main>
  );
}
