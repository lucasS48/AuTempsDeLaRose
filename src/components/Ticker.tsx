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

  const doubledImages = [...images, ...images];

  // Mesurer la largeur totale d'une série d'images
  useEffect(() => {
    if (tickerRef.current) {
      const firstSet = images.length;
      let width = 0;
      for (let i = 0; i < firstSet; i++) {
        const child = tickerRef.current.children[i] as HTMLElement;
        if (child) {
          width += child.offsetWidth;
        }
      }
      setTotalWidth(width);
    }
  }, [images, height]);

  const animate = useCallback(() => {
    setOffset((prevOffset) => {
      let newOffset = prevOffset - speed;
      if (totalWidth && newOffset <= -totalWidth) {
        newOffset += totalWidth;
      }
      return newOffset;
    });
    requestAnimationFrame(animate);
  }, [speed, totalWidth]);

  let animationFrameId: number;

useEffect(() => {
  animationFrameId = requestAnimationFrame(animate);
  return () => cancelAnimationFrame(animationFrameId);
}, [animate]);


  return (
    <div
      className="overflow-hidden w-full relative"
      style={{ height: `${height}px` }}
    >
      {/* Conteneur flex doublé */}
      <div
        ref={tickerRef}
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
