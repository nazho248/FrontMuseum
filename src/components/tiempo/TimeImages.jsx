import { motion } from 'framer-motion'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import Zoom from 'react-medium-image-zoom'
import { FaInfoCircle } from 'react-icons/fa'
import React, { Fragment, useState } from 'react'

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
            <ImagenT key={index} imagen={imagen} />
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

export function ImagenT({ imagen }) {
  const [referencia, setReferencia] = useState(false)

  return (
    <div className=" transform rounded-lg border border-gray-200 bg-white/70 shadow transition-all duration-500">
      {/*imagen en la parte superior cuadrada*/}

      <Zoom>
        <img
          className="flex aspect-square max-h-48 w-full grow rounded-t-lg object-cover lg:max-h-none"
          src={'../../assets/img/Timeline/' + imagen.imagen}
          alt={imagen.descripcion}
        />
      </Zoom>

      <p className="m-3 text-center text-xs text-gray-950 lg:text-base">{imagen.descripcion}</p>

      <div className="relative">
        <span
          className="absolute -top-8 right-0 rounded-md bg-slate-500 p-2 text-white"
          onClick={() => setReferencia(!referencia)}
        >
          <FaInfoCircle />
        </span>
      </div>

      {referencia && (
        <motion.div
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{
            scale: 0.2,
            opacity: 0,
            transition: { duration: 0.5 },
          }}
          transition={{ duration: 0.5 }}
        >
          <hr />
          <span className={'flex self-end text-slate-900'}>
            <div className={'enlace_referencia mx-4 p-2'} dangerouslySetInnerHTML={{ __html: imagen.fuente }} />
          </span>
        </motion.div>
      )}
    </div>
  )
}
