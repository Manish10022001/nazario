// import React, { useRef, useState, useMemo } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Environment, OrbitControls, Html } from "@react-three/drei";
// import * as THREE from "three";

// // Optional: Load a GLB when ready
// // import { useGLTF } from "@react-three/drei";
// // const GlassesModel = ({ url, autoRotate }) => {
// //   const group = useRef();
// //   const { scene } = useGLTF(url);
// //   useFrame((_, delta) => {
// //     if (autoRotate && group.current) group.current.rotation.y += delta * 0.3;
// //   });
// //   return <primitive ref={group} object={scene} dispose={null} />;
// // };

// // Procedural placeholder frame so it works without a model
// const PlaceholderGlasses = ({ color = "#111827", metal = "#9ca3af", autoRotate = true }) => {
//   const group = useRef();
//   useFrame((_, delta) => {
//     if (autoRotate && group.current) group.current.rotation.y += delta * 0.3;
//   });

//   const matFrame = useMemo(
//     () => new THREE.MeshStandardMaterial({ color, metalness: 0.4, roughness: 0.35 }),
//     [color]
//   );
//   const matMetal = useMemo(
//     () => new THREE.MeshStandardMaterial({ color: metal, metalness: 0.9, roughness: 0.2 }),
//     [metal]
//   );
//   const matLens = useMemo(
//     () =>
//       new THREE.MeshPhysicalMaterial({
//         color: "#a7f3d0",
//         transmission: 0.9,
//         transparent: true,
//         roughness: 0.05,
//         thickness: 0.4,
//         ior: 1.5,
//         attenuationColor: "#93c5fd",
//         attenuationDistance: 2.5,
//       }),
//     []
//   );

//   return (
//     <group ref={group} rotation={[0.15, -0.6, 0]}>
//       {/* Bridge */}
//       <mesh material={matMetal} position={[0, 0.02, 0]}>
//         <boxGeometry args={[0.22, 0.02, 0.04]} />
//       </mesh>

//       {/* Left frame ring */}
//       <mesh material={matFrame} position={[-0.28, 0, 0]}>
//         <torusGeometry args={[0.18, 0.015, 24, 64]} />
//       </mesh>
//       {/* Right frame ring */}
//       <mesh material={matFrame} position={[0.28, 0, 0]}>
//         <torusGeometry args={[0.18, 0.015, 24, 64]} />
//       </mesh>

//       {/* Lenses */}
//       <mesh material={matLens} position={[-0.28, 0, 0]}>
//         <circleGeometry args={[0.165, 48]} />
//       </mesh>
//       <mesh material={matLens} position={[0.28, 0, 0]}>
//         <circleGeometry args={[0.165, 48]} />
//       </mesh>

//       {/* Temples */}
//       <mesh material={matMetal} position={[0.47, 0.03, -0.02]} rotation={[0, 0.05, 0.03]}>
//         <boxGeometry args={[0.36, 0.02, 0.02]} />
//       </mesh>
//       <mesh material={matMetal} position={[-0.47, 0.03, -0.02]} rotation={[0, -0.05, -0.03]}>
//         <boxGeometry args={[0.36, 0.02, 0.02]} />
//       </mesh>

//       {/* Nose pads */}
//       <mesh material={matMetal} position={[0.06, -0.02, 0.03]} rotation={[0.2, 0.1, 0]}>
//         <boxGeometry args={[0.05, 0.02, 0.02]} />
//       </mesh>
//       <mesh material={matMetal} position={[-0.06, -0.02, 0.03]} rotation={[0.2, -0.1, 0]}>
//         <boxGeometry args={[0.05, 0.02, 0.02]} />
//       </mesh>
//     </group>
//   );
// };

// const Eyewear3D = ({ colorHex, autoRotateDefault = true }) => {
//   const [autoRotate, setAutoRotate] = useState(autoRotateDefault);

//   return (
//     <div className="ratio ratio-16x9  overflow-hidden">
//       <Canvas camera={{ fov: 40, position: [0, 0.2, 2.2] }}>
//         {/* Lights */}
//         <hemisphereLight intensity={0.6} groundColor="#bcbcbc" />
//         <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
//         <directionalLight position={[-5, -2, -3]} intensity={0.4} />

