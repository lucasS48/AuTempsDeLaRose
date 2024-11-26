import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Photo = {
  id: string;
  name: string;
};

type Category = {
  id: string;
  name: string;
  photos: Photo[];
};

export default function Galerie() {
  const [categories, setCategories] = useState<Category[]>([]);
  const PARENT_FOLDER_ID = "1mtXYIUsUH8sBKw0LbXKfnkFnZiB_86eg"; // ID du dossier principal
  const API_KEY = "AIzaSyDSRIRF1QzXiOMqutixiGmcbJAg44JYOp8"; // Votre clé API

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const foldersRes = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${PARENT_FOLDER_ID}'+in+parents+and+mimeType='application/vnd.google-apps.folder'&key=${API_KEY}&fields=files(id,name)`
        );
        const foldersData = await foldersRes.json();
        const folders = foldersData.files || [];

        const categoriesWithPhotos = await Promise.all(
          folders.map(async (folder: { id: string; name: string }) => {
            const photosRes = await fetch(
              `https://www.googleapis.com/drive/v3/files?q='${folder.id}'+in+parents+and+mimeType!='application/vnd.google-apps.folder'&key=${API_KEY}&fields=files(id,name)`
            );
            const photosData = await photosRes.json();
            const photos = photosData.files || [];
            return {
              id: folder.id,
              name: folder.name,
              photos,
            };
          })
        );

        setCategories(categoriesWithPhotos);
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories :", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <main className="bg-white text-gray-800 min-h-screen">
      <h1 className="text-4xl font-bold text-pink-600 text-center mt-4">
        Galerie photos
      </h1>

      {/* Contenu principal */}
      <div className="pt-8 p-4">
        {categories.map((category) => (
          <section
            key={category.id}
            className="mb-16 p-6 bg-pink-50 rounded-lg shadow-lg"
          >
            {/* Titre de catégorie */}
            <div className="flex items-center justify-center mb-8">
              <h2 className="text-3xl font-bold text-pink-600 relative">
                {category.name}
                <span className="block h-1 w-16 bg-pink-300 mx-auto mt-2"></span>
              </h2>
            </div>

            {/* Grille des photos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.photos.map((photo) => (
                <div
                  key={photo.id}
                  className="relative w-full h-48 lg:h-64 bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:scale-105"
                >
                  <Image
                    src={`https://drive.google.com/uc?id=${photo.id}`}
                    alt={photo.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
