import React, { useState, useEffect } from 'react'
import { Home } from '../components/index/Home'
import { ModalInfo } from '../components/ModalInfo'
import { motion } from 'framer-motion'
import { LoadingScreen } from '../components/LoadingScreen'

export function HomePage(props) {
  const indexCards = Object.values(require('../data/Homepage.json'))

  document.title = 'Bienvenido'
  document.body.id = 'Home'

  return (
    <div>
      {/* Utiliza AnimatePresence para manejar las animaciones de entrada y salida */}
      <motion.div
        initial={{ x: -2000, scale: 0.5, opacity: 0 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        exit={{
          x: 2000,
          scale: 0.5,
          opacity: 0,
          transition: { duration: 0.5 },
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Contenido principal */}
        <Home bottomrows={indexCards} images={props.loadedImages} />

        <ModalInfo />
      </motion.div>
    </div>
  )
}

export default HomePage
