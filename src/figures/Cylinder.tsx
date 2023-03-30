import React, {FC, useEffect, useRef, useState} from 'react';
import {useFrame} from "@react-three/fiber";


const Cylinder:FC = () => {
  const [width, setWidth] = useState(1)
  const ref = useRef<any>(null)

  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })

  useEffect(() => {
    setWidth(Math.ceil(Math.random() * 3));
  }, []);
  return (
    <mesh position={[ 2, -2, 0]} ref={ref} >
      <cylinderGeometry args={[width, width,width+2]}/>
      <meshStandardMaterial color={'green'}/>
    </mesh>
  );
};

export default Cylinder;