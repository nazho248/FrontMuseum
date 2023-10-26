import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react'

export const Model = ({ position }) => {
  const gltf = useLoader(GLTFLoader, '/assets/models/C183.glb')
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} position={position} />
    </Suspense>
  )
}
