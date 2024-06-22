import { FC, useState, useEffect } from "react";
import { motion, easeInOut } from "framer-motion";
import ActionButton from "../components/ActionButton";

import Img1 from "../assets/imgs (1).jpg";
import Img2 from "../assets/imgs (2).jpg";
import Img3 from "../assets/imgs (3).jpg";
import Img4 from "../assets/imgs (4).jpg";
import Img5 from "../assets/imgs (5).jpg";
import Img6 from "../assets/imgs (6).jpg";
import Img7 from "../assets/imgs (7).jpg";
import Img8 from "../assets/imgs (8).jpg";

const imageClass = "w-96 h-96 object-cover rounded-lg";

interface GalleryImageProps {
  src: string;
  alt: string;
  index: number;
}

const imageVariants = {
  initial: {
    opacity: 0,
    scale: 0.7,
  },
  animate: ({ index }: { index: number }) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: index * 0.05,
      type: "linear",
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.7,
    transition: {
      duration: 0.3,
      type: "linear",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: easeInOut,
      delay: 0,
    },
  },
};

const GalleryImage: FC<GalleryImageProps> = ({ src, alt, index }) => {
  return (
    <motion.img
      variants={imageVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      exit="exit"
      viewport={{ once: true, amount: 0.5 }}
      custom={{ index }}
      src={src}
      alt={alt}
      className={imageClass}
    />
  );
};

const images = [
  { src: Img1, alt: "img1" },
  { src: Img2, alt: "img2" },
  { src: Img3, alt: "img3" },
  { src: Img4, alt: "img4" },
  { src: Img5, alt: "img5" },
  { src: Img6, alt: "img6" },
  { src: Img7, alt: "img7" },
  { src: Img8, alt: "img8" },
];

const Gallery: FC = () => {
  const [showAll, setShowAll] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setShowAll(false);
        setIsMobile(true);
      } else {
        setShowAll(true);
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleElements = () => {
    setShowAll((prev) => !prev);
  };

  const visibleImages = showAll ? images : images.slice(0, 1);

  return (
    <section id="gallery" className="bg-default-200 py-32">
      <div className="w-[80vw] grid grid-cols-4 mx-auto gap-7 place-items-center xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
        {visibleImages.map((image, index) => (
          <GalleryImage
            key={index}
            src={image.src}
            alt={image.alt}
            index={index + 1}
          />
        ))}
      </div>
      {isMobile && (
        <div className="flex justify-center mt-8">
          <ActionButton onClick={toggleElements}>
            {showAll ? "Prikaži Manje" : "Prikaži Više"}
          </ActionButton>
        </div>
      )}
    </section>
  );
};

export default Gallery;
