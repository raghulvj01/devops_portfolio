'use client'

import { useRef } from 'react'
import { Float, MeshTransmissionMaterial, Line } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export function NeuralNetwork(props: { position: [number, number, number], scale?: number }) {
  const ref = useRef<THREE.Group>(null!)
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.2
      ref.current.rotation.x += delta * 0.1
    }
  })
  
  const nodes = [
    [1, 1.2, 1], [-1, -0.8, 1], [0.8, -1.2, -1], [-1.2, 1, -0.8],
    [1.5, 0, 0.5], [0, 1.5, -0.5]
  ] as [number, number, number][]

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
      <group position={props.position} scale={props.scale || 1} ref={ref}>
         {/* Core Synapse Center */}
         <mesh>
           <sphereGeometry args={[0.35, 16, 16]}/>
           <MeshTransmissionMaterial thickness={0.5} roughness={0.1} transmission={1} ior={1.5} />
         </mesh>
         {/* Orbiting logic nodes */}
         {nodes.map((pos, i) => (
           <group key={i}>
             <mesh position={pos}>
               <sphereGeometry args={[0.1, 16, 16]}/>
               <meshBasicMaterial color="#00D4FF" />
             </mesh>
             <Line points={[[0,0,0], pos]} color="#00D4FF" lineWidth={1.5} transparent opacity={0.3} />
           </group>
         ))}
      </group>
    </Float>
  )
}

export function DataContainer(props: { position: [number, number, number], rotation: [number, number, number], scale?: number }) {
  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
      <group position={props.position} rotation={props.rotation} scale={props.scale || 1}>
        {/* Metal Cargo Box */}
        <mesh>
          <boxGeometry args={[1.5, 0.6, 0.6]} />
          <meshStandardMaterial color="#0A192F" roughness={0.4} metalness={0.8} />
        </mesh>
        {/* Holographic glowing wireframe indicating digital containerization */}
        <mesh>
          <boxGeometry args={[1.52, 0.62, 0.62]} />
          <meshBasicMaterial color="#00D4FF" wireframe transparent opacity={0.3} />
        </mesh>
      </group>
    </Float>
  )
}

export function Padlock(props: { position: [number, number, number], scale?: number }) {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
      <group position={props.position} scale={props.scale || 0.8}>
        {/* Glass Base */}
        <mesh position={[0, -0.2, 0]}>
          <boxGeometry args={[0.8, 0.6, 0.3]} />
          <MeshTransmissionMaterial thickness={0.5} roughness={0.1} transmission={1} ior={1.4} />
        </mesh>
        {/* Glowing Hook */}
        <mesh position={[0, 0.15, 0]}>
          <torusGeometry args={[0.25, 0.08, 16, 32, Math.PI]} />
          <meshStandardMaterial color="#00D4FF" roughness={0.1} metalness={0.5} emissive="#00D4FF" emissiveIntensity={0.8} />
        </mesh>
        {/* Holographic keyhole */}
        <mesh position={[0, -0.2, 0.16]}>
          <circleGeometry args={[0.1, 16]} />
          <meshBasicMaterial color="#00D4FF" />
        </mesh>
      </group>
    </Float>
  )
}

export function KubernetesAsset(props: { position: [number, number, number], scale?: number }) {
  const ref = useRef<THREE.Group>(null!)
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.z -= delta * 0.3
      ref.current.rotation.x += delta * 0.1
    }
  })
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <group position={props.position} scale={props.scale || 1} ref={ref}>
        {/* Core Heptagon Body */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.2, 7]} />
          <meshStandardMaterial color="#326CE5" roughness={0.2} metalness={0.8} />
        </mesh>
        {/* The 7 Spokes */}
        {Array.from({ length: 7 }).map((_, i) => (
          <mesh key={i} rotation={[0, 0, (i * Math.PI * 2) / 7]}>
            <cylinderGeometry args={[0.08, 0.08, 1.6, 16]} />
            <meshStandardMaterial color="#326CE5" roughness={0.2} metalness={0.8} />
          </mesh>
        ))}
        {/* Center inner hub */}
        <mesh position={[0, 0, 0.11]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0, 0, -0.11]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </group>
    </Float>
  )
}

export function JenkinsAsset(props: { position: [number, number, number], scale?: number }) {
  const ref = useRef<THREE.Group>(null!)
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.4
      ref.current.rotation.z += Math.sin(state.clock.elapsedTime) * 0.005
    }
  })
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.2}>
      <group position={props.position} scale={props.scale || 1} ref={ref}>
        {/* Butler Head Abstraction - Tech Sphere */}
        <mesh position={[0, 0.2, 0]}>
          <sphereGeometry args={[0.45, 32, 32]} />
          <MeshTransmissionMaterial thickness={0.5} roughness={0.15} transmission={1} ior={1.3} color="#b0d4f1" />
        </mesh>
        {/* Red Bowtie */}
        <group position={[0, -0.25, 0.3]}>
           <mesh position={[-0.2, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
             <coneGeometry args={[0.18, 0.4, 3]} />
             <meshStandardMaterial color="#D33833" roughness={0.3} metalness={0.4} emissive="#D33833" emissiveIntensity={0.6} />
           </mesh>
           <mesh position={[0.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
             <coneGeometry args={[0.18, 0.4, 3]} />
             <meshStandardMaterial color="#D33833" roughness={0.3} metalness={0.4} emissive="#D33833" emissiveIntensity={0.6} />
           </mesh>
           <mesh position={[0, 0, 0.05]}>
             <sphereGeometry args={[0.08, 16, 16]} />
             <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
           </mesh>
        </group>
      </group>
    </Float>
  )
}
