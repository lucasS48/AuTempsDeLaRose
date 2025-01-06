import { useState, useEffect } from "react";
import { fetchPlantsData } from "../api/api";
import { motion, PanInfo } from "framer-motion";
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
  const [flippedStates, setFlippedStates] = useState<boolean[]>([]);
  const [fontSizes, setFontSizes] = useState<string[]>([]);

  useEffect(() => {
    setFlippedStates(plants.map(() => false));

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

  const handleFlip = (index: number) => {
    setFlippedStates((prev) =>
      prev.map((flipped, i) => (i === index ? !flipped : flipped))
    );
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const velocityThreshold = 0.5; // Seuil de vélocité
    const offsetThreshold = 100; // Seuil de déplacement

    if (
      info.offset.x > offsetThreshold ||
      info.velocity.x > velocityThreshold
    ) {
      // Glissement vers la droite
      handlePrevious();
    } else if (
      info.offset.x < -offsetThreshold ||
      info.velocity.x < -velocityThreshold
    ) {
      // Glissement vers la gauche
      handleNext();
    }
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
      <div className="relative w-screen h-[90vh] sm:h-[70vh] flex items-center justify-center overflow-hidden mt-10 ">
        {plants.map((plant, index) => (
          <motion.div
            key={plant.name}
            className="absolute w-[90vw] h-[90vh] sm:w-[50vw] sm:h-[70vmin] perspective"
            variants={variants}
            animate={
              index === currentIndex
                ? "center"
                : index === (currentIndex - 1 + plants.length) % plants.length
                ? "left"
                : index === (currentIndex + 1) % plants.length
                ? "right"
                : "hidden"
            }
            initial="hidden"
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
              duration: 1.5,
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            <motion.div
              className="relative w-full h-full transition-transform duration-700"
              style={{
                transformStyle: "preserve-3d",
                transform: flippedStates[index]
                  ? "rotateY(180deg)"
                  : "rotateY(0deg)",
              }}
            >
              {/* Face avant */}
              <div
                className="absolute w-full h-full backface-hidden"
                style={{
                  transform: "rotateY(0deg)",
                  backfaceVisibility: "hidden",
                }}
                onClick={() => handleFlip(index)}
              >
                <div className="relative bg-white border-[3px] border-gold rounded-[45px] overflow-hidden shadow-md flex flex-col items-center p-4 h-[80vh] w-full">
                  {/* Section image */}
                  <div
                    className="relative mt-4"
                    style={{ width: "98%", height: "80%" }} // Taille de l'image à 90% de la largeur et 70% de la hauteur du parent
                  >
                    <Image
                      src={plant.image1}
                      alt={`${plant.name} front image`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-[40px]"
                    />
                  </div>

                  {/* Section texte */}
                  <div className="mt-6 text-center">
                    <h2 className="text-4xl font-pinyonScript italic text-gold-BIS sm:text-5xl lg:text-6xl">
                      {plant.name}
                    </h2>
                    <h3 className="text-lg font-josefinslab text-black sm:text-lg lg:text-xl">
                      {plant.subtitle}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Face arrière */}
              <div
                className="absolute w-full h-full backface-hidden"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
                onClick={() => handleFlip(index)}
              >
                <div className="relative h-[80vh] w-full shadow-md flex flex-col items-center p-6 sm:p-8 text-black cursor-pointer flipped-card rounded-[45px] border-[3px] border-gold overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/images/bg-gold.jpg')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 bg-white bg-opacity-50"></div>

                  <div
                    className="relative z-10 font-josefinslab"
                    style={{
                      fontSize: fontSizes[index],
                      overflowY: "scroll",
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                    }}
                  >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gold-BIS text-center mt-4 ">
                      {plant.name.toUpperCase()}
                    </h2>
                    <h3 className="font-josefinslab text-lg sm:text-xl lg:text-2xl text-center mb-6 italic">
                      {plant.subtitle}
                    </h3>

                    <div className="grid grid-cols-1 gap-4 w-full">
                      <div className="flex flex-col items-center">
                        <Image
                          src="/icons/soleil.png"
                          alt="Sunlight Icon"
                          width={48}
                          height={48}
                        />
                        <p className="text-lg text-center">{plant.sunlight}</p>
                      </div>

                      <div className="flex flex-col items-center">
                        <Image
                          src="/icons/hydratation.png"
                          alt="Watering Icon"
                          width={48}
                          height={48}
                        />
                        <p className="text-lg text-center">{plant.watering}</p>
                      </div>

                      <div className="flex flex-col items-center">
                        <Image
                          src="/icons/branche.png"
                          alt="Blooming Icon"
                          width={48}
                          height={48}
                        />
                        <p className="text-lg text-center">{plant.blooming}</p>
                      </div>
                    </div>

                    <div className="bg-gold-BIS bg-opacity-50 p-4 mt-6 rounded-[40px] shadow-sm">
                      <h4 className="font-josefinslab text-white text-2xl text-center mb-2">
                        Conseils :
                      </h4>
                      <p className="text-white">{plant.tips}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Boutons de contrôle */}
      <div className="flex items-center justify-center gap-6 mt-4 mb-10">
        {/* Bouton précédent */}
        <button
          onClick={handlePrevious}
          className="w-20 h-12 flex items-center justify-center rounded-xl bg-gray-200 hover:bg-gray-300 shadow-md transition duration-300"
        >
          <Image
            src="/icons/fleche.png" // Remplacez par le chemin correct
            alt="Flèche gauche"
            width={60}
            height={40}
            className="rotate-180"
          />
        </button>

        {/* Bouton suivant */}
        <button
          onClick={handleNext}
          className="w-20 h-12 flex items-center justify-center rounded-xl bg-gray-200 hover:bg-gray-300 shadow-md transition duration-300"
        >
          <Image
            src="/icons/fleche.png" // Remplacez par le chemin correct
            alt="Flèche droite"
            width={60}
            height={40}
          />
        </button>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const plants = (await fetchPlantsData()) || [];
  return { props: { plants } };
}
