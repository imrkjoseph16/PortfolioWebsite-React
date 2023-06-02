import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../widget/Loader'

const AndroidPhone = () => {

  const androidPhone = useGLTF('./android_phone/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.8}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024} />

      <primitive
        object={androidPhone.scene}
        scale={0.5}
        position={[1, -4, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  )
}

const AndroidPhoneCanvas = () => {

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{
        position: [-50, 450, 30],
        fov: 35,
      }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <AndroidPhone />
      </Suspense>

      <Preload all />
    </Canvas>

  )
}

export default AndroidPhoneCanvas