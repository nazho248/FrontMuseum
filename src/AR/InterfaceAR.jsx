import { forwardRef, useRef, useState } from 'react'
import { TbAugmentedRealityOff, TbHelpOctagon, TbHelpOff } from 'react-icons/tb'
import { stopSession } from '@react-three/xr'
import { motion, useAnimationControls } from 'framer-motion'

const InterfaceAR = forwardRef(({ init, setInit, setwebxr }, ref) => {
  const hideCoachControl = useAnimationControls()
  const motionref = useRef()
  const handleClick = async () => {
    await stopSession()
    setwebxr(false)
    setInit(false)
  }

  let hideCoach = false

  const handleCoach = () => {
    if (hideCoach) {
      motionref.current.style.opacity = 0
      motionref.current.style.visibility = 'hidden'
      motionref.current.style.pointerEvents = 'none'
      hideCoach = false
    } else {
      motionref.current.style.opacity = 1
      motionref.current.style.visibility = 'visible'
      motionref.current.style.pointerEvents = 'all'
      hideCoach = true
    }
  }

  //despues de 5 segundos
  if (init) {
    setTimeout(() => {
      handleCoach()
    }, 10000)
  }

  //funcion esconder coach

  return (
    <div ref={ref} style={{ display: init ? 'block' : 'none' }}>
      {/*div en la mitad de la pantalla*/}
      <motion.div
        ref={motionref}
        className={
          'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-500' +
          (hideCoach ? 'hidden' : '')
        }
        style={{ zIndex: 99999 }}
        initial={{ opacity: 1 }}
        animate={hideCoachControl}
      >
        <div className="flex flex-col items-center">
          <object data="/assets/img/Coach_AR.svg" style={{ zIndex: 99999 }} className="h-1/2 w-1/2" />
          <p className="text-md text-center text-white lg:text-2xl">
            Mueve el dispositivo sobre una superficie plana a distintos ángulos, escaneando sus bordes para delimitar el
            suelo digital. Una vez aparezca el circulo, pulsalo para invocar el modelo.
          </p>
        </div>
      </motion.div>

      <button className="text-2xl lg:text-6xl">
        <TbAugmentedRealityOff
          onClick={handleClick}
          className={'absolute bottom-8 right-8 rounded-md bg-white p-2 text-5xl outline-none lg:text-6xl'}
          style={{ zIndex: 99999 }}
        />
      </button>

      <button className="text-2xl lg:text-6xl">
        <TbHelpOctagon
          onClick={handleCoach}
          className={'absolute bottom-8 left-8 rounded-md bg-white p-2 text-5xl outline-none lg:text-6xl'}
          style={{ zIndex: 99999 }}
        />
      </button>
    </div>
  )
})

export default InterfaceAR
