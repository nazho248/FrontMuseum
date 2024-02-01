import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export function CardText(props) {
  const navigate = useNavigate()

  let atrasredirect = '/Tiempo'
  if (props.anterior !== -1) {
    atrasredirect = '/Tiempo/' + props.anterior + '/images'
  }
  const siguiente = '/Tiempo/' + props.data.epoca + '/images'
  const texto = props.data.textos[0].texto

  return (
    <div className="bottom-0 flex h-full w-screen flex-row   items-center  justify-center text-center text-black">
      {/*
            <h1 className="text-white absolute text-xl lg:text-5xl top-32">{props.data.titulo}</h1>
*/}

      {/*flecha izquierda <- */}
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
      {/*contenido*/}
      <div className="mx-auto max-h-[16rem] items-center  overflow-scroll rounded-lg bg-slate-50 bg-opacity-70 p-6 text-lg lg:max-h-none lg:overflow-hidden lg:p-10">
        <h1 className="mb-2 w-full whitespace-pre-line text-sm font-bold lg:mb-10 lg:text-2xl">
          {props.data.textos[0].titulo}
        </h1>
        {/*imprimir los /n como saltos de linea*/}
        <p className="max-w-xl whitespace-pre-line text-justify text-xs lg:max-w-4xl lg:text-xl">{texto}</p>
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
    </div>
  )
}
