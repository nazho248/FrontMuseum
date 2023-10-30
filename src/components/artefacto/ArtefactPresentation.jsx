import { motion } from 'framer-motion'

export function ArtefactPresentation() {
  const estilo = {
    backgroundImage: 'url(/assets/img/arqueologia.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <div className="flex max-h-screen w-11/12 flex-col justify-center p-10" style={estilo}>
      {/*contenido dentro de la imagen*/}
      <div
        className="absolute right-1/4 top-1/4 translate-x-20 transform rounded-lg  border-2 border-dashed border-white px-8 py-5 text-center text-xl text-white lg:border-4  lg:text-4xl"
        style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
      >
        Navega Entre Nuestra <br /> Muestra Virtual
      </div>
      <motion.div
        className="absolute bottom-0 left-1/3 mb-10 lg:mb-32"
        animate={{ scale: [1, 1.1, 1] }}
        whileHover={{
          scale: 1.2,
          border: '5px solid #FEC400',
          borderRadius: '10px',
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 10,
            repeat: null,
            duration: 2,
          },
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <a href="/Re-Leyendo Arte-Factos_2023.pdf" target={'_blank'}>
          <button className="rounded-md bg-white px-5 py-4 text-base font-bold text-black lg:px-16  lg:py-10 lg:text-xl">
            Visita Nuestro Catálogo en Línea
          </button>
        </a>
      </motion.div>

      {/*<p className={'absolute  bottom-0 bg-slate-900/60 p-4 text-center text-xl text-white lg:text-xl'}>
        Encontrarás 17 piezas de la cultura Guane de la reserva UDES. Estas piezas han sido estudiadas desde el área de
        antropología
      </p>*/}
    </div>
  )
}
