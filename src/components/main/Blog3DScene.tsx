'use client'

import { blogPosts, type BlogPost } from '@/constants'
import { Canvas } from '@react-three/fiber'
import { Environment, PresentationControls, Float, Image as DreiImage, Html, ContactShadows } from '@react-three/drei'
import { Suspense, useState } from 'react'
import Link from 'next/link'
import { FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa'

function BlogCard({ post, index, total }: { post: BlogPost; index: number; total: number }) {
  const [hovered, setHover] = useState(false)
  // Position cards horizontally if there's more than one
  const xOffset = (index - (total - 1) / 2) * 5.5
  
  return (
    <group position={[xOffset, 0, 0]}>
      <Float rotationIntensity={0.2} floatIntensity={1.5} floatingRange={[-0.1, 0.1]}>
         {/* 3D Image Group */}
         <group onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
           <DreiImage 
              url={post.coverImage} 
              transparent 
              scale={[4.2, 2.4]} 
              position={[0, 1.2, 0]} 
           />
           {/* Border / Glow effect behind the image */}
           <mesh position={[0, 1.2, -0.01]}>
              <planeGeometry args={[4.3, 2.5]} />
              <meshBasicMaterial color={hovered ? "#3b82f6" : "#27272a"} />
           </mesh>
         </group>
         
         {/* HTML Overlay functioning as the card content */}
         <Html transform distanceFactor={2.8} position={[0, -0.8, 0.1]}>
            <div 
              className={`w-[340px] rounded-2xl p-6 shadow-2xl border transition-all duration-500 ease-out ${
                hovered 
                ? 'bg-card border-primary/50 scale-105 shadow-primary/20 bg-background' 
                : 'bg-card/90 border-border/60 backdrop-blur-xl'
              }`}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag: string) => (
                  <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium tracking-wide uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h2 className={`text-xl font-bold mb-3 line-clamp-2 transition-colors duration-300 ${hovered ? 'text-primary' : 'text-foreground'}`}>
                {post.title}
              </h2>
              
              <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                 <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
                   <div className="flex items-center gap-1.5">
                     <FaCalendarAlt className="opacity-70 text-primary" />
                     <span>
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                     </span>
                   </div>
                   <div className="flex items-center gap-1.5">
                     <FaClock className="opacity-70 text-primary" />
                     <span>{post.readTime}</span>
                   </div>
                 </div>
                 <Link href={`/blog/${post.slug}`} className="text-sm font-bold text-primary flex items-center gap-1.5 hover:underline group">
                    Read 
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                 </Link>
              </div>
            </div>
         </Html>
      </Float>
    </group>
  )
}

export default function Blog3DScene() {
  return (
    <div className="w-full h-[700px] md:h-[800px] relative mt-12 cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 20, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <Suspense fallback={<Html center><div className="text-primary font-bold animate-pulse text-lg tracking-widest uppercase">Loading 3D Experience...</div></Html>}>
          <PresentationControls 
            global 
            rotation={[0, 0, 0]} 
            polar={[-0.15, 0.15]} 
            azimuth={[-0.4, 0.4]}
          >
            <group position={[0, 0.5, 0]}>
              {blogPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} total={blogPosts.length} />
              ))}
            </group>
          </PresentationControls>
          
          <ContactShadows position={[0, -3.5, 0]} opacity={0.5} scale={30} blur={2.5} far={4} color="#000000" />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      
      {/* Decorative Interactive Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/60 text-xs font-semibold tracking-[0.2em] uppercase pointer-events-none flex items-center gap-3">
        <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-muted-foreground/40"></span>
        <span>Drag to explore</span>
        <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-muted-foreground/40"></span>
      </div>
      
      {/* Glowing backdrop blur artifact */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </div>
  )
}
