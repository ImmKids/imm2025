import { useRef, useEffect } from 'react'
import { extend, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { shaderMaterial } from '@react-three/drei'

const StarFieldMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new THREE.Vector2(),
  },
  // Vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform float time;
    uniform vec2 resolution;
    varying vec2 vUv;

    // Hash function for randomness
    float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    // Star sparkle effect
    float starSparkle(vec2 uv, float blockSize) {
      vec2 blockPos = floor(uv * blockSize);
      float rand = hash(blockPos);
      
      // Create different timing for each star
      float twinkle = sin(time * 2.0 + rand * 6.28) * 0.5 + 0.5;
      
      // Create star shape
      vec2 pos = fract(uv * blockSize) - 0.5;
      float dist = length(pos);
      float star = 1.0 - smoothstep(0.01, 0.05, dist);
      
      // Apply twinkle effect
      return star * twinkle * 0.3; // Reduced intensity with * 0.3
    }

    void main() {
      vec2 uv = vUv;
      uv.x *= resolution.x/resolution.y;
      
      float stars = 0.0;
      
      // Multiple layers of stars with different sizes and twinkle rates
      stars += starSparkle(uv + vec2(time * 0.01), 20.0) * 0.5;
      stars += starSparkle(uv + vec2(time * 0.015), 30.0) * 0.3;
      stars += starSparkle(uv + vec2(time * 0.02), 40.0) * 0.2;
      
      // Very subtle color variation
      vec3 starColor = mix(
        vec3(0.98, 0.98, 1.0),  // Slightly blue-white
        vec3(1.0, 0.98, 0.95),  // Slightly warm white
        sin(time + hash(uv)) * 0.5 + 0.5
      );
      
      // Super light background gradient
      vec3 bgColor = mix(
        vec3(0.98, 0.98, 0.99),  // Almost white
        vec3(0.95, 0.95, 0.98),  // Very slight blue tint
        uv.y
      );
      
      // Blend everything together
      vec3 color = mix(bgColor, starColor, stars * 0.08); // Very subtle mix
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
)

extend({ StarFieldMaterial })

export function TwinklingBackground() {
  const materialRef = useRef<any>()
  const { viewport } = useThree()

  // Set initial resolution
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.resolution.set(viewport.width, viewport.height)
    }
  }, [viewport])

  // Update time uniform
  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.time += delta * 0.1 // Slowed down animation
    }
  })

  return (
    <>
      <color attach="background" args={['#fafafa']} />
      <mesh>
        <planeGeometry args={[2, 2]} />
        {/* @ts-ignore */}
        <starFieldMaterial ref={materialRef} />
      </mesh>
    </>
  )
} 