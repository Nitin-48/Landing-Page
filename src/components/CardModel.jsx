import React, { useRef } from "react";
import { useGLTF, OrbitControls, Center } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

export default function CardModel(props) {
  const { scene } = useGLTF("/card.glb");
  const modelRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <Center>
  <primitive
    ref={modelRef}
    object={scene}
    scale={95}               // 🔁 bigger size
    rotation={[0, 0, Math.PI / 2]}   // 90° Y-axis left tilt
    {...props}
  />
</Center>

   <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={1}
        target={[0, 0, 0]}
        maxPolarAngle={Math.PI / 2.2}
        minPolarAngle={Math.PI / 3.0}
        // Optional mobile-only behavior:
        enableRotate={!isMobile ? true : true} // can toggle if needed
      />

    </>
);
}

useGLTF.preload("/card.glb");
