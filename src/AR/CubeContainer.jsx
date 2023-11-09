import { Canvas } from '@react-three/fiber'
import { HitXR } from './HitXR'
import { startSession, XR } from '@react-three/xr'
import { Fragment, useCallback, useEffect, useState } from 'react'
import { TbAugmentedReality } from 'react-icons/tb'
import InterfaceAR from './InterfaceAR'

async function browserHasImmersiveArCompatibility() {
  if (window.navigator.xr) {
    const isSupported = await navigator.xr.isSessionSupported('immersive-ar')
    console.info(`[DEBUG] ${isSupported ? 'Browser supports immersive-ar' : 'Browser does not support immersive-ar'}`)
    return isSupported
  }
  return false
}

const CubeContainer = ({ model, webxr, setwebxr, init, setInit }) => {
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    browserHasImmersiveArCompatibility().then(res => {
      setIsSupported(res)
    })
  }, [])

  const [overlayContent, setOverlayContent] = useState(null)

  let buttonRef = useCallback(node => {
    if (node !== null) {
      setOverlayContent(node)
    }
  }, [])

  let session = false
  const handleClick = async () => {
    session = await startSession('immersive-ar', {
      requiredFeatures: ['hit-test'],
      optionalFeatures: ['hit-test', 'dom-overlay'],
      domOverlay: { root: overlayContent },
    })
    //marcar webxr true o false segun suceda
    setwebxr(true)
    setInit(true)
  }

  return (
    <Fragment>
      {/*es importante que este en un componente por aparte y siempre se esté renderizando para poderlo pasar en dom*/}
      <InterfaceAR ref={buttonRef} init={init} setInit={setInit} setwebxr={setwebxr} />
      <Canvas camera={{ position: [0, 1, 0], fov: 20 }} width={window.innerWidth} height={window.innerHeight}>
        <XR>
          <HitXR model={model} />
        </XR>
      </Canvas>
      {isSupported && !session && (
        <button
          onClick={handleClick}
          className="-translate-y-12 animate-pulse rounded-md bg-white text-5xl drop-shadow-xl lg:-translate-y-16 lg:text-6xl"
        >
          <TbAugmentedReality />
        </button>
      )}
    </Fragment>
  )
}

export default CubeContainer
