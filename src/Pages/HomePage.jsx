import { Home } from '../components/index/Home'
import { ModalInfo } from '../components/ModalInfo'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function HomePage({ loadedImages }) {
  const indexCards = Object.values(require('../data/Homepage.json'))

  document.title = 'Bienvenido'
  document.body.id = 'Home'
  return (
    <div>
      {/* Utiliza AnimatePresence para manejar las animaciones de entrada y salida */}
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{
          scale: 0.2,
          opacity: 0,
          transition: { duration: 0.5 },
        }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {/* Contenido principal */}
        <Home bottomrows={indexCards} images={loadedImages} />

        <ModalInfo />
      </motion.div>
    </div>
  )
}

export default HomePage
