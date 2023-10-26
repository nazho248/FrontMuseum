import { Canvas } from '@react-three/fiber'
import { HitXR } from './HitXR'
import { ARButton, XR } from '@react-three/xr'
import { Fragment, useEffect, useState } from 'react'

async function browserHasImmersiveArCompatibility() {
  if (window.navigator.xr) {
    const isSupported = await navigator.xr.isSessionSupported('immersive-ar')
    console.info(`[DEBUG] ${isSupported ? 'Browser supports immersive-ar' : 'Browser does not support immersive-ar'}`)
    return isSupported
  }
  return false
}

const CubeContainer = () => {
  document.body.style.margin = 0
  document.body.style.overflow = 'hidden'
  const [isSupported, setIsSupported] = useState(false)
  const [init, setInit] = useState(false)

  useEffect(() => {
    browserHasImmersiveArCompatibility().then(res => {
      setIsSupported(res)
    })
  }, [])

  return (
    <Fragment>
      {isSupported && (
        <Fragment>
          <h1>Bienvenido 👍</h1>
          <p>Tu navegador Soporta WebXr </p>

          <ARButton
            sessionInit={{
              requiredFeatures: ['hit-test'],
            }}
            onClick={() => {
              console.log('pressed')
            }}
          />
          {/*hide canvas*/}
          <Canvas>
            <XR>
              <HitXR />
            </XR>
          </Canvas>
        </Fragment>
      )}
      {!isSupported && (
        <Fragment>
          <h1>Lo sentimos 😢</h1>
          <p>Tu navegador no soporta WebXr </p>
        </Fragment>
      )}
    </Fragment>
  )
}

export default CubeContainer
