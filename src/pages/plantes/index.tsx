import { useState } from "react";
import { fetchPlantsData } from "../api/api";
import { motion } from "framer-motion";
import Image from "next/image";

type PlantData = {
  name: string;
  subtitle: string;
  sunlight: string;
  watering: string;
  blooming: string;
  tips: string;
  image1: string; // ID Google Drive
  image2: string; // ID Google Drive
};

export default function Carousel({ plants }: { plants: PlantData[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % plants.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + plants.length) % plants.length);
  };

  // Animation variants for motion
  const variants = {
    center: {
      scale: 1,
      x: 0,
      opacity: 1,
      zIndex: 20,
    },
    left: {
      scale: 0.9,
      x: "-100%",
      opacity: 0.8,
      zIndex: 10,
    },
    right: {
      scale: 0.9,
      x: "100%",
      opacity: 0.8,
      zIndex: 10,
    },
    hidden: {
      opacity: 0,
      zIndex: 0,
    },
  };

  return (
    <div className="relative bg-black flex flex-col items-center justify-center overflow-hidden mt-5">
      {/* Décorations de fleurs */}
      <img
        src="/images/decorations/fleurs-HautGauche.png"
        alt="Haut Gauche"
        className="absolute top-0 left-0 w-[25vmin] z-10"
      />
      <img
        src="/images/decorations/fleurs-HautDroite.png"
        alt="Haut Droite"
        className="absolute top-[10%] right-0 w-[15vmin] z-10"
      />
      <img
        src="/images/decorations/fleurs-BasGauche.png"
        alt="Bas Gauche"
        className="absolute bottom-0 left-0 w-[35vmin] z-10"
      />
      <img
        src="/images/decorations/fleurs-BasDroite.png"
        alt="Bas Droite"
        className="absolute bottom-0 right-0 w-[35vmin] z-10"
      />

      {/* Titre */}
      <h1 className="font-sacramento text-5xl sm:text-7xl font-bold text-gold text-center leading-tight sm:leading-normal mt-10 z-20">
        Conseils d&apos;entretien
      </h1>
      <h2 className="text-lg sm:text-2xl font-bold text-white mb-8 text-center leading-tight sm:leading-normal z-20">
        Pour des fleurs en pleine santé,<br className="sm:hidden" /> plus longtemps
      </h2>

      {/* Carrousel */}
      <div className="relative w-screen h-[80vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
        {plants.map((plant, index) => {
          const position =
            index === currentIndex
              ? "center"
              : index === (currentIndex - 1 + plants.length) % plants.length
              ? "left"
              : index === (currentIndex + 1) % plants.length
              ? "right"
              : "hidden";

          return (
            <motion.div
              key={plant.name}
              className="absolute w-[90vw] h-[80vh] sm:w-[50vw] sm:h-[70vmin]"
              variants={variants}
              animate={position}
              initial={position}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
                duration: 1.5,
              }}
            >
              {position === "center" ? (
                <div className="relative bg-black rounded-[50px] border-[8px] border-gold overflow-hidden h-full w-full shadow-lg flex flex-col items-center p-6 sm:p-8 text-white">
                  {/* Images */}
                  <div className="h-1/3 w-full flex justify-center gap-4 mb-4">
                    <div className="relative w-1/2 h-full">
                      <Image
                        src={plant.image1}
                        alt={`${plant.name} image 1`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <div className="relative w-1/2 h-full">
                      <Image
                        src={plant.image2}
                        alt={`${plant.name} image 2`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  </div>

                  {/* Texte principal */}
                  <h2 className="text-2xl sm:text-3xl text-white font-bold text-center">
                    {plant.name.toUpperCase()}
                  </h2>
                  <h3 className="text-lg sm:text-xl text-center mb-6 italic">
                    {plant.subtitle}
                  </h3>

                  {/* Icônes et informations */}
                  <div className="flex flex-col gap-4 text-left text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <img
                        src="/icons/sunlight.png"
                        alt="Sunlight Icon"
                        className="w-16 h-16"
                      />
                      <p>{plant.sunlight}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="/icons/watering.png"
                        alt="Watering Icon"
                        className="w-16 h-16"
                      />
                      <p>{plant.watering}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="/icons/blooming.png"
                        alt="Blooming Icon"
                        className="w-16 h-16"
                      />
                      <p>{plant.blooming}</p>
                    </div>
                  </div>

                  {/* Conseils */}
                  <div className="text-center">
                    <h4 className="text-gold text-lg sm:text-xl font-bold mb-2">
                      Conseils :
                    </h4>
                    <p>{plant.tips}</p>
                  </div>
                </div>
              ) : (
                <div className="relative bg-gray-800 rounded-lg overflow-hidden h-full w-full shadow-lg">
                  <Image
                    src={plant.image1}
                    alt={`${plant.name} image 1`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Boutons de contrôle */}
      <div className="flex items-center justify-center gap-4 mt-4 mb-10">
        <button
          onClick={handlePrevious}
          className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-500"
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 bg-gray-700 text-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-500"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const plants = (await fetchPlantsData()) || [];
  return { props: { plants } };
}
