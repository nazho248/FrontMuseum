import { motion } from 'framer-motion'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import Zoom from 'react-medium-image-zoom'

export function TimeImages(props) {
  const navigate = useNavigate()

  const atrasredirect = '/Tiempo/' + props.data.epoca + '/info'
  const siguiente = '/Tiempo/' + props.data.epoca_ant + '/info'

  return (
    <div className="bottom-0 mx-auto flex h-full max-h-full w-screen flex-row items-center justify-center gap-x-14 text-center text-white">
      {/*flecha izquierda <- */}
      {props.ultimo ? (
        <motion.div
          className="cursor-pointer text-white"
          onClick={() => {
            navigate(siguiente)
          }}
          initial={{ translateX: 0 }}
          animate={{ translateX: 18 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <BsArrowLeft className="text-4xl lg:text-6xl" />
        </motion.div>
      ) : null}
      {/*flecha izquierda <- */}

      {/*div central con el contenido*/}
      <div className="flex grow flex-col justify-center">
        {/*titulo en la parte superior*/}
        <h1 className="mb-6 text-xl text-white lg:mb-10 lg:text-5xl">{props.data.titulo}</h1>

        <div
          className={`m-auto grid grid-cols-2 gap-4 lg:w-3/4 ${
            props.data.imagenes.length === 1 ? 'translate-x-1/4' : ''
          }`}
        >
          {/*imagenes*/}
          {props.data.imagenes.map((imagen, index) => (
            /*recuadro*/
            <div className=" rounded-lg border border-gray-200 bg-white/70 shadow">
              {/*imagen en la parte superior cuadrada*/}

              <Zoom>
                <img
                  className="flex aspect-square max-h-48 w-full grow rounded-t-lg object-cover lg:max-h-none"
                  src={'../../assets/img/Timeline/' + imagen.imagen}
                  alt={imagen.descripcion}
                />
              </Zoom>

              <p className="m-3 text-center text-xs text-gray-950 lg:text-base">{imagen.descripcion}</p>
            </div>
          ))}
        </div>
      </div>

      {/*flecha derecha ->*/}
      <motion.div
        className="cursor-pointer text-white"
        onClick={() => {
          navigate(atrasredirect)
        }}
        initial={{ translateX: 0 }}
        animate={{ translateX: -18 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        <BsArrowRight className=" text-4xl lg:text-6xl" />
      </motion.div>
      {/*flecha derecha ->*/}
    </div>
  )
}
