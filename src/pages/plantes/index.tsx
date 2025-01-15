import { useState, useEffect } from "react";
import { useRouter } from "next/router";
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
  image: string; // ID Google Drive
};

export default function Carousel({ plants }: { plants: PlantData[] }) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedStates, setFlippedStates] = useState<boolean[]>([]);
  const [fontSizes, setFontSizes] = useState<string[]>([]);

  useEffect(() => {
    const plantSlug = router.query.plant as string;
    if (plantSlug) {
      const index = plants.findIndex(
        (plant) => plant.name.toLowerCase().replace(/ /g, "-") === plantSlug
      );
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }

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
  }, [router.query.plant, plants]);

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
    const verticalOffsetThreshold = 50; // Tolérance pour le mouvement vertical

    // Vérifiez si le mouvement est principalement horizontal
    if (
      Math.abs(info.offset.x) >
      Math.abs(info.offset.y) + verticalOffsetThreshold
    ) {
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
    <>
      <div className="relative bg-white flex flex-col items-center justify-center overflow-hidden  bg-[url('/images/bg-fleur.webp')] bg-cover bg-center">
        {/* Carrousel */}
        <div className="relative w-screen h-[80vh] sm:h-[90vh] flex items-center justify-center overflow-hidden mt-10 sm:mt-0">
          {plants.map((plant, index) => (
            <motion.div
              key={plant.name}
              className="absolute w-[90vw] h-[80vh] sm:w-[35vw] sm:h-[90vmin] perspective"
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
                  className="absolute w-full h-full backface-hidden flex justify-center"
                  style={{
                    transform: "rotateY(0deg)",
                    backfaceVisibility: "hidden",
                  }}
                  onClick={() => handleFlip(index)}
                >
                  <div className="relative h-[80vh] w-[85vw] shadow-md flex flex-col items-center bg-white border-[3px] border-gold rounded-[45px] overflow-hidden   p-4 ">
                    {/* Section image */}
                    <div
                      className="relative mt-6"
                      style={{ width: "98%", height: "80%" }} // Taille de l'image à 90% de la largeur et 70% de la hauteur du parent
                    >
                      <Image
                        src={plant.image}
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
                        - {plant.subtitle} -
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Face arrière */}
                <div
                  className="absolute w-full h-full backface-hidden flex justify-center"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                  onClick={() => handleFlip(index)}
                >
                  <div className="relative h-[80vh] w-[85vw] shadow-md flex flex-col items-center p-5 sm:p-8 text-black cursor-pointer flipped-card rounded-[45px] border-[3px] border-gold-BIS overflow-hidden bg-beige">
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
                        - {plant.subtitle} -
                      </h3>

                      <div className="grid grid-cols-1 gap-4 w-full">
                        <div className="flex flex-col items-center">
                          <Image
                            src="/icons/soleil.webp"
                            alt="Sunlight Icon"
                            width={48}
                            height={48}
                          />
                          <p className="text-base text-center">
                            {plant.sunlight}
                          </p>
                        </div>

                        <div className="flex flex-col items-center">
                          <Image
                            src="/icons/hydratation.webp"
                            alt="Watering Icon"
                            width={48}
                            height={48}
                          />
                          <p className="text-base text-center">
                            {plant.watering}
                          </p>
                        </div>

                        <div className="flex flex-col items-center">
                          <Image
                            src="/icons/branche.webp"
                            alt="Blooming Icon"
                            width={48}
                            height={48}
                          />
                          <p className="text-base text-center">
                            {plant.blooming}
                          </p>
                        </div>
                      </div>

                      <div className="bg-beige-BIS p-4 mt-6 rounded-[40px] shadow-sm border-gold-BIS border-[2px]">
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
        <div className="flex items-center justify-center gap-6 mb-10 mt-6">
          {/* Bouton précédent */}
          <button
            onClick={handlePrevious}
            className="w-20 h-10 flex items-center justify-center border-[1px] border-black rounded-[40px] bg-beige hover:bg-beige-BIS shadow-md transition duration-300"
          >
            <Image
              src="/icons/thumbnail_fleche-fine.webp" // Remplacez par le chemin correct
              alt="Flèche droite"
              width={40}
              height={30}
              className="rotate-180"
            />
          </button>

          <Image
            src="/icons/rose.webp" // Remplacez par le chemin correct
            alt="Flèche droite"
            width={40}
            height={30}
          />
          {/* Bouton suivant */}
          <button
            onClick={handleNext}
            className="w-20 h-10 flex items-center justify-center border-[1px] border-black rounded-[40px] bg-beige hover:bg-beige-BIS shadow-md transition duration-300"
          >
            <Image
              src="/icons/thumbnail_fleche-fine.webp" // Remplacez par le chemin correct
              alt="Flèche droite"
              width={40}
              height={30}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const plants = (await fetchPlantsData()) || [];
  return {
    props: { plants },
    revalidate: 60, // Temps en secondes avant la regénération
  };
}
