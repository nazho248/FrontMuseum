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
          Lo chibcha, lo maravilloso
        </motion.h1>
      </AnimatePresence>

      <button
        className={`fixed mt-10 w-2/12 rounded-md bg-blue-300 px-5 py-5 text-base font-bold text-black`}
        onClick={handleClick}
      >
        Siguiente :)
      </button>
    </div>
  )
}
