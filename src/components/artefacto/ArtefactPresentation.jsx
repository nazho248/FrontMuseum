import { motion } from 'framer-motion'
import { TbAugmentedReality } from 'react-icons/tb'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { LiaFileDownloadSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'

export function ArtefactPresentation() {
  const estilo = {
    backgroundImage: 'url(/assets/img/arqueologia.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <div className="relative flex max-h-screen w-11/12 flex-col gap-4 p-5 lg:p-10" style={estilo}>
      {/* Texto comentado en la mitad derecha con fondo negro y blanco */}
      <div className="w-4/6 self-center rounded-md bg-black bg-opacity-60 p-5 text-center text-sm text-white lg:text-2xl">
        <p>Encontrarás 16 piezas arqueológicas que puedes descargar en el catálogo o navegar en la muestra virtual</p>
      </div>

      <div className="flex  transform gap-8 self-center p-5 text-white ">
        <a
          target={'_blank'}
          href="/Re-Leyendo Arte-Factos_2023.pdf"
          className={'scale-75 transition-all duration-500 hover:scale-110 hover:text-orange-400 lg:scale-100'}
        >
          <LiaFileDownloadSolid size="5rem" />
        </a>

        <Link to={'/artefacto/C283'}>
          <FaMagnifyingGlass
            size="5rem"
            className={'scale-75 transition-all duration-500 hover:scale-110 hover:text-orange-400 lg:scale-100'}
          />
        </Link>
      </div>

      {/*texto en la parte inferior  como Nota*/}
      <div className="absolute bottom-0 left-2 lg:mb-1">
        <p className={'flex text-sm text-white lg:text-xl'}>
          Nota: Para acceder a la Realidad aumentada utiliza <strong> Chrome </strong>en<strong> Android </strong> y
          presiona <TbAugmentedReality className={'text-2xl'} />.
        </p>
      </div>
    </div>
  )
}
