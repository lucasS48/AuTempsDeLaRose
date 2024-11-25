import { useState } from "react";
import Image from "next/image";

type Plant = {
  id: string;
  name: string;
  image: string;
  link: string;
};

export default function Guides() {
  const [searchTerm, setSearchTerm] = useState("");

  // Liste des plantes (à remplacer par une API ou une source de données dynamique)
  const plants: Plant[] = [
    { id: "1", name: "Rose", image: "/images/rose.jpg", link: "/guides/rose" },
    {
      id: "2",
      name: "Orchidée",
      image: "/images/orchidee.jpg",
      link: "/guides/orchidee",
    },
    { id: "3", name: "Lys", image: "/images/lys.jpg", link: "/guides/lys" },
    {
      id: "4",
      name: "Succulente",
      image: "/images/succulente.jpg",
      link: "/guides/succulente",
    },
    {
      id: "5",
      name: "Tulipe",
      image: "/images/tulipe.jpg",
      link: "/guides/tulipe",
    },
    {
      id: "6",
      name: "Cactus",
      image: "/images/cactus.jpg",
      link: "/guides/cactus",
    },
    {
      id: "7",
      name: "Lavande",
      image: "/images/lavande.jpg",
      link: "/guides/lavande",
    },
    {
      id: "8",
      name: "Basilic",
      image: "/images/basilic.jpg",
      link: "/guides/basilic",
    },
  ];

  // Filtrer les plantes en fonction de la recherche
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bg-white text-gray-800 min-h-screen p-4">
      <h1 className="text-4xl font-bold text-pink-600 text-center mb-8">
        Guides spécifiques
      </h1>

      {/* Champ de recherche */}
      <div className="max-w-3xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Recherchez une fleur ou une plante..."
          className="w-full px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Résultats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
        {filteredPlants.length > 0 ? (
          filteredPlants.map((plant) => (
            <a
              key={plant.id}
              href={plant.link}
              className="bg-pink-50 rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative w-full h-40">
                <Image
                  src={plant.image}
                  alt={plant.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {plant.name}
                </h3>
              </div>
            </a>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">
            Aucun résultat trouvé.
          </p>
        )}
      </div>
    </main>
  );
}
