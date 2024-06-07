import React, { Suspense } from 'react';
import { Canvas} from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import Spaceman from './Spaceman';

const Home = () => {
    return (
        <div className='bg-[#d45c78] relative' style={{ height: "100vh", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 2, 5]} />
                <ambientLight intensity={0.5}/>
                <Suspense fallback={null}>
                    <Spaceman position={[-0.6, -0.1, -1]} rotation={[-0.3, 3.1, 0]} scale={[1.5, 1.5, 1.5]} />
                </Suspense>
                <Environment preset='sunset'/> 
                <OrbitControls enableRotate={true} enableZoom={false} />
            </Canvas>
        </div>
    );
}

export default Home;
