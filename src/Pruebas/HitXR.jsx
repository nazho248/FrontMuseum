import { OrbitControls } from '@react-three/drei'
import { Fragment, useRef, useState } from 'react'
import { Interactive, useHitTest, useXR } from '@react-three/xr'
import Cube from './Cube'
import { useThree } from 'react-three-fiber'
import { Model } from './Model'

export const HitXR = () => {
  const reticleRef = useRef()
  const [models, setmodels] = useState([])
  const { isPresenting } = useXR()

  useThree(({ camera }) => {
    if (!isPresenting) {
      camera.position.z = 3
    }
  })

  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(reticleRef.current.position, reticleRef.current.quaternion, reticleRef.current.scale)
    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0)
  })

  const placeModel = e => {
    let position = e.intersection.object.position.clone()
    let id = Date.now()
    setmodels([...models, { position, id }])
  }

  return (
    <Fragment>
      <OrbitControls />
      <ambientLight />
      {isPresenting &&
        models.map(({ position, id }) => {
          return <Model key={id} position={position} />
        })}
      {isPresenting && (
        <Interactive onSelect={placeModel}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.14, 0.15, 16]} />
            <meshBasicMaterial color={'white'} side={2} />
          </mesh>
        </Interactive>
      )}

      {!isPresenting && <Model />}
    </Fragment>
  )
}
