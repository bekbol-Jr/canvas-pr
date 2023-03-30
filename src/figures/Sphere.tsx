import React, {FC, useEffect, useRef, useState} from 'react';
import {useFrame, useLoader} from "@react-three/fiber";
import {TextureLoader} from "three/src/loaders/TextureLoader";

interface ISphereProps {
  width: number
}
const Sphere:FC = () => {
  const [width, setWidth] = useState(1)
  const ref = useRef<any>(null)

  const [cell] = useLoader(TextureLoader, [
    "cell.jpg"
  ])
  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
  })

  useEffect(() => {
    setWidth(Math.ceil(Math.random() * 3));
  }, []);
  return (
    <mesh position={[-2, -1, -1]} ref={ref}>
      <sphereGeometry args={[width]}/>
      <meshStandardMaterial map={cell}/>
    </mesh>
  );
};

export default Sphere;