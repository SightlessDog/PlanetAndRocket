import "./styles.css";
import { Canvas } from "@react-three/fiber";
import {  OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Planet1";
import Rocket from "./Rocket";

export default function App() {
  return (
    <div className="App">
      <Canvas camera={{position : [0, 0, 50]}}>
      <ambientLight intensity={1} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Suspense fallback={null}>
          <Model />
          <Rocket /> 
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
