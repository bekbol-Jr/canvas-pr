import {FC, useEffect, useState} from 'react';
import Cube from "./figures/Cube";
import {Canvas} from "@react-three/fiber";
import Sphere from "./figures/Sphere";
import Cylinder from "./figures/Cylinder";



const App: FC = () => {

  return (
    <div className='App'>
      <Canvas>
        <ambientLight intensity={0.1}/>
        <pointLight position={[10,20,10]}/>
        <Cube/>
        <Sphere/>
        <Cylinder/>
      </Canvas>
    </div>
  );
};

export default App