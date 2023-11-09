import { motion } from 'framer-motion'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

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

      <div className="mt-10 grow flex-col justify-center">
        <h1 className="mb-2 text-xl text-white lg:mb-10 lg:text-5xl">{props.data.titulo}</h1>

        {/*imagenes*/}
        <div className="flex grow items-center justify-center gap-4 lg:gap-14">
          {props.data.imagenes.map((imagen, index) => (
            /*recuadro*/
            <div className="rounded-lg border border-gray-200 bg-white/70 shadow lg:w-3/6 xl:w-2/6">
              {/*imagen en la parte superior cuadrada*/}
              <img
                className="flex max-h-52 w-full grow rounded-t-lg object-cover lg:max-h-none"
                src={'../../assets/img/Timeline/' + imagen.imagen}
                alt=""
              />
              <p className="m-3 flex grow text-xs font-normal text-gray-950 lg:text-base">{imagen.descripcion}</p>
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
