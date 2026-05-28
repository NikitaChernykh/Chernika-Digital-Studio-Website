import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import type { Group, Mesh } from "three";

const BERRY = {
  deep: "#4338ca",
  mid: "#6366f1",
  light: "#a5b4fc",
  bloom: "#c4b5fd",
  leaf: "#6ee7a0",
  leafDark: "#34d399",
};

type HeroScene3DProps = {
  quality?: "mobile" | "desktop";
};

function BerryHighlight({ position, scale = 0.14 }: { position: [number, number, number]; scale?: number }) {
  return (
    <mesh position={position} scale={scale}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshStandardMaterial
        color={BERRY.bloom}
        emissive={BERRY.light}
        emissiveIntensity={0.45}
        roughness={0.2}
        metalness={0.05}
      />
    </mesh>
  );
}

function CuteEyes() {
  return (
    <group position={[0, 0.08, 0.42]}>
      <mesh position={[-0.11, 0, 0]}>
        <sphereGeometry args={[0.055, 10, 10]} />
        <meshStandardMaterial color="#1e1b4b" roughness={0.4} />
      </mesh>
      <mesh position={[0.11, 0, 0]}>
        <sphereGeometry args={[0.055, 10, 10]} />
        <meshStandardMaterial color="#1e1b4b" roughness={0.4} />
      </mesh>
      <mesh position={[-0.085, 0.03, 0.04]} scale={0.35}>
        <sphereGeometry args={[0.055, 8, 8]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0.115, 0.03, 0.04]} scale={0.35}>
        <sphereGeometry args={[0.055, 8, 8]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

function LeafSprig() {
  return (
    <group position={[0, 0.72, 0.05]} rotation={[0.2, 0.4, 0.15]}>
      <mesh rotation={[0, 0, 0.5]} scale={[0.35, 0.12, 0.08]}>
        <sphereGeometry args={[1, 10, 10]} />
        <meshStandardMaterial color={BERRY.leaf} roughness={0.6} metalness={0.05} />
      </mesh>
      <mesh position={[0.22, 0.06, 0]} rotation={[0, 0, -0.6]} scale={[0.28, 0.1, 0.07]}>
        <sphereGeometry args={[1, 10, 10]} />
        <meshStandardMaterial color={BERRY.leafDark} roughness={0.6} metalness={0.05} />
      </mesh>
    </group>
  );
}

function HeroBerry({ mobile }: { mobile: boolean }) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.9}>
      <group scale={mobile ? 1.05 : 1.15}>
        <mesh ref={ref}>
          <sphereGeometry args={[0.72, mobile ? 32 : 48, mobile ? 32 : 48]} />
          <MeshDistortMaterial
            color={BERRY.mid}
            emissive={BERRY.deep}
            emissiveIntensity={0.35}
            roughness={0.35}
            metalness={0.08}
            distort={0.22}
            speed={1.4}
          />
        </mesh>
        <BerryHighlight position={[0.22, 0.28, 0.48]} scale={0.16} />
        <BerryHighlight position={[-0.08, 0.42, 0.38]} scale={0.07} />
        <CuteEyes />
        <LeafSprig />
      </group>
    </Float>
  );
}

function MiniBerry({
  position,
  scale,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
}) {
  return (
    <Float speed={speed} rotationIntensity={0.25} floatIntensity={1.1}>
      <group position={position} scale={scale}>
        <mesh>
          <sphereGeometry args={[0.32, 16, 16]} />
          <meshStandardMaterial
            color={BERRY.mid}
            emissive={BERRY.deep}
            emissiveIntensity={0.25}
            roughness={0.4}
            metalness={0.05}
          />
        </mesh>
        <BerryHighlight position={[0.1, 0.12, 0.22]} scale={0.11} />
      </group>
    </Float>
  );
}

function BerryOrbit({ mobile }: { mobile: boolean }) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.12;
  });

  const berries: { pos: [number, number, number]; scale: number; speed: number }[] = mobile
    ? [
        { pos: [1.4, 0.35, -0.4], scale: 0.8, speed: 1.6 },
        { pos: [-1.35, -0.2, 0.15], scale: 0.72, speed: 1.9 },
      ]
    : [
        { pos: [1.9, 0.5, -0.6], scale: 0.85, speed: 1.6 },
        { pos: [-1.85, -0.35, 0.2], scale: 0.75, speed: 1.9 },
        { pos: [1.2, -1.1, 0.8], scale: 0.7, speed: 2.1 },
        { pos: [-1.3, 1.0, 0.5], scale: 0.65, speed: 1.7 },
        { pos: [0.3, 1.45, -0.9], scale: 0.55, speed: 2.3 },
      ];

  return (
    <group ref={groupRef}>
      {berries.map((berry, i) => (
        <MiniBerry key={i} position={berry.pos} scale={berry.scale} speed={berry.speed} />
      ))}
    </group>
  );
}

function Scene({ mobile }: { mobile: boolean }) {
  return (
    <>
      <fog attach="fog" args={["#0f0a1f", 5, 16]} />
      <ambientLight intensity={0.55} color="#c4b5fd" />
      <pointLight position={[3, 4, 4]} intensity={1.1} color="#818cf8" />
      <pointLight position={[-3, 1, 3]} intensity={0.8} color="#a78bfa" />
      <pointLight position={[0, -2, 2]} intensity={0.45} color="#6366f1" />

      <Sparkles
        count={mobile ? 22 : 45}
        scale={mobile ? [10, 6, 6] : [12, 7, 8]}
        size={mobile ? 2.5 : 2}
        speed={0.25}
        opacity={0.55}
        color="#c4b5fd"
      />
      {!mobile && (
        <Sparkles
          count={25}
          scale={[8, 5, 6]}
          size={1.5}
          speed={0.15}
          opacity={0.35}
          color="#818cf8"
        />
      )}

      <group position={[0, mobile ? 0.05 : -0.15, 0]}>
        <HeroBerry mobile={mobile} />
        <BerryOrbit mobile={mobile} />
      </group>
    </>
  );
}

export function HeroScene3D({ quality = "desktop" }: HeroScene3DProps) {
  const mobile = quality === "mobile";

  return (
    <Canvas
      className="h-full w-full"
      camera={{
        position: [0, mobile ? 0.1 : 0, mobile ? 5.4 : 5.2],
        fov: 50,
      }}
      dpr={mobile ? [1, 1.25] : [1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
    >
      <Scene mobile={mobile} />
    </Canvas>
  );
}
