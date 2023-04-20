import css from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Box from "../components/Box";
import OrbitControls from "../components/OrbitControls";
import Light from "../components/Lightbulb";
import Draggable from "../components/Draggable";
import {Suspense} from "react";
import FloorComponent from "../components/FloorComponent"

export default function Heavy() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.2} />
        <Light position={[0, 3, 0]} />
        <Light position={[1, 3, 0]} />
        <Light position={[0, 2, 0]} />
        <Light position={[0, 3, 1]} />
        <Light position={[2, 3, 0]} />
        <Light position={[3, 3, 0]} />
        <Draggable>
        <Suspense fallback={null}>
            <Box rotateX={3} rotateY={0.2} />
            <Box rotateX={3} rotateY={0.2} />
            <Box rotateX={3} rotateY={0.2} />
            <Box rotateX={3} rotateY={0.2} />
            <Box rotateX={3} rotateY={0.2} />
            <Box rotateX={3} rotateY={0.2} />
            <Box rotateX={3} rotateY={0.2} />
            <Box rotateX={3} rotateY={0.2} />
            <Box rotateX={3} rotateY={0.2} />
        </Suspense>
        </Draggable>
        <OrbitControls />
        <FloorComponent position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
