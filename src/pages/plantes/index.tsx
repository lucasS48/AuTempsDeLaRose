import { useState, useEffect } from "react";
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
  const [isFlipped, setIsFlipped] = useState(false);
  const [fontSizes, setFontSizes] = useState<string[]>([]);

  useEffect(() => {
    const calculateFontSizes = () => {
      const newFontSizes = plants.map((plant) => {
        const tempDiv = document.createElement("div");
        tempDiv.style.position = "absolute";
        tempDiv.style.visibility = "hidden";
        tempDiv.style.fontSize = "16px";
        tempDiv.style.width = "90%";
        tempDiv.style.lineHeight = "1.5";
        tempDiv.innerHTML = `${plant.name.toUpperCase()}<br>${
          plant.subtitle
        }<br>${plant.sunlight}<br>${plant.watering}<br>${plant.blooming}<br>${
          plant.tips
        }`;
        document.body.appendChild(tempDiv);

        let fontSize = 16;
        while (tempDiv.scrollHeight > 500 && fontSize > 10) {
          fontSize -= 1;
          tempDiv.style.fontSize = `${fontSize}px`;
        }

        document.body.removeChild(tempDiv);
        return `${fontSize}px`;
      });
      setFontSizes(newFontSizes);
    };

    calculateFontSizes();
    window.addEventListener("resize", calculateFontSizes);
    return () => window.removeEventListener("resize", calculateFontSizes);
  }, [plants]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % plants.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + plants.length) % plants.length);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

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
    <div className="relative bg-white flex flex-col items-center justify-center overflow-hidden">
      {/* Carrousel */}
      <div className="relative w-screen h-[80vh] sm:h-[70vh] flex items-center justify-center overflow-hidden mt-10">
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
              {!isFlipped ? (
                <div
                  className="relative bg-black rounded-[50px] overflow-hidden h-full w-full shadow-lg cursor-pointer"
                  onClick={handleFlip}
                >
                  <Image
                    src={plant.image1}
                    alt={`${plant.name} front image`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[50px]"
                  />
                  <div className="absolute bottom-0 w-full bg-[url('/images/bg-vieux-papier2.webp')] p-4 text-center text-white">
                    <h3 className="text-2xl text-black sm:text-3xl lg:text-4xl">
                      {plant.subtitle}
                    </h3>
                    <h2 className="text-4xl font-josefinslab font-bold text-gold sm:text-3xl lg:text-4xl">
                      {plant.name}
                    </h2>

                    <button
                      className="mt-8 bg-grey text-whitek px-4 py-2 rounded-md font-semibold hover:bg-yellow-500"
                      onClick={handleFlip}
                    >
                      Voir les conseils
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className="relative bg-[url('/images/bg-vieux-papier.webp')] bg-cover rounded-[50px] border-[8px] border-gold overflow-hidden h-full w-full shadow-lg flex flex-col items-center p-6 sm:p-8 text-black cursor-pointer flipped-card"
                  onClick={handleFlip}
                  style={{
                    fontSize: fontSizes[index],
                    overflowY: "scroll",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gold text-center mt-4 font-josefinslab font-bold">
                    {plant.name.toUpperCase()}
                  </h2>
                  <h3 className="text-lg sm:text-xl lg:text-2xl text-center mb-6 italic">
                    {plant.subtitle}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    <div className="flex items-center gap-2">
                      <img
                        src="/icons/soleil.png"
                        alt="Sunlight Icon"
                        className="w-12 h-12"
                      />
                      <p className="text-lg">{plant.sunlight}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="/icons/arrosoir.png"
                        alt="Watering Icon"
                        className="w-12 h-12"
                      />
                      <p className="text-lg">{plant.watering}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="/icons/floraison.png"
                        alt="Blooming Icon"
                        className="w-12 h-12"
                      />
                      <p className="text-lg">{plant.blooming}</p>
                    </div>
                  </div>

                  <div className="bg-grey p-4 mt-6 rounded-md shadow-sm">
                    <h4 className="text-gold text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                      Conseils :
                    </h4>
                    <p className="text-white">{plant.tips}</p>
                  </div>
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
