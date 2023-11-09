import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useAnimationControls } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export function EsteticaPresentation(props) {
  const navigate = useNavigate()
  const controls = useAnimationControls()

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    })
  }, [controls])

  function handleClick() {
    setTextState(textState + 1)
    controls.start({
      y: 50,
      opacity: 0,
      transition: {
        duration: 1.5,
      },
    })
    //esperar los 2 segundos de la animacion de salida
    setTimeout(() => {
      navigate(`/Estetica/C283`)
    }, 2000)
  }

  const [textState, setTextState] = useState(1)
  return (
    <div className="bg bg flex max-h-screen w-full flex-col justify-center bg-slate-900 p-10 text-center">
      {/*animacion como con blur del texto hacia abajo con un retraso de 1 segundo al hacer clic en el boton, hace la salida del texto*/}
      <AnimatePresence mode="popLayout">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={controls}
          transition={{ duration: 1.5 }}
          className="text-3xl font-bold text-white"
        >
          Memorias Guane, ecos de la eternidad.
        </motion.h1>
      </AnimatePresence>

      <motion.div
        className="promptBox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="tapperoo" />
        <svg
          version="1.1"
          id="tap-gesture"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style={{ enableBackground: 'new 0 0 512 512' }}
          xmlSpace="preserve"
          fill="#fff"
        >
          <g>
            <g>
              <path
                d="M416,149.333c-8.768,0-16.939,2.667-23.723,7.211C386.432,139.947,370.581,128,352,128
				c-8.768,0-16.939,2.667-23.723,7.211c-5.845-16.597-21.696-28.544-40.277-28.544c-7.765,0-15.061,2.091-21.333,5.739V42.667
				C266.667,19.136,247.531,0,224,0s-42.667,19.136-42.667,42.667v249.408l-58.645-29.333C113.856,258.325,103.957,256,94.08,256
				c-22.485,0-40.747,18.283-40.747,40.875c0,10.901,4.245,21.12,11.947,28.821l137.941,137.941C234.389,494.827,275.883,512,320,512
				c76.459,0,138.667-62.208,138.667-138.667V192C458.667,168.469,439.531,149.333,416,149.333z M437.333,373.333
				c0,64.704-52.651,117.333-117.355,117.333c-38.421,0-74.517-14.955-101.653-42.133L80.363,310.592
				c-3.669-3.648-5.696-8.533-5.696-13.845c0-10.709,8.704-19.413,19.413-19.413c6.592,0,13.163,1.557,19.072,4.501l74.091,37.035
				c3.307,1.643,7.253,1.472,10.368-0.469c3.136-1.941,5.056-5.376,5.056-9.067V42.667c0-11.755,9.557-21.333,21.333-21.333
				s21.333,9.579,21.333,21.333v202.667c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667v-96
				c0-11.755,9.557-21.333,21.333-21.333s21.333,9.579,21.333,21.333v96c0,5.888,4.779,10.667,10.667,10.667
				s10.667-4.779,10.667-10.667v-74.667c0-11.755,9.557-21.333,21.333-21.333s21.333,9.579,21.333,21.333v74.667
				c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667V192c0-11.755,9.557-21.333,21.333-21.333
				s21.333,9.579,21.333,21.333V373.333z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </motion.div>
    </div>
  )
}
