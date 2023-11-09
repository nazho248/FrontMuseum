import Zoom from 'react-medium-image-zoom'

export function RightSide({ artefacto_desc, color }) {
  return (
    <div className="flex h-screen w-9/12 flex-col lg:w-8/12">
      <div className={'lg:p-100 flex h-4/6 flex-col items-center justify-center p-10 ' + color + '_right'}>
        <h1 className={'font-regular w-full text-2xl font-bold lg:text-5xl ' + color + '_text_tittle'}>
          {artefacto_desc.titulo} {artefacto_desc.tipo}
        </h1>
        <br />
        <p className="text-justify text-xs text-white lg:text-2xl">{artefacto_desc.analisis}</p>
      </div>
      <div className="relative flex h-2/6 flex-row bg-gray-500">
        {/* Fondo de patrón con filtro blanco */}
        <div
          className="bg-pattern absolute left-0 top-0 h-full w-full bg-gradient-to-r from-white to-gray-600 bg-cover bg-center"
          style={{
            backgroundImage: `url(../assets/patterns/pattern_${color}.jpg)`,
            objectFit: 'cover',
          }}
        />
        {/* Primer imagen */}
        <div className="mx-auto max-h-full w-2/6 rounded-md drop-shadow-md lg:w-4/6 lg:w-full">
          <Zoom>
            <img
              className="h-auto w-full object-cover"
              alt="Descripción de la imagen"
              src={'../assets/img/estetica/' + artefacto_desc.nombre + '_1.jpg'}
            />
          </Zoom>
        </div>
        <div className="mx-auto max-h-full w-2/6 rounded-md drop-shadow-md lg:w-4/6 lg:w-full">
          <Zoom>
            <img
              className="h-auto w-full object-cover"
              alt="Descripción de la imagen"
              src={'../assets/img/artefactos/Frontal/' + artefacto_desc.nombre + '.jpg'}
            />
          </Zoom>
        </div>
      </div>
    </div>
  )
}
