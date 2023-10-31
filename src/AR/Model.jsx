import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export const Model = ({ position, model, scale, rotate }) => {
  const gltf = useLoader(GLTFLoader, model)
  const modelRef = useRef()
  useFrame((state, delta) => {
    if (rotate) modelRef.current.rotation.y += 0.002
  })
  //ubicar el centro del modelo en el centro de la escena
  gltf.scene.traverse(node => {
    if (node.isMesh) {
      node.geometry.center()
    }
  })

  return (
    /*esperar minimo 1 segundo antes de */
    <Suspense fallback={null} delay={1000}>
      <primitive object={gltf.scene} position={position} scale={scale} ref={modelRef} />
    </Suspense>
  )
}
