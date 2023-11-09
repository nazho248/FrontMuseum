import { BackBtn } from '../BackBtn'
import { AnimatePresence, motion } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'
import { useNavigate } from 'react-router-dom'
/*componentes*/
import { TopTime } from '../components/tiempo/TopTime'
import { TimePresentation } from '../components/tiempo/TimePresentation'
import { CardText } from '../components/tiempo/CardText'
import { TimeImages } from '../components/tiempo/TimeImages'
import { useParams } from 'react-router-dom'
import { NotFound } from './NotFound'
import { useState } from 'react'

export function Tiempo() {
  const navigate = useNavigate()

  document.body.id = 'Tiempo'
  const [direction, setDirection] = useState('')

  const data_tiempo = Object.values(require('../data/timeline.json'))
  const presentacion = data_tiempo.find(elemento => elemento.id === -1)
  const firstyear = data_tiempo[0].epoca

  //constantes recuperadas de la URI
  const { year } = useParams()
  //type definido para limitarlo a info e images
  const { type } = useParams()
  let epoca_impresion = 0

  /*estilo del fondo de la vista (imagen del cañon)*/
  const estilo_fondo = {
    backgroundImage: "url('/assets/img/canonautor.jpg')",
    filter: 'brightness(30%)',
    display: 'block',
    width: '100%',
    height: '100%',
    left: '0',
    position: 'fixed',
    right: '0',
    zIndex: '1',
  }

  /* Hook del Handler para el swipe */
  const handlers = useSwipeable({
    onSwiped: eventData => {
      if (eventData.dir === 'Left') {
        handleSwipeLeft()
      } else if (eventData.dir === 'Right') {
        handleSwipeRight()
      }
    },
  })

  if (year !== undefined) {
    epoca_impresion = data_tiempo.findIndex(elemento => elemento.epoca === parseInt(year))
    if (epoca_impresion !== -1 && (type === 'info' || type === 'images')) {
      // Se encontró una coincidencia, epocaimpresion contendrá el índice correspondiente
    } else {
      // No se encontró ninguna coincidencia, redirigir a /404
      return <NotFound />
    }
  }
  //en caso de que no se encuentre el año, no habrán más épocas anteriores
  let epocaAnterior = -1
  if (epoca_impresion > 0) {
    epocaAnterior = data_tiempo[epoca_impresion - 1].epoca
  }

  //variable para saber no es el último elemento
  let isNotLastOne = false
  /*si existe el elemento siguiente y contiene época*/
  if (data_tiempo[epoca_impresion + 1] !== undefined && data_tiempo[epoca_impresion + 1].epoca !== undefined) {
    isNotLastOne = true
  }

  /*handlers para el swipe izquierda y derecha*/
  const handleSwipeLeft = () => {
    //swipe izquierda ( ir a la derecha o siguiente)
    if (year !== undefined) {
      setDirection('left')
      if (epocaAnterior === -1) {
        navigate(`/Tiempo`)
      } else if (type === 'info') {
        navigate(`/Tiempo/${epocaAnterior}/images`)
      } else if (type === 'images') {
        navigate(`/Tiempo/${data_tiempo[epoca_impresion].epoca}/info`)
      }
    }
  }
  const handleSwipeRight = () => {
    //swipe derecha ( ir a la izquierda o anterior)
    if (year === undefined) {
      setDirection('right')
      navigate(`/Tiempo/${firstyear}/info`)
    } else if (type === 'info') {
      setDirection('right')
      navigate(`/Tiempo/${data_tiempo[epoca_impresion].epoca}/images`)
    } else if (data_tiempo[epoca_impresion + 1].epoca !== undefined) {
      setDirection('right')
      navigate(`/Tiempo/${data_tiempo[epoca_impresion + 1].epoca}/info`)
    }
  }

  return (
    <div {...handlers} className="overflow-hidden">
      {/*motion div de la imagen de fondo*/}
      <motion.div
        className="h-screen bg-cover bg-fixed bg-center"
        style={estilo_fondo}
        /*        initial={{ opacity: 0, y: 1000 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, delay: 0.5 }}*/
      ></motion.div>
      {/*motion div de la imagen de fondo*/}

      <div className="relative z-10 flex h-screen max-h-screen flex-col">
        {/*Barra de navegacion Linea Tiempo*/}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <BackBtn />
          <TopTime
            number={epocaAnterior}
            isPresentation={year === undefined}
            fecha={data_tiempo[epoca_impresion].epoca}
            fechaAnterior={data_tiempo[epoca_impresion].epoca_ant}
          />
        </motion.div>
        {/*Barra de navegacion Linea Tiempo*/}

        {/*motion div del texto*/}
        <motion.div
          className="flex h-full w-full flex-col items-center justify-center"
          initial={{ x: 0, opacity: 1 }}
          animate={{
            opacity: 1,
            x: direction === 'right' ? '-25%' : direction === 'left' ? '25%' : 0,
          }}
          exit={{
            opacity: 0,
            x: direction === 'right' ? '25%' : direction === 'left' ? '-25%' : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          {/*contenido de texto*/}
          {year === undefined ? (
            <TimePresentation data={presentacion} year={firstyear} />
          ) : type === 'info' ? (
            <CardText data={data_tiempo[epoca_impresion]} anterior={epocaAnterior} />
          ) : type === 'images' ? (
            <TimeImages data={data_tiempo[epoca_impresion]} ultimo={isNotLastOne} />
          ) : (
            <NotFound />
          )}
        </motion.div>
        {/*motion div del texto*/}
      </div>
    </div>
  )
}
