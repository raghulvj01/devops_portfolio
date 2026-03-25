'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Grid } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useMemo, Suspense } from 'react'
import { NeuralNetwork, DataContainer, Padlock, KubernetesAsset, JenkinsAsset } from './CyberAssets'

function CyberElements() {
  const networks = useMemo(() => Array.from({ length: 4 }).map(() => ({
    position: [THREE.MathUtils.randFloat(-15, 15), THREE.MathUtils.randFloat(-10, 10), THREE.MathUtils.randFloat(-10, -2)] as [number, number, number],
    scale: THREE.MathUtils.randFloat(0.8, 1.5)
  })), [])
  const containers = useMemo(() => Array.from({ length: 5 }).map(() => ({
    position: [THREE.MathUtils.randFloat(-15, 15), THREE.MathUtils.randFloat(-10, 10), THREE.MathUtils.randFloat(-10, -2)] as [number, number, number],
    rotation: [THREE.MathUtils.randFloat(0, Math.PI), THREE.MathUtils.randFloat(0, Math.PI), 0] as [number, number, number],
    scale: THREE.MathUtils.randFloat(0.8, 1.5)
  })), [])
  const padlocks = useMemo(() => Array.from({ length: 2 }).map(() => ({
    position: [THREE.MathUtils.randFloat(-15, 15), THREE.MathUtils.randFloat(-10, 10), THREE.MathUtils.randFloat(-10, -2)] as [number, number, number],
    scale: THREE.MathUtils.randFloat(0.6, 1.2)
  })), [])
  const k8s = useMemo(() => Array.from({ length: 3 }).map(() => ({
    position: [THREE.MathUtils.randFloat(-15, 15), THREE.MathUtils.randFloat(-10, 10), THREE.MathUtils.randFloat(-10, -2)] as [number, number, number],
    scale: THREE.MathUtils.randFloat(0.6, 1.0)
  })), [])
  const jenkins = useMemo(() => Array.from({ length: 3 }).map(() => ({
    position: [THREE.MathUtils.randFloat(-15, 15), THREE.MathUtils.randFloat(-10, 10), THREE.MathUtils.randFloat(-10, -2)] as [number, number, number],
    scale: THREE.MathUtils.randFloat(0.6, 1.0)
  })), [])

  return (
    <>
      {networks.map((props, i) => <NeuralNetwork key={`nn-${i}`} {...props} />)}
      {containers.map((props, i) => <DataContainer key={`dc-${i}`} {...props} />)}
      {padlocks.map((props, i) => <Padlock key={`pl-${i}`} {...props} />)}
      {k8s.map((props, i) => <KubernetesAsset key={`k8s-${i}`} {...props} />)}
      {jenkins.map((props, i) => <JenkinsAsset key={`jenk-${i}`} {...props} />)}
    </>
  )
}

function GlowingPackets() {
  const spheres = useMemo(() => {
    return Array.from({ length: 10 }).map(() => ({
      position: [THREE.MathUtils.randFloat(-12, 12), THREE.MathUtils.randFloat(-6, 6), THREE.MathUtils.randFloat(-8, 2)] as [number, number, number],
      speed: THREE.MathUtils.randFloat(0.2, 0.6),
      offset: THREE.MathUtils.randFloat(0, Math.PI * 2)
    }))
  }, [])

  const group = useRef<THREE.Group>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (group.current) {
      group.current.children.forEach((child, i) => {
        const s = spheres[i]
        child.position.y = s.position[1] + Math.sin(t * s.speed + s.offset) * 2
        child.position.x = s.position[0] + Math.cos(t * s.speed + s.offset) * 1.5
      })
    }
  })

  return (
    <group ref={group}>
      {spheres.map((s, i) => (
        <mesh key={i} position={s.position}>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshBasicMaterial color="#00D4FF" toneMapped={false} />
        </mesh>
      ))}
    </group>
  )
}

export default function Blog3DBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#F8F9FA] dark:bg-[#090A0F] pointer-events-none transition-colors duration-500">
      <Canvas camera={{ position: [0, 0, 15], fov: 35 }}>
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        
        <Suspense fallback={null}>
          {/* Subtle Grid Floor */}
          <Grid 
            position={[0, -10, 0]} 
            args={[50, 50]} 
            cellSize={1} 
            cellThickness={0.8} 
            cellColor="#00D4FF" 
            sectionSize={5} 
            sectionThickness={1.2} 
            sectionColor="#00D4FF" 
            fadeDistance={30} 
            fadeStrength={1} 
          />

          <CyberElements />
          <GlowingPackets />
          
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      {/* Decorative gradient overlay to soften edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 pointer-events-none" />
    </div>
  )
}
