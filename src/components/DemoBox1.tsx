"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber"; // Fiber for integrating Three.js with React.
import { useRouter } from "next/navigation";
import { BackSide, TextureLoader } from "three";

function Background() {
  const texture = useLoader(TextureLoader, "/1-Entrance.jpeg"); // Load texture from public folder.

  return (
    <mesh scale={[-50, 50, 50]} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial map={texture} side={BackSide} />
    </mesh>
  );
}

function Footstep() {
  const texture = useLoader(TextureLoader, "/footstep.png");
  const router = useRouter();

  const handleClick = () => {
    router.push("/next-scene");
  };

  return (
    <mesh
      position={[30, -20, 30]}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={handleClick}
    >
      <planeGeometry args={[7, 7]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
}

export default function DemoBox() {
  return (
    <Canvas>
      <OrbitControls /> {/* Điều khiển camera */}
      <Background /> {/* Nền của cảnh */}
      <Footstep /> {/* Bước chân */}
    </Canvas>
  );
}
