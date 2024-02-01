import { Home } from '../components/index/Home'
import { ModalInfo } from '../components/ModalInfo'
import { motion } from 'framer-motion'

export function HomePage({ loadedImages, firstime, setfirstime }) {
  const data = Object.values(require('../data/Homepage.json'))
  const indexCards = Object.values(data[0].secciones)
  const paragraphs = Object.values(data[0].presentacion)

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
        <Home
          bottomrows={indexCards}
          images={loadedImages}
          paragraphs={paragraphs}
          firstime={firstime}
          setFirstime={setfirstime}
        />

        <ModalInfo />
      </motion.div>
    </div>
  )
}

export default HomePage
