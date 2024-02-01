import React, { Fragment, useEffect } from 'react'
import { BottomLinks } from './BottomLinks'
import { ButtonModal } from '../ButtonModal'
import { motion } from 'framer-motion'

export function Home({ bottomrows, images, paragraphs, firstime, setFirstime }) {
  const [activo, setActivo] = React.useState(false)

  useEffect(() => {
    if (firstime) {
      //despues de 3 segundos, setactivo true
      setTimeout(() => {
        setActivo(true)
        setFirstime(false)
      }, 3000)
    }
  }, [firstime])

  return (
    <Fragment>
      <div className="frame" style={{ backgroundImage: "url('/assets/img/border-smooth.png')" }}>
        <ButtonModal />
        <div className="contenty flex items-center justify-center">
          <div className="z-10 flex flex-row items-center justify-center">
            <motion.div
              onClick={() => setActivo(!activo)}
              className=" mb-10 p-6 lg:mb-0 lg:p-16"
              style={{ borderColor: '#ffd869' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              key={activo}
            >
              {activo ? (
                <Fragment>
                  {paragraphs.map((item, key) => (
                    <Fragment key={key}>
                      <p className="mb-6 text-center text-sm lg:text-3xl" style={{ color: '#ffffff' }}>
                        {item}
                      </p>
                    </Fragment>
                  ))}
                </Fragment>
              ) : (
                <Fragment>
                  <h1 className=" mb-2 text-center text-3xl lg:text-6xl" style={{ color: '#ffd869' }}>
                    Releyendo Artefactos
                  </h1>
                  <p className=" text-center text-xl lg:mb-2 lg:text-3xl" style={{ color: '#fc9f8e' }}>
                    Museo Arqueológico, Etnológico e Histórico
                  </p>
                  <p className=" text-end text-xl  lg:text-3xl" style={{ color: '#fc9f8e' }}>
                    UDES
                  </p>
                </Fragment>
              )}
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
