import React, { Fragment, useEffect } from 'react'
import { BottomLinks } from './BottomLinks'
import { ButtonModal } from '../ButtonModal'
import { motion } from 'framer-motion'

export function Home({ bottomrows, images, paragraphs, firstime, setFirstime }) {
  const [page, setPage] = React.useState(0)

  useEffect(() => {
    if (firstime) {
      //despues de 3 segundos, setactivo true
      setTimeout(() => {
        sumarReinicio()
        setFirstime(false)
      }, 3000)
    }
  }, [firstime])

  const sumarReinicio = () => {
    if (page === 2) {
      setPage(0)
    } else {
      setPage(page + 1)
    }
  }

  return (
    <Fragment>
      <div className="frame" style={{ backgroundImage: "url('/assets/img/border-smooth.png')" }}>
        <ButtonModal />
        <div className="contenty flex items-center justify-center">
          <div className="z-10 flex flex-row items-center justify-center">
            <motion.div
              onClick={() => sumarReinicio()}
              className=" mb-10 p-6 lg:mb-0 lg:p-16"
              style={{ borderColor: '#ffd869' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              key={page}
            >
              {page === 0 ? <Titulo /> : <Parrafo texto={paragraphs[page - 1]} page={page} />}
            </motion.div>
          </div>
          <BottomLinks bottomrows={bottomrows} images={images} />
        </div>
      </div>

      {/*
            <ModalInfo/>
*/}
    </Fragment>
  )
}

function Titulo() {
  return (
    <Fragment>
      <h1 className=" mb-2 text-center text-3xl lg:text-6xl" style={{ color: '#ffd869' }}>
        Re-leyendo Artefactos
      </h1>
      <p className=" text-center text-xl lg:mb-2 lg:text-3xl" style={{ color: '#fc9f8e' }}>
        Museo Arqueológico, Etnológico e Histórico
      </p>
      <p className=" text-end text-xl  lg:text-3xl" style={{ color: '#fc9f8e' }}>
        UDES
      </p>
    </Fragment>
  )
}

function Parrafo({ texto, page }) {
    console.log(texto)
    return (
    <Fragment>
        <div
            className="mb-6 max-w-lg text-center text-sm md:text-base lg:max-w-4xl lg:text-2xl whitespace-pre-line"
            style={{color: '#ffffff', lineHeight: '1.625em'}}
        >
            <div  dangerouslySetInnerHTML={{__html: texto}}/>

            {page === 1 && (
                <span className="cursor-pointer text-center text-sm underline lg:text-xl" style={{color: '#fc9f8e'}}>
            {' '}
                    Leer más...
          </span>
            )}
        </div>
    </Fragment>
    )
}
