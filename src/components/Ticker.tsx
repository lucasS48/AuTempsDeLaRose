import React, { useRef, useState, useEffect, useCallback } from "react";

/**
 * Props pour le composant Ticker.
 * images: tableau d'URL d'images
 * height: hauteur fixe en pixels
 * speed: vitesse de défilement (px par frame)
 */
interface TickerProps {
  images: string[];
  height?: number;
  speed?: number;
}

const Ticker: React.FC<TickerProps> = ({
  images,
  height = 200,
  speed = 0.5,
}) => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number | null>(null);

  const doubledImages = [...images, ...images];

  // Observer pour détecter si le ticker est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Détecte si au moins 10% du composant est visible
    );

    if (tickerRef.current) {
      observer.observe(tickerRef.current);
    }

    return () => {
      if (tickerRef.current) {
        observer.unobserve(tickerRef.current);
      }
    };
  }, []);

  // Mesurer la largeur totale des images
  useEffect(() => {
    if (tickerRef.current) {
      let width = 0;
      const firstSet = images.length;
      for (let i = 0; i < firstSet; i++) {
        const child = tickerRef.current.children[i] as HTMLElement;
        if (child) {
          width += child.offsetWidth;
        }
      }
      setTotalWidth(width);
    }
  }, [images, height]);

  // Fonction d'animation
  const animate = useCallback(() => {
    setOffset((prevOffset) => {
      let newOffset = prevOffset - speed;
      if (totalWidth && newOffset <= -totalWidth) {
        newOffset += totalWidth;
      }
      return newOffset;
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [speed, totalWidth]);

  // Gérer le démarrage et l'arrêt de l'animation en fonction de la visibilité
  useEffect(() => {
    if (isVisible) {
      animationRef.current = requestAnimationFrame(animate);
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, animate]);

  return (
    <div
      ref={tickerRef}
      className="overflow-hidden w-full relative"
      style={{ height: `${height}px` }}
    >
      <div
        className="flex flex-row items-center h-full"
        style={{
          transform: `translateX(${offset}px)`,
          whiteSpace: "nowrap",
        }}
      >
        {doubledImages.map((img, idx) => (
          <div key={idx} className="flex-none mx-1">
            <img
              src={img}
              alt={`image-${idx + 1}`}
              className="border-4 border-black"
              style={{
                height: `${height}px`,
                width: "auto",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
