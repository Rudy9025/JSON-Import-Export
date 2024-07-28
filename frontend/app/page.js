'use client'
import './page.css'
import Navbar from './Components/Navbar/page'
import Room2 from './3dComponents/Room2'
// import Room5 from './3dComponents/Room5'

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Html,useProgress } from '@react-three/drei';
import { Suspense ,useState,useEffect} from 'react';


function Loader(){
   // Inline CSS for the loader
   const loaderStyle = {
    width: '45px',
    height: '45px',
    background: `
      no-repeat linear-gradient(orange 0 0),
      no-repeat linear-gradient(orange 0 0),
      no-repeat linear-gradient(orange 0 0),
      no-repeat linear-gradient(orange 0 0),
      no-repeat linear-gradient(orange 0 0),
      no-repeat linear-gradient(orange 0 0),
      no-repeat linear-gradient(orange 0 0),
      no-repeat linear-gradient(orange 0 0),
      no-repeat linear-gradient(orange 0 0)
    `,
    backgroundSize: '16px 16px',
    animation: 'l32-1 1s infinite, l32-2 1s infinite',
  };

  // Inline keyframes
  const keyframes = `
    @keyframes l32-1 {
      0%,100% { width: 45px; height: 45px; }
      35%,65% { width: 65px; height: 65px; }
    }
    @keyframes l32-2 {
      0%,40% {
        background-position: 0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0, 50% 0, 50% 50%;
      }
      60%,100% {
        background-position: 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0, 50% 0, 0 0, 50% 50%;
      }
    }
  `;
  const {progress} =useProgress()
  return(
    <>
    <Html center>
      <style>{keyframes}</style>
      <div style={loaderStyle} className="loader"></div>
      <div style={{ color: 'white', fontSize: '24px', marginTop: '10px' }}>
        {/* <p>Loading: {progress}%</p> */}
      </div>
    </Html>
    </>
  )
}
export default function Home() {
  
  return (
    <>
 
     <div  className='canvas'>
    <Canvas  camera={{ position: [0, 30, 30], fov: 75, near: 0.1, far: 1000 }}>
       {/* for Room5 */}
        {/* <OrbitControls minDistance={0.5} maxDistance={3} maxPolarAngle={2} minPolarAngle={1.1} autoRotate autoRotateSpeed={0.21} rotateSpeed={0.08} enableDamping dampingFactor={0.1} /> */}

      {/* for Room2 */}
        <OrbitControls minDistance={1} maxDistance={3.15} maxPolarAngle={1.3} minPolarAngle={0.1} autoRotate autoRotateSpeed={0.22} />

        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
         
          <Suspense fallback={<Loader />}>
          <Room2  />
          {/* <Room5 /> */}
          </Suspense>

       </Canvas>
    </div>
      
    <Navbar /> 
    </>
  );
}
