"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls, Html } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function G1Model({ trackingEnabled }: { trackingEnabled: boolean }) {
  const { scene } = useGLTF("/models/base_basic_shaded.glb");
  const modelRef = useRef<THREE.Group>(null);

  useFrame(({ mouse }) => {
    if (trackingEnabled && modelRef.current) {
      const targetY = mouse.x * Math.PI * 0.25;
      const targetX = -mouse.y * Math.PI * 0.10;

      modelRef.current.rotation.y = THREE.MathUtils.lerp(
        modelRef.current.rotation.y,
        targetY,
        0.05
      );

      modelRef.current.rotation.x = THREE.MathUtils.lerp(
        modelRef.current.rotation.x,
        targetX,
        0.05
      );
    }
  });

  return <primitive ref={modelRef} object={scene} scale={1.4} position={[0, -1.4, 0]} />;
}

export default function G1ModelViewer({ trackingEnabled }: { trackingEnabled: boolean }) {
  return (
    <div className="w-full h-[1000px] flex justify-center items-center bg-gradient-to-br from-gray-900 to-black">
      <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }}>
        <Suspense
          fallback={
            <Html center>
              <div className="text-white">Loading model...</div>
            </Html>
          }
        >
          <ambientLight intensity={0.9} />
          <directionalLight intensity={0.6} position={[5, 5, 5]} />
          <Environment preset="sunset" />
          <G1Model trackingEnabled={trackingEnabled} />
          <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
        </Suspense>
      </Canvas>
    </div>
  );
}