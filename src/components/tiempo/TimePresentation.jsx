import { SlArrowLeft } from 'react-icons/sl'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export function TimePresentation(props) {
  const navigate = useNavigate()

  return (
    <div className="bottom-0 flex h-full w-screen flex-col   items-center  justify-center text-center text-white">
      <h1 className="whitespace-pre-line text-3xl lg:text-7xl">{props.data.titulo}</h1>
      <motion.div
        onClick={() => {
          navigate(`/Tiempo/${props.year}/info`)
        }}
        initial={{ marginLeft: 0 }}
        animate={{ marginLeft: 40 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="mb-4 flex w-1/2 -translate-x-1/2  transform cursor-pointer border-b-2 border-slate-50 pt-5 lg:mb-14 lg:border-b-4 lg:pt-10 "
      >
        <SlArrowLeft className="absolute -translate-x-3  -translate-y-4 transform text-4xl lg:-translate-x-4 lg:-translate-y-7 lg:text-6xl" />
      </motion.div>
      <p className="w-2/3 transform text-sm  lg:text-lg ">{props.data.texto}</p>
    </div>
  )
}
