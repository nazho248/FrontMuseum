import { Fragment, useEffect, useState } from 'react'
import { BackBtn } from '../BackBtn'
import { ModelViewer } from '../components/artefacto/ModelViewer'
import { Content } from '../components/artefacto/Content'
import { NavPanel } from '../components/artefacto/NavPanel'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { ArtefactPresentation } from '../components/artefacto/ArtefactPresentation'
import { NotFound } from './NotFound'
import { ModelViewerUPT } from '../components/artefacto/ModelViewerUPT'

export function Artefacto() {
  document.title = 'Artefacto'
  document.body.id = 'Artefacto'
  document.body.className = 'h-screen max-h-screen'
  //leer archivo .json
  const artefactos = require('../data/artefactos.json')
  /*convertir a array*/
  const artefacts_array = Object.values(artefactos)
  //el id es el nombre del artefacto de la URI
  const { id } = useParams()
  console.log('id: ', id)

  const [isLoaded, setIsLoaded] = useState(false)
  const [change, setChange] = useState(false)

  useEffect(() => {
    // Simulamos un retraso de 1 segundo para cargar los recursos (ajusta según tus necesidades)
    //esto para que se cargue el recurso antes de mostrarlo y que la aniamcion se pueda visualizar
    const loadingDelay = setTimeout(() => {
      setIsLoaded(true)
    }, 500)
    return () => clearTimeout(loadingDelay)
  }, [])

  //buscar entre los artefactos el que tenga el nombre que se pasa por parametro
  const artefacto = artefacts_array.find(artefacto => artefacto.nombre === id)
  //si no se encuentra el artefacto
  if (artefacto === undefined && id !== undefined) {
    return <NotFound />
  }

  return (
    <div className="overflow-hidden">
      <BackBtn />
      <motion.div
        className="flex h-screen min-h-screen"
        initial={{ y: -500, opacity: 0 }}
        animate={{ y: isLoaded ? 0 : -1000, opacity: isLoaded ? 1 : 0 }}
        transition={{
          duration: 1,
          type: 'spring',
          damping: 25,
          stiffness: 200,
        }}
      >
        {id === undefined && <ArtefactPresentation />}
        {/*si el id esta entre los elements de artefactos*/}
        {id !== undefined && (
          <Fragment>
            {isLoaded && <ModelViewerUPT artefacto={artefacto} change={change} setChange={setChange} />}
            {isLoaded && <Content artefacto={artefacto} />}
          </Fragment>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        key={id}
      >
        <NavPanel artefactos={artefacts_array} change={change} setChange={setChange} />
      </motion.div>
    </div>
  )
}