//         {/* Model: swap PlaceholderGlasses with GLB loader when ready */}
//         <PlaceholderGlasses color={colorHex} autoRotate={autoRotate} />
//         {/* <GlassesModel url="/models/blue-light-guardian.glb" autoRotate={autoRotate} /> */}

//         {/* Studio environment */}
//         <Environment preset="studio" />

//         {/* Controls */}
//         <OrbitControls
//           enablePan={false}
//           enableDamping
//           dampingFactor={0.08}
//           minDistance={1.5}
//           maxDistance={3.2}
//           onStart={() => setAutoRotate(false)}
//           onEnd={() => setAutoRotate(true)}
//         />

//         {/* Small helper UI */}
//         <Html position={[0, -0.35, 0]} center>
//           <div
//             className="badge bg-dark bg-opacity-75"
//             style={{ userSelect: "none", cursor: "default" }}
//           >
//             Drag to rotate · Scroll to zoom
//           </div>
//         </Html>
//       </Canvas>
//     </div>
//   );
// };

// export default Eyewear3D;

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const PlaceholderGlasses = ({
  color = "#111827",
  metal = "#9ca3af",
  autoRotate = true,
}) => {
  const group = useRef();
  useFrame((_, delta) => {
    if (autoRotate && group.current) group.current.rotation.y += delta * 0.3;
  });

  const matFrame = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color,
        metalness: 0.4,
        roughness: 0.35,
      }),
    [color]
  );
  const matMetal = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: metal,
        metalness: 0.9,
        roughness: 0.2,
      }),
    [metal]
  );
  const matLens = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#a7f3d0",
        transmission: 0.9,
        transparent: true,
        roughness: 0.05,
        thickness: 0.4,
        ior: 1.5,
        attenuationColor: "#93c5fd",
        attenuationDistance: 2.5,
      }),
    []
  );

  return (
    <group ref={group} rotation={[0.15, -0.6, 0]}>
      <mesh material={matMetal} position={[0, 0.02, 0]}>
        <boxGeometry args={[0.22, 0.02, 0.04]} />
      </mesh>
      <mesh material={matFrame} position={[-0.28, 0, 0]}>
        <torusGeometry args={[0.18, 0.015, 24, 64]} />
      </mesh>
      <mesh material={matFrame} position={[0.28, 0, 0]}>
        <torusGeometry args={[0.18, 0.015, 24, 64]} />
      </mesh>
      <mesh material={matLens} position={[-0.28, 0, 0]}>
        <circleGeometry args={[0.165, 48]} />
      </mesh>
      <mesh material={matLens} position={[0.28, 0, 0]}>
        <circleGeometry args={[0.165, 48]} />
      </mesh>
      <mesh
        material={matMetal}
        position={[0.47, 0.03, -0.02]}
        rotation={[0, 0.05, 0.03]}
      >
        <boxGeometry args={[0.36, 0.02, 0.02]} />
      </mesh>
      <mesh
        material={matMetal}
        position={[-0.47, 0.03, -0.02]}
        rotation={[0, -0.05, -0.03]}
      >
        <boxGeometry args={[0.36, 0.02, 0.02]} />
      </mesh>
      <mesh
        material={matMetal}
        position={[0.06, -0.02, 0.03]}
        rotation={[0.2, 0.1, 0]}
      >
        <boxGeometry args={[0.05, 0.02, 0.02]} />
      </mesh>
      <mesh
        material={matMetal}
        position={[-0.06, -0.02, 0.03]}
        rotation={[0.2, -0.1, 0]}
      >
        <boxGeometry args={[0.05, 0.02, 0.02]} />
      </mesh>
    </group>
  );
};

const Eyewear3D = ({ colorHex }) => {
  return (
    <div className="eyewear3d-wrap">
      <Canvas camera={{ fov: 40, position: [0, 0.2, 2.2] }}>
        <hemisphereLight intensity={0.6} groundColor="#bcbcbc" />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-5, -2, -3]} intensity={0.4} />
        <PlaceholderGlasses color={colorHex} autoRotate />
        <Environment preset="studio" />
        <OrbitControls
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          minDistance={1.5}
          maxDistance={3.2}
        />
      </Canvas>
    </div>
  );
};

export default Eyewear3D;
