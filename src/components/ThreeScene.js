import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  OrbitControls, 
  Environment, 
  useGLTF, 
  Sparkles,
  Float
} from '@react-three/drei';
import { gsap } from 'gsap';
import * as THREE from 'three';

// Componente Floor - crea una base stilizzata per il gelato
function Floor() {
  const floorRef = useRef();
  
  useEffect(() => {
    if (floorRef.current) {
      gsap.fromTo(
        floorRef.current.position,
        { y: -5 },
        {
          y: -1.5,
          duration: 2,
          ease: 'elastic.out(1, 0.5)',
          delay: 0.5
        }
      );
    }
  }, []);
  
  return (
    <mesh 
      rotation-x={-Math.PI / 2} 
      position={[0, -1, 0]} 
      receiveShadow
    >
      <circleGeometry args={[6, 64]} />
      <meshStandardMaterial color="#E6C992" />
    </mesh>
  );
}

// Componente Particles - effetti scintillanti
function Particles() {
  return (
    <Sparkles
      count={30}
      scale={5}
      size={1.5}
      speed={0.2}
      color="#E6C992"
    />
  );
}

// Componente per elementi decorativi
function FloatingElements() {
  return (
    <Float position={[2, 0.5, 0]} speed={1.5} rotationIntensity={1} floatIntensity={0.8}>
      <mesh castShadow>
        <coneGeometry args={[0.2, 0.5, 16]} />
        <meshStandardMaterial color="#D6A75A" />
      </mesh>
    </Float>
  );
}

// Componente modello gelato
function GelatoModel({ position = [0, 0, 0], scale = 1 }) {
  const modelRef = useRef();
  
  // Creiamo un gruppo vuoto come fallback
  const dummyGroup = new THREE.Group();
  
  // Tentiamo di caricare il modello
  let model;
  try {
    model = useGLTF('/assets/models/gelatom.glb');
  } catch (error) {
    console.error('Errore nel caricamento del modello:', error);
    model = { scene: dummyGroup };
  }
  
  // Animazione di apparizione
  useEffect(() => {
    if (modelRef.current) {
      // Scala iniziale piccola
      modelRef.current.scale.set(0.001, 0.001, 0.001);
      
      // Animazione di apparizione
      gsap.to(modelRef.current.scale, {
        x: scale,
        y: scale,
        z: scale,
        duration: 1.5,
        ease: 'elastic.out(1, 0.8)'
      });
    }
  }, [scale]);
  
  // Rotazione leggera
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.2;
    }
  });
  
  return (
    <primitive 
      ref={modelRef}
      object={model.scene} 
      position={position}
      castShadow
    />
  );
}

// Componente principale
const ThreeScene = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <div className="three-scene-container" style={{ overflowX: 'hidden', maxWidth: '100%' }}>

      <Canvas shadows camera={{ position: [0, 4, 10], fov: 45 }}>
        <fog attach="fog" args={['#E6C992', 8, 25]} />
        
        {/* Illuminazione */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[-5, 3, -5]} intensity={0.8} color="#E6C992" />
        
        {/* Contenuto 3D */}
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
            <GelatoModel position={[0, 0, 0]} scale={isMobile ? 1.2 : 1.5} />
          </Float>
          
          <Floor />
          <Particles />
          <FloatingElements />
          
          <Environment preset="sunset" background={false} />
        </Suspense>
        
        {/* Controlli */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.2}
          rotateSpeed={0.5}
        />
      </Canvas>
      
      {/* Overlay con testo */}
      <div className="three-scene-overlay" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        padding: '2rem',
        borderRadius: '1rem',
        background: 'rgba(59, 131, 189, 0.2)',
        backdropFilter: 'blur(5px)',
        width: isMobile ? '90%' : '50%',
        maxWidth: '600px',
        zIndex: 1000
      }}>
        <h1 style={{ 
          fontFamily: 'Pacifico, cursive', 
          fontSize: isMobile ? '2.5rem' : '3.5rem',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
        }}>
          Gelateria Mamiblu
        </h1>
        <p style={{ 
          fontFamily: 'Montserrat, sans-serif', 
          fontSize: isMobile ? '1rem' : '1.2rem',
          marginBottom: '2rem',
          fontWeight: 300
        }}>
          Gusto artigianale italiano dal 1985
        </p>
        <button style={{
          background: '#E5446D',
          color: 'white',
          border: 'none',
          padding: '0.8rem 1.5rem',
          borderRadius: '2rem',
          fontSize: isMobile ? '1rem' : '1.2rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'transform 0.3s, background 0.3s',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}>
          Scopri i nostri gusti
        </button>
      </div>
    </div>
  );
};

export default ThreeScene;
