"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function SacredGeometry() {
  const outerRef = useRef<THREE.Mesh>(null!);
  const innerRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (outerRef.current) {
      outerRef.current.rotation.x += delta * 0.15;
      outerRef.current.rotation.y += delta * 0.2;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x -= delta * 0.25;
      innerRef.current.rotation.y -= delta * 0.3;
    }

    if (groupRef.current) {
      // Gentle mouse parallax
      const targetX = (state.pointer.x * Math.PI) / 8;
      const targetY = (-state.pointer.y * Math.PI) / 8;
      groupRef.current.rotation.y +=
        (targetX - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x +=
        (targetY - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Sacred Icosahedron */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshStandardMaterial
          color="#FF9933"
          emissive="#693800"
          wireframe
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Inner Sacred Octahedron */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[1.3, 0]} />
        <meshStandardMaterial
          color="#F2B705"
          emissive="#F2B705"
          emissiveIntensity={0.3}
          wireframe
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>

      {/* Center glowing node */}
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#0FA3B1" />
      </mesh>
    </group>
  );
}

function FloatingEmbers({ count = 35 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const particlesGeometry = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geom;
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef} geometry={particlesGeometry}>
      <pointsMaterial
        size={0.06}
        color="#F2B705"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#FF9933" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#0FA3B1" />
        <SacredGeometry />
        <FloatingEmbers />
      </Canvas>
    </div>
  );
}
