import { BackBtn } from '../BackBtn'
import { motion } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'
import { useNavigate } from 'react-router-dom'
/*componentes*/
import { TopTime } from '../components/tiempo/TopTime'
import { TimePresentation } from '../components/tiempo/TimePresentation'
import { CardText } from '../components/tiempo/CardText'
import { TimeImages } from '../components/tiempo/TimeImages'
import { useParams } from 'react-router-dom'
import { NotFound } from './NotFound'
import { useEffect, useState } from 'react'

export function Tiempo() {
  const navigate = useNavigate()

  document.body.id = ''
  const [direction, setDirection] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  const data_tiempo = Object.values(require('../data/timeline.json'))
  const presentacion = data_tiempo.find(elemento => elemento.id === -1)
  const firstyear = data_tiempo[0].epoca

  const handlers = useSwipeable({
    onSwiped: eventData => {
      if (eventData.dir === 'Left') {
        handleSwipeLeft()
      } else if (eventData.dir === 'Right') {
        handleSwipeRight()
      }
    },
  })

  useEffect(() => {
    // Simulamos un retraso de 1 segundo para cargar los recursos (ajusta según tus necesidades)
    const loadingDelay = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(loadingDelay)
  }, [])

  const { year } = useParams()
  //type definido para limitarlo a info e images
  const { type } = useParams()
  let epocaimpresion = 0

  if (year !== undefined) {
    epocaimpresion = data_tiempo.findIndex(elemento => elemento.epoca === parseInt(year))
    if (epocaimpresion !== -1 && (type === 'info' || type === 'images')) {
      // Se encontró una coincidencia, epocaimpresion contendrá el índice correspondiente
    } else {
      // No se encontró ninguna coincidencia, redirigir a /404
      return <NotFound />
    }
  }
  let epocaAnterior = -1

  if (epocaimpresion > 0) {
    epocaAnterior = data_tiempo[epocaimpresion - 1].epoca
  }

  //variable para saber no es el ultimo elemento
  let isNotLastOne = false
  /*si existe el elemento siguiente y contiene epoca*/
  if (data_tiempo[epocaimpresion + 1] !== undefined && data_tiempo[epocaimpresion + 1].epoca !== undefined) {
    isNotLastOne = true
  }

  const handleSwipeLeft = () => {
    //swipe izquierda ( ir a la derecha o siguiente)
    if (year !== undefined) {
      setDirection('left')
      if (epocaAnterior === -1) {
        navigate(`/Tiempo`)
      } else if (type === 'info') {
        navigate(`/Tiempo/${epocaAnterior}/images`)
      } else if (type === 'images') {
        navigate(`/Tiempo/${data_tiempo[epocaimpresion].epoca}/info`)
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
      navigate(`/Tiempo/${data_tiempo[epocaimpresion].epoca}/images`)
    } else if (data_tiempo[epocaimpresion + 1].epoca !== undefined) {
      setDirection('right')
      navigate(`/Tiempo/${data_tiempo[epocaimpresion + 1].epoca}/info`)
    }
  }

  return (
    <div {...handlers}>
      <div
        className="h-screen bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: "url('/assets/img/canonautor.jpg')",
          filter: 'brightness(30%)',
          display: 'block',
          width: '100%',
          height: '100%',
          left: '0',
          position: 'fixed',
          right: '0',
          zIndex: '1',
        }}
      ></div>
      <div className="relative z-10 flex h-screen max-h-screen flex-col">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: isLoaded ? 1 : 0 }} transition={{ duration: 1 }}>
          <BackBtn />
          <TopTime
            number={epocaAnterior}
            isPresentation={year === undefined}
            fecha={data_tiempo[epocaimpresion].epoca}
            fechaAnterior={data_tiempo[epocaimpresion].epoca_ant}
          />
        </motion.div>
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
            <CardText data={data_tiempo[epocaimpresion]} anterior={epocaAnterior} />
          ) : type === 'images' ? (
            <TimeImages data={data_tiempo[epocaimpresion]} ultimo={isNotLastOne} />
          ) : (
            <NotFound />
          )}
        </motion.div>
      </div>
    </div>
  )
}
