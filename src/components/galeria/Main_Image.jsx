import { BiInfoCircle } from 'react-icons/bi'
import React, { useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export function Main_Image({ currentImage, setCurrentImage }) {
  const [isTextHidden, setTextHidden] = useState(true)
  const controls = useAnimationControls()

  const handleInfoCircleClick = () => {
    setTextHidden(prevTextHidden => !prevTextHidden)
  }

  const variants = {
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.3,
      },
    },
    hide: {
      x: '100vw',
      opacity: 0,
    },
    exit: {
      opacity: 0,
      y: 2000,
      transition: {
        ease: 'easeOut',
        duration: 0.3,
      },
    },
  }

  useEffect(() => {
    console.log('owo')
  }, [currentImage, controls])

  return (
    <div className="main-image">
      <motion.div key={currentImage.id} variants={variants} animate={'show'} initial={'hide'} exit={'exit'}>
        <LazyLoadImage
          src={'assets/img/galeria/' + currentImage.imgsrc}
          placeholderSrc={'assets/img/galeria/thumbs/' + currentImage.imgsrc}
          alt="Main Image"
        />
      </motion.div>
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
      <div className={`image-text ${isTextHidden ? 'hidden-text' : ''}`}>
        <p className="text-white">{currentImage.descripcion}</p>
      </div>
    </div>
  )
}
