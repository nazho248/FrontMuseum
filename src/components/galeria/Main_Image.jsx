import { BiInfoCircle } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

export function Main_Image({ currentImage, setCurrentImage }) {
  const [isTextHidden, setTextHidden] = useState(true);
  const controls = useAnimationControls();

  const handleInfoCircleClick = () => {
    setTextHidden((prevTextHidden) => !prevTextHidden);
  };

  const variants = {
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.3,
      },
    },
    hide: {
      x: "100vw",
      opacity: 0,
    },
    exit: {
      opacity: 0,
      y: 2000,
      transition: {
        ease: "easeOut",
        duration: 0.3,
      },
    },
  };

  useEffect(() => {
    console.log("owo");
  }, [currentImage, controls]);

  return (
    <div className="main-image">
      <motion.img
        src={"assets/img/galeria/" + currentImage.imgsrc}
        alt="Main Image"
        key={currentImage.id}
        variants={variants}
        animate={"show"}
        initial={"hide"}
        exit={"exit"}
        lazyload={true}
      />
      <motion.div
        className="info-floating transform scale-75 lg:scale-100"
        onClick={handleInfoCircleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <BiInfoCircle
          className="text-slate-100
                "
          size={28}
        />
      </motion.div>
      <div className={`image-text ${isTextHidden ? "hidden-text" : ""}`}>
        <p className="text-white">{currentImage.descripcion}</p>
      </div>
    </div>
  );
}
