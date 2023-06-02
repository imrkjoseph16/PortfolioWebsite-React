import { OrbitControls, ScrollControls } from "@react-three/drei";

import { EffectComposer, DepthOfField, Bloom, Vignette } from '@react-three/postprocessing'
import { Environment } from "@react-three/drei";
import { Office } from "./Office";
import { Canvas } from '@react-three/fiber'

export const Experiences = () => {
  return (
    <Canvas
      shadows
      camera={{
        fov: 64,
        position: [2.3, 0, -0.1],
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={1} height={300} />
        <Bloom intensity={0.3} luminanceThreshold={0.1} luminanceSmoothing={0.3} height={300} />
      </EffectComposer>

      <ambientLight intensity={3} />
      <hemisphereLight intensity={1} groundColor="white" />
      <pointLight intensity={3} />
      <spotLight
        position={[3, 8, 5]}
        angle={2}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={1024} />

      <OrbitControls
        enablePan={false}
        enableZoom={false} />
      <ScrollControls pages={4} damping={0.25}>
        <Office />
      </ScrollControls>
    </Canvas>
  );
};
