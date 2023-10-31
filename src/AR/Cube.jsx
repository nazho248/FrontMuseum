import { Fragment, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export const Cube = ({ position }) => {
  const cubeRef = useRef()

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta
  })

  return (
    <Fragment>
      <mesh ref={cubeRef} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Fragment>
  )
}

export default Cube
