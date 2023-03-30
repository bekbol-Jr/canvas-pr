import React, {FC, useEffect, useRef, useState} from 'react';
import {useFrame} from "@react-three/fiber";
interface ICubeProps {
  width: number
}
const Cube:FC = () => {
  const [width, setWidth] = useState(1);

  const boxRef = useRef<any>(null)
  useFrame(() => {
    boxRef.current.rotation.x += 0.01
    boxRef.current.rotation.y += 0.01
    boxRef.current.rotation.z += 0.01;
  })

  useEffect(() => {
    setWidth(Math.ceil(Math.random() * 3));
  }, []);
  return (
    <mesh position={[2, 1, 0]} ref={boxRef}>
      <boxGeometry args={[width, width, width]}/>
      <meshStandardMaterial color='yellow'/>
    </mesh>
  );
};

export default Cube;