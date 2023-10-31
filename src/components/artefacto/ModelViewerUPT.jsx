import { Suspense, useEffect, useRef } from 'react'
import CubeContainer from '../../AR/CubeContainer'
import { ImSpinner9 } from 'react-icons/im'
/*import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import SceneInit from '../../lib/SceneInit'
import { useLoader } from 'react-three-fiber'*/
export function ModelViewerUPT(artefacto) {
  //url del modelo en /pulic/assets/models

  let modelUrl = 0
  if (artefacto.artefacto.model !== 0) {
    modelUrl = '/assets/models/' + artefacto.artefacto.model
  }

  return (
    <div
      className="flex w-7/12 flex-col items-center  justify-center pb-6 pl-6 pr-6 align-middle lg:p-0"
      style={{ backgroundColor: '#f9e0dc' }}
    >
      <h1
        className="mb-0 text-center text-xl font-bold text-orange-800 lg:mb-12 lg:mb-4 lg:text-5xl"
        style={{ color: '#A62422' }}
      >
        UDES {artefacto.artefacto.nombre}
      </h1>
      <div id="Model1" className="h-3/5 w-10/12 rounded-lg bg-white lg:h-4/6 ">
        {modelUrl === 0 ? (
          <img
            className={'rounded-lg'}
            src={'/assets/img/artefactos/Frontal/' + artefacto.artefacto.nombre + '.jpg'}
            alt={artefacto.artefacto.nombre}
          />
        ) : (
          <Suspense
            fallback={
              <div className="flex h-full items-center justify-center">
                <ImSpinner9 className="animate-spin" />
                  Cargando
              </div>
            }
          >
            <CubeContainer model={modelUrl} />
          </Suspense>
        )}
      </div>
      <p
        className=" w-12/12 mx-5 mt-3 text-center text-sm font-light lg:mt-10 lg:text-2xl"
        style={{ color: '#A62422' }}
      >
        {artefacto.artefacto.descripcion}
      </p>
    </div>
  )
}
