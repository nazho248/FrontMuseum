import { motion } from 'framer-motion'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'

export function TimeImages(props) {
  const navigate = useNavigate()

  const atrasredirect = '/Tiempo/' + props.data.epoca + '/info'

  const siguiente = '/Tiempo/' + props.data.epoca_ant + '/info'
  return (
    <div className="bottom-0 mx-auto flex h-full max-h-full w-screen flex-row items-center justify-center gap-x-14 pt-24 text-center text-white">
      <h1 className="absolute top-14 text-xl text-white lg:top-32 lg:text-5xl">{props.data.titulo}</h1>
      {/*flecha izquierda <- */}
      {props.ultimo ? (
        <motion.div
          className="mb-14 mt-4 flex w-14 cursor-pointer border-b-2 border-slate-50 text-white  lg:border-b-4"
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
          <SlArrowLeft className="absolute -translate-x-3 -translate-y-4 transform text-4xl lg:-translate-x-4 lg:-translate-y-7 lg:text-6xl" />
        </motion.div>
      ) : null}

      <div
        className={
          'flex ' + (props.ultimo ? 'w-10/12' : 'w-9/12') + ' mx-auto mb-10 items-center justify-center space-x-10'
        }
      >
        {props.data.imagenes.map((imagen, index) => (
          <div className="flex h-48 w-1/2 items-center justify-center" key={index}>
            <div
              className="rounded-lg border border-gray-200 shadow"
              style={{
                backgroundColor: 'rgba(255,255,255,0.67)',
                height: '100%',
              }}
            >
              <img
                className="3 h-4/6 w-full rounded-t-lg object-contain"
                src={'../../assets/img/Timeline/' + imagen.imagen}
                alt=""
              />
              <div className="h-2/6 overflow-hidden p-2 pb-0 lg:p-5 lg:pb-5">
                <p className="mb-3 text-xs font-normal text-gray-700 lg:text-base">{imagen.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*flecha derecha ->*/}
      <motion.div
        className="mb-14 mt-4 flex w-14 cursor-pointer border-b-2  border-slate-50 text-white lg:border-b-4"
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
        <SlArrowRight className="absolute -translate-y-4 translate-x-7  transform text-4xl lg:text-6xl" />
      </motion.div>
    </div>
  )
}
