import React, { Fragment } from 'react'
import { BackBtn } from '../BackBtn'
import { LeftSide } from '../components/estetica/LeftSide'
import { RightSide } from '../components/estetica/RightSide'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { NotFound } from './NotFound'
import { EsteticaPresentation } from '../components/estetica/EsteticaPresentation'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

export function Estetica() {
  document.body.id = 'estetica'
  document.title = 'Estética'
  //leer archivo json
  const estetica = require('../data/estetica.json')
  //convertir json a array
  const estetica_array = Object.values(estetica)
  //el id es el nombre del artefacto de la URI
  const { id } = useParams()

  //buscar entre los artefactos el que tenga el nombre que se pasa por parametro
  const artefacto_desc = estetica_array.find(estetica => estetica.nombre === id)
  //si no se encuentra el artefacto

  if (artefacto_desc === undefined && id !== undefined) {
    return <NotFound />
  }
  //en que # de artefacto estoy?
  const artefacto_index = estetica_array.findIndex(estetica => estetica.nombre === id)
  console.log('artefacto_index: ', artefacto_index)

  return (
    <Fragment>
      <BackBtn />
      <motion.div
        className="max-w-screen flex h-screen max-h-screen min-h-screen overflow-hidden"
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {/*imprimir la presentacion si es el home*/}
        {id === undefined && <EsteticaPresentation />}

        {/*si el id esta entre los elements de artefactos*/}
        {id !== undefined && (
          <Fragment>
            <LeftSide artefacto_desc={artefacto_desc} />
            <RightSide artefacto_desc={artefacto_desc} />
          </Fragment>
        )}

        {/*si el index es el primero (0), imprimir que el link es solo /estetica, si no imprimir el link con el nombre del artefacto anterior*/}

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
    </Fragment>
  )
}
