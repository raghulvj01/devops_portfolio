'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { PresentationControls, Float, Image as DreiImage, Environment, ContactShadows, MeshTransmissionMaterial } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { NeuralNetwork, DataContainer, Padlock, KubernetesAsset, JenkinsAsset } from './CyberAssets'

function CoreBorder() {
  const ref = useRef<THREE.Mesh>(null!)
  
  useFrame(({ clock }) => {
    if (ref.current) {
      const material = ref.current.material as THREE.MeshBasicMaterial
      material.opacity = 0.5 + Math.sin(clock.getElapsedTime() * 2) * 0.2
    }
  })

  return (
    <mesh ref={ref} position={[0, 0, -0.05]}>
      <planeGeometry args={[6.8, 4.0]} />
      <meshBasicMaterial color="#00D4FF" transparent opacity={0.6} toneMapped={false} />
    </mesh>
  )
}

function FloatingCyberAccents() {
  return (
    <group>
      <KubernetesAsset position={[-5, 1.5, -2]} scale={0.7} />
      <JenkinsAsset position={[4.5, -2, -0.5]} scale={0.8} />
      <DataContainer position={[-4.5, -2.5, -1]} rotation={[0.4, 0.6, 0]} scale={0.7} />
      <Padlock position={[5, 2.5, -1.5]} scale={0.8} />
      <NeuralNetwork position={[-2.5, -3, -2]} scale={0.6} />
      <NeuralNetwork position={[2, 3, -1]} scale={0.6} />
    </group>
  )
}

export default function Blog3DCover({ src }: { src: string }) {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing relative">
      <Canvas camera={{ position: [0, 0, 10], fov: 40 }} dpr={[1, 2]}>
        <ambientLight intensity={1} />
        <spotLight position={[10, 20, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        
        <Suspense fallback={null}>
          <PresentationControls 
            global 
            rotation={[0, 0, 0]} 
            polar={[-0.2, 0.2]} 
            azimuth={[-0.4, 0.4]}
          >
            <Float rotationIntensity={0.2} floatIntensity={1.5} floatingRange={[-0.1, 0.1]}>
              <group position={[0, 0.5, 0]}>
                 <DreiImage 
                    url={src} 
                    transparent 
                    scale={[6.4, 3.6]} // 16:9 approx
                    position={[0, 0, 0.05]} 
                 />
                 
                 {/* Glass card backing */}
                 <mesh position={[0, 0, 0]}>
                    <planeGeometry args={[6.6, 3.8]} />
                    <MeshTransmissionMaterial 
                      thickness={0.2} 
                      roughness={0.1} 
                      transmission={0.9} 
                      ior={1.2} 
                      color="#ffffff"
                    />
                 </mesh>
                 
                 <CoreBorder />
              </group>
            </Float>
            <FloatingCyberAccents />
          </PresentationControls>
          
          <ContactShadows position={[0, -3, 0]} opacity={0.3} scale={20} blur={2.5} far={4} color="#000000" />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary/70 text-[10px] font-semibold tracking-[0.2em] uppercase pointer-events-none flex items-center gap-3 bg-background/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-primary/20">
        <span>Drag to rotate</span>
      </div>
    </div>
  )
}
