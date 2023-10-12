import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export function CardText(props) {
  const navigate = useNavigate()

  let atrasredirect = '/Tiempo'
  if (props.anterior != -1) {
    atrasredirect = '/Tiempo/' + props.anterior + '/images'
  }
  const siguiente = '/Tiempo/' + props.data.epoca + '/images'

  return (
    <div className="bottom-0 flex h-full w-screen flex-row   items-center  justify-center text-center text-black">
      {/*
            <h1 className="text-white absolute text-xl lg:text-5xl top-32">{props.data.titulo}</h1>
*/}

      {/*flecha izquierda <- */}
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

      {/*contenido*/}
      <div className="mx-auto flex max-h-[16rem] w-10/12 flex-col items-center overflow-scroll overflow-x-hidden rounded-lg bg-slate-50	 bg-opacity-70 p-6 text-lg lg:max-h-screen lg:w-9/12  lg:overflow-hidden lg:overflow-hidden">
        <h1 className="mb-2 w-full whitespace-pre-line text-sm font-bold lg:mb-10 lg:text-2xl">
          {props.data.textos[0].titulo}
        </h1>
        <p className="text-justify text-xs lg:text-sm">{props.data.textos[0].texto}</p>
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
        <SlArrowRight className="absolute -translate-y-4 translate-x-8  transform text-4xl lg:text-6xl" />
      </motion.div>
    </div>
  )
}
