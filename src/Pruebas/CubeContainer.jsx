import { Canvas } from '@react-three/fiber'
import { HitXR } from './HitXR'
import { ARButton, startSession, stopSession, useXR, XR, XRButton } from '@react-three/xr'
import { Fragment, useEffect, useRef, useState } from 'react'
import { toggleSession } from '@react-three/xr'
import { TbAugmentedReality } from 'react-icons/tb'
import { TbAugmentedRealityOff } from 'react-icons/tb'

async function browserHasImmersiveArCompatibility() {
  if (window.navigator.xr) {
    const isSupported = await navigator.xr.isSessionSupported('immersive-ar')
    console.info(`[DEBUG] ${isSupported ? 'Browser supports immersive-ar' : 'Browser does not support immersive-ar'}`)
    return isSupported
  }
  return false
}

const CubeContainer = ({ model }) => {
  const buttonRef = useRef()
  const [isSupported, setIsSupported] = useState(false)
  const [init, setInit] = useState(false)

  useEffect(() => {
    browserHasImmersiveArCompatibility().then(res => {
      setIsSupported(res)
    })
  }, [])

  let session = false

  const handleClickStop = async () => {
    await toggleSession(session)
    setInit(false)
  }
  const handleClick = async () => {
    session = await startSession('immersive-ar', {
      requiredFeatures: ['local', 'hit-test'],
      optionalFeatures: ['dom-overlay'],
      domOverlay: { root: buttonRef.current },
    })
    setInit(true)
  }

  return (
    <Fragment>
      <Canvas camera={{ position: [0, 1, 0], fov: 20 }} width={window.innerWidth} height={window.innerHeight}>
        <XR>
          <HitXR model={model} />
        </XR>
      </Canvas>

      {isSupported &&
        (!init ? (
          <button
            ref={buttonRef}
            onClick={handleClick}
            className="-translate-y-12 animate-pulse rounded-md bg-white text-5xl drop-shadow-xl lg:-translate-y-16 lg:text-6xl"
          >
            <TbAugmentedReality />
          </button>
        ) : (
          <button
            ref={buttonRef}
            onClick={handleClickStop}
            className="    z-50 cursor-pointer     lg:text-6xl "
            style={{ zIndex: 99999 }}
          >
            <TbAugmentedRealityOff
              className={'absolute bottom-4 right-4 rounded-md bg-white p-3 text-5xl'}
              style={{ zIndex: 99999 }}
            />
          </button>
        ))}
    </Fragment>
  )
}

export default CubeContainer
