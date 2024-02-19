import React, { Fragment, useEffect } from 'react'
import { BackBtn } from '../BackBtn'
import { LeftSide } from '../components/estetica/LeftSide'
import { RightSide } from '../components/estetica/RightSide'
import { motion } from 'framer-motion'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { NotFound } from './NotFound'
import { EsteticaPresentation } from '../components/estetica/EsteticaPresentation'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { useSwipeable } from 'react-swipeable'

export function Estetica() {
  const navigate = useNavigate()
  document.body.id = 'estetica'
  document.title = 'Estética'
  const estetica = require('../data/estetica.json') //leer archivo json
  const estetica_array = Object.values(estetica) //convertir json a array
  const { id } = useParams() //el id es el nombre del artefacto de la URI

  //buscar entre los artefactos el que tenga el nombre que se pasa por parametro
  const artefacto_desc = estetica_array.find(estetica => estetica.nombre === id)
  const [color, setColor] = React.useState('gray')
  //arreglo con los colores para luego elegir aleatoriamente
  /*    const colores = ['gray', 'yellow', 'salmon', 'turquoise']
    color = colores [Math.floor(Math.random() * colores.length)]*/
  const colores = ['gray', 'yellow', 'salmon', 'turquoise']

  //cambiar el color cada que se cambia de id (link)
  useEffect(() => {
    setColor(colores[Math.floor(Math.random() * colores.length)])
  }, [id])
  console.log(id)

  const handlers = useSwipeable({
    onSwiped: eventData => {
      if (eventData.dir === 'Left') {
        console.log('izq')
        if (artefacto_index !== estetica_array.length - 1) {
          navigate('/Estetica/' + estetica_array[artefacto_index + 1].nombre)
        }
      } else if (eventData.dir === 'Right') {
        console.log('der')
        if (artefacto_index !== 0 && id !== undefined) {
          navigate('/Estetica/' + estetica_array[artefacto_index - 1].nombre)
        } else {
          navigate('/Estetica')
        }
      }
    },
  })

  if (artefacto_desc === undefined && id !== undefined) {
    return <NotFound />
  }
  //en que # de artefacto estoy?
  const artefacto_index = estetica_array.findIndex(estetica => estetica.nombre === id)

  return (
    <div {...handlers}>
      <BackBtn />
      <motion.div
        className="max-w-screen flex h-screen max-h-screen min-h-screen overflow-hidden"
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        {/*imprimir la presentacion si es el home*/}
        {id === undefined && <EsteticaPresentation />}

        {/*si el id esta entre los elements de artefactos*/}
        {id !== undefined && (
          <Fragment>
            <LeftSide color={color} />
            <RightSide artefacto_desc={artefacto_desc} color={color} />
          </Fragment>
        )}

        {/*si el index es el primero (0), imprimir que el link es solo /estetica, si no imprimir el link con el nombre del artefacto anterior*/}

        {/*flecha a la izquierda*/}
        {artefacto_index !== -1 && (
          <Link
            to={artefacto_index === 0 ? '/Estetica' : '/Estetica/' + estetica_array[artefacto_index - 1].nombre}
            className="fixed bottom-0 left-0 z-10 rounded-full bg-slate-800 p-3 lg:p-4"
          >
            <FaChevronLeft className="text-sm text-slate-100 lg:text-2xl" />
          </Link>
        )}

        {/*si el index es el ultimo, imprimir que el link es solo /estetica, si no imprimir el link con el nombre del artefacto siguiente*/}
        {artefacto_index !== estetica_array.length - 1 && (
          <Link
            to={'/Estetica/' + estetica_array[artefacto_index + 1].nombre}
            className="fixed bottom-0 right-0 z-10  rounded-full bg-slate-800 p-3 lg:p-4"
          >
            <FaChevronRight className="text-sm text-slate-100 lg:text-2xl" />
          </Link>
        )}
      </motion.div>
    </div>
  )
}
