import { OrbitControls } from '@react-three/drei'
import { Fragment, useRef, useState } from 'react'
import { Interactive, useHitTest, useXR } from '@react-three/xr'
import Cube from './Cube'
import { useThree } from 'react-three-fiber'
import { Model } from './Model'

export const HitXR = ({ model }) => {
  const reticleRef = useRef()
  const cubeHandler = useRef()
  const [models, setmodels] = useState([])
  const { isPresenting } = useXR()

  useThree(({ camera }) => {
    if (!isPresenting) {
      camera.position.set(0, 1, 0)
      camera.position.z = 3
      camera.updateProjectionMatrix()
    }
  })

  useHitTest((hitMatrix, hit) => {
    try {
      hitMatrix.decompose(reticleRef.current.position, reticleRef.current.quaternion, reticleRef.current.scale)
      hitMatrix.decompose(cubeHandler.current.position, cubeHandler.current.quaternion, cubeHandler.current.scale)
      reticleRef.current.rotation.set(-Math.PI / 2, 0, 0)
      cubeHandler.current.rotation.set(-Math.PI / 2, 0, 0)
    } catch (e) {
      console.log(e)
    }
  })

  const placeModel = e => {
    let position = reticleRef.current.position.toArray()
    let id = Date.now()
    setmodels([...models, { position, id }])
  }

  return (
    <Fragment>
      <OrbitControls
        enableDamping={true}
        dampingFactor={0.25}
        minDistance={1}
        maxPolarAngle={Math.PI / 1.85}
        minPolarAngle={0}
      />
      <ambientLight color={'white'} intensity={0.8} castShadow={false} />
      {isPresenting &&
        models.map(({ position, id }) => {
          return <Model key={id} position={position} model={model} scale={[1, 1, 1]} rotate={false} />
        })}
      {isPresenting && (
        <Fragment>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2} visible={true}>
            <ringGeometry args={[0.14, 0.15, 16]} position={[0, 0, 0]} />
            <meshBasicMaterial color={'white'} side={2} />
          </mesh>

          <Interactive onSelect={placeModel}>
            <mesh ref={cubeHandler} visible={false}>
              <boxGeometry args={[3, 4, 0.2]} />
              <meshStandardMaterial color="hotpink" />
            </mesh>
          </Interactive>
        </Fragment>
      )}

      {/*modelo con posicion centrada*/}
      {!isPresenting && <Model model={model} scale={[6, 6, 6]} rotate={true} position={[0, 0, 0]} />}
    </Fragment>
  )
}
