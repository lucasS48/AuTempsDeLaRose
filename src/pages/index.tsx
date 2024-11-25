import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen p-4 flex flex-col items-center">
      {/* Section Héros */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          Bienvenue chez <span className="italic">Au Temps de la Rose</span>
        </h1>
        <p className="text-lg mb-6">
          Découvrez la beauté intemporelle des fleurs et des plantes,
          soigneusement sélectionnées pour illuminer votre quotidien.
        </p>
        <Link
          href="/galerie"
          className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-600 transition"
        >
          Explorer la Galerie
        </Link>
      </section>

      {/* Section Présentation */}
      <section className="bg-pink-50 rounded-lg shadow-md p-6 w-full max-w-3xl mt-8">
        <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">
          Pourquoi nous choisir ?
        </h2>
        <p className="text-gray-700 text-center">
          Chez <span className="font-semibold">Au Temps de la Rose</span>, nous
          croyons que chaque fleur raconte une histoire. Nos experts vous
          accompagnent dans le choix des plantes qui conviennent le mieux à vos
          besoins, avec des conseils d&apos;entretien personnalisés.
        </p>
      </section>

      {/* Section Catégories */}
      <section className="w-full max-w-4xl mt-12">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
          Nos catégories populaires
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <CategoryCard
            title="Bouquets"
            image="/images/bouquet.jpg"
            link="/categorie/bouquets"
          />
          <CategoryCard
            title="Plantes d'intérieur"
            image="/images/plante.jpg"
            link="/categorie/plantes-interieur"
          />
          <CategoryCard
            title="Fleurs coupées"
            image="/images/fleur.jpg"
            link="/categorie/fleurs-coupees"
          />
        </div>
      </section>

      {/* Section Conseils d'entretien */}
      <section className="w-full max-w-4xl mt-12 bg-pink-50 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
          Conseils d&apos;entretien
        </h2>
        <p className="text-gray-700 text-center mb-6">
          Découvrez les meilleures pratiques pour prendre soin de vos fleurs et
          plantes, afin qu&apos;elles restent belles et en bonne santé plus
          longtemps.
        </p>
        <div className="flex justify-center">
          <Link
            href="/conseils-entretien"
            className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-600 transition"
          >
            Lire nos conseils
          </Link>
        </div>
      </section>
    </main>
  );
}

function CategoryCard({
  title,
  image,
  link,
}: {
  title: string;
  image: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <div className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
        <img
          src={image}
          alt={title}
          className="w-full h-32 sm:h-40 object-cover"
        />
        <div className="p-2 bg-white text-center">
          <h3 className="font-semibold text-gray-800">{title}</h3>
        </div>
      </div>
    </Link>
  );
}
