import { motion } from 'framer-motion'
import { PiArrowBendDownRightBold } from 'react-icons/pi'
import { TbAugmentedReality } from 'react-icons/tb'
export function ArtefactPresentation() {
  const estilo = {
    backgroundImage: 'url(/assets/img/arqueologia.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <div className="relative flex max-h-screen w-11/12 flex-col justify-between p-5 lg:p-10" style={estilo}>
      {/* Contenido de la esquina superior derecha */}
      <div className="flex flex-col items-end self-end">
        {/* Contenedor del texto */}
        <div
          className="text-md rounded-lg border-2 border-dashed border-white px-4 py-2 text-white lg:border-4 lg:px-8 lg:py-5 lg:text-4xl"
          style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
        >
          Navega Entre Nuestra <br /> Muestra Virtual
        </div>
        {/* Icono de la flecha */}
        <PiArrowBendDownRightBold className="text-5xl text-white lg:text-8xl" />
      </div>

      {/* Texto comentado en la mitad derecha con fondo negro y blanco */}
      <div className="w-4/6 self-end rounded-md bg-black bg-opacity-60 p-5 text-center text-sm text-white lg:text-2xl">
        <p>
          Encontrarás 17 piezas de la cultura Guane de la reserva UDES. Estas piezas han sido estudiadas desde el área
          de antropología. Podrás consultar el catalogo en el botón más abajo.
        </p>
      </div>

      {/* Contenido del botón en la parte inferior */}
      <motion.div
        className="mb-5 self-center lg:mb-16"
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
          <button className="rounded-md bg-white px-3 py-2 text-sm font-bold text-black lg:px-16 lg:py-10 lg:text-xl">
            Visita Nuestro Catálogo en Línea
          </button>
        </a>
      </motion.div>
      {/*texto en la parte inferior  como Nota*/}
      <div className="absolute bottom-0 left-2 lg:mb-1">
        <p className={'flex text-sm text-white lg:text-xl'}>
          Nota: Para acceder a la Realidad aumentada utiliza <strong> Chrome </strong>en<strong> Android </strong> y
          presiona <TbAugmentedReality className={'text-2xl'} />.
        </p>
      </div>
    </div>
  )

  /*
  return (
    <div className="flex max-h-screen w-11/12 flex-col justify-center p-10" style={estilo}>
      {/!*contenido dentro de la imagen*!/}
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

      {/!*<p className={'absolute  bottom-0 bg-slate-900/60 p-4 text-center text-xl text-white lg:text-xl'}>
        Encontrarás 17 piezas de la cultura Guane de la reserva UDES. Estas piezas han sido estudiadas desde el área de
        antropología
      </p>*!/}
    </div>
  )
*/
}
