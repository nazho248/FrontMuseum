import { forwardRef, useRef } from 'react'
import { TbAugmentedRealityOff } from 'react-icons/tb'
import { stopSession } from '@react-three/xr'
import { motion, useAnimationControls } from 'framer-motion'

const InterfaceAR = forwardRef(({ init, setInit }, ref) => {
  const hideCoachControl = useAnimationControls()
  const motionref = useRef()
  const handleClick = async () => {
    await stopSession()
    setInit(false)
  }

  let hideCoach = false
  //despues de 5 segundos
  if (init) {
    setTimeout(() => {
      //ocultar motionref poniendolo hidden
      //asegurar por estilos que este oculto
      motionref.current.style.opacity = 0
    }, 7000)
  }

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
          <p className="text-center text-xl text-white">
            Mueve el dispositivo y espera hasta ver un circulo, luego pulsalo para invocar la pieza.
          </p>
        </div>
      </motion.div>

      <p className={'opacity-0'}>olawas </p>
      <button className="lg:text-6xl">
        <TbAugmentedRealityOff
          onClick={handleClick}
          className={'absolute bottom-8 right-8 rounded-md bg-white p-2 text-6xl outline-none'}
          style={{ zIndex: 99999 }}
        />
      </button>
    </div>
  )
})

export default InterfaceAR
