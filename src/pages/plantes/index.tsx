import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { fetchPlantsData } from "../api/api";
import { motion } from "framer-motion"; // On ne récupère plus PanInfo
import { useSwipeable } from "react-swipeable"; // <-- Bibliothèque de détection de swipe
import Image from "next/image";
import Newsletter from "@/components/Newsletter";
import ContactInfo from "@/components/ContactInfo";
import Ticker from "@/components/Ticker";
   
import { PlantData } from "@/components/types";

export default function Carousel({ plants }: { plants: PlantData[] }) {
  // Vos images
  const images = [
    "/images/boutique.webp",
    "/images/IMG_3832.webp",
    "/images/IMG_3867.webp",
    "/images/IMG_3868.webp",
    "/images/IMG_3870.webp",
    "/images/IMG_3873.webp",
    "/images/IMG_3874.webp",
  ];
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedStates, setFlippedStates] = useState<boolean[]>([]);
  const [fontSizes, setFontSizes] = useState<string[]>([]);

  useEffect(() => {
    // Si on arrive sur une URL type /?plant=mon-plant, on se positionne sur cette carte
    const plantSlug = router.query.plant as string;
    if (plantSlug) {
      const index = plants.findIndex(
        (plant) => plant.name.toLowerCase().replace(/ /g, "-") === plantSlug
      );
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }

    // Initialiser l'état flipped (carte retournée ou non) pour chaque plante
    setFlippedStates(plants.map(() => false));

    // Calcul dynamique de la taille de police (pour éviter le texte qui déborde)
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
        }<br>${plant.sunlight}<br>${plant.watering}<br>${
          plant.blooming
        }<br>${plant.tips}`;

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

  // Fonctions pour passer d'une carte à l'autre
  const handleNext = () => {
    setFlippedStates(plants.map(() => false)); // On réinitialise l'état "flipped" pour toutes les cartes
    setCurrentIndex((prev) => (prev + 1) % plants.length);
  };

  const handlePrevious = () => {
    setFlippedStates(plants.map(() => false));
    setCurrentIndex((prev) => (prev - 1 + plants.length) % plants.length);
  };

  // Hook de détection du swipe (gauche/droite) via react-swipeable
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      // Balayage vers la gauche => carte suivante
      handleNext();
    },
    onSwipedRight: () => {
      // Balayage vers la droite => carte précédente
      handlePrevious();
    },
    preventScrollOnSwipe: true, // pour éviter que la page ne scrolle verticalement pendant le swipe
    trackMouse: true,           // pour détecter aussi le "swipe" à la souris (drag)
    // d'autres options disponibles si besoin, cf. doc react-swipeable
  });

  // Variants Framer Motion pour positionner/transitionner les cartes
  const variants = {
    center: { scale: 1, x: 0, opacity: 1, zIndex: 20 },
    left: { scale: 0.95, x: "-110%", opacity: 0.7, zIndex: 10 },
    right: { scale: 0.95, x: "110%", opacity: 0.7, zIndex: 10 },
    hidden: { opacity: 0, zIndex: 0 },
  };

  // Gère le flip de la carte (face avant/face arrière)
  const handleFlip = (index: number) => {
    setFlippedStates((prev) =>
      prev.map((flipped, i) => (i === index ? !flipped : flipped))
    );
  };

  return (
    <>
      <div className="relative bg-white flex flex-col items-center justify-center overflow-hidden  bg-[url('/images/bg-fleur.webp')] bg-cover bg-center">
        {/* Conteneur principal du carrousel */}
        <div
          className="relative w-screen h-[80vh] sm:h-[90vh] flex items-center justify-center overflow-hidden mt-10 sm:mt-0"
          {...swipeHandlers} // <-- on applique la détection de swipe ici
        >
          {plants.map((plant, index) => (
            <motion.div
              key={plant.name}
              className="absolute w-[90vw] h-[80vh] sm:w-[35vw] sm:h-[70vmin] perspective"
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
                stiffness: 80, // Réduit la rigidité pour un mouvement plus fluide
                damping: 15,   // Augmente légèrement l’amortissement pour éviter les rebonds
                duration: 1.2,
              }}
              // On retire drag="x" / onDragEnd / dragElastic / etc. 
            >
              {/* L'élément qui se retourne */}
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
                  <div className="relative h-[80vh] w-[85vw] shadow-md flex flex-col items-center bg-white border-[3px] border-gold rounded-[45px] overflow-hidden p-4 ">
                    {/* Section image */}
                    <div
                      className="relative mt-6"
                      style={{ width: "98%", height: "90%" }}
                    >
                      <Image
                        src={plant.image}
                        alt={`${plant.name} front image`}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-[40px]"
                      />
                    </div>

                    {/* Section texte */}
                    <div className="mt-4 text-center">
                      <h2 className="text-5xl font-tangerine italic text-gold-BIS lg:text-6xl">
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
                      <h3 className="font-josefinslab text-xl sm:text-2xl lg:text-3xl text-center mb-6 italic">
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
                          <p className="text-lg text-center">
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
                          <p className="text-lg text-center">
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
                          <p className="text-lg text-center">
                            {plant.blooming}
                          </p>
                        </div>
                      </div>

                      <div className="bg-beige-BIS p-4 mt-6 rounded-[40px] shadow-sm border-gold-BIS border-[2px]">
                        <h4 className="font-josefinslab text-white text-2xl text-center mb-2">
                          Conseils :
                        </h4>
                        <p className="text-white text-lg">{plant.tips}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Boutons de contrôle (précédent/suivant) */}
        <div className="flex items-center justify-center gap-6 mb-10 mt-6">
          <button
            onClick={handlePrevious}
            className="w-20 h-10 flex items-center justify-center border-[1px] border-black rounded-[40px] bg-beige hover:bg-beige-BIS shadow-md transition duration-300"
          >
            <Image
              src="/icons/thumbnail_fleche-fine.webp"
              alt="Flèche gauche"
              width={40}
              height={30}
              className="rotate-180"
            />
          </button>

          <Image
            src="/icons/rose.webp"
            alt="Rose"
            width={40}
            height={30}
          />

          <button
            onClick={handleNext}
            className="w-20 h-10 flex items-center justify-center border-[1px] border-black rounded-[40px] bg-beige hover:bg-beige-BIS shadow-md transition duration-300"
          >
            <Image
              src="/icons/thumbnail_fleche-fine.webp"
              alt="Flèche droite"
              width={40}
              height={30}
            />
          </button>
        </div>
      </div>

      {/* Newsletter */}
      <Newsletter />

      <ContactInfo />

      {/* --- Ticker défilant --- */}
      <Ticker images={images} height={300} speed={0.5} />

    </>
  );
}

export async function getStaticProps() {
  const plants = (await fetchPlantsData()) || [];
  return {
    props: { plants },
    revalidate: 60, // Temps en secondes avant la regénération (ISR)
  };
}
