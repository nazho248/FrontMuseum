import { BiInfoCircle } from 'react-icons/bi'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export function MainImage({ currentImage, setCurrentImage }) {
  const [isTextHidden, setTextHidden] = useState(false)

  const handleInfoCircleClick = () => {
    setTextHidden(prevTextHidden => !prevTextHidden)
  }

  const variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.5,
      },
    },
    hide: {
      y: 1000,
      opacity: 0,
    },
    exit: {
      opacity: 0,
      y: -1000,
      transition: {
        ease: 'easeOut',
        duration: 0.5,
      },
    },
  }

  return (
    <div className="main-image">
      <AnimatePresence mode="popLayout">
        <motion.div key={currentImage.id} variants={variants} animate={'show'} initial={'hide'} exit={'exit'}>
          <LazyLoadImage
            src={'assets/img/galeria/' + currentImage.imgsrc}
            placeholderSrc={'assets/img/galeria/thumbs/' + currentImage.imgsrc}
            alt="Main Image"
          />
        </motion.div>
      </AnimatePresence>
      <motion.div
        className="info-floating scale-75 transform lg:scale-100"
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
      <div className={`image-text text-white ${isTextHidden ? 'hidden-text' : ''}`}>
        <p className="italic">{currentImage.titulo}</p>
        <p className="text-white">{currentImage.Autor}</p>
        <p className="text-white">{currentImage.Tecnica}</p>
        <p className="text-white">{currentImage.Ano}</p>
      </div>
    </div>
  )
}
