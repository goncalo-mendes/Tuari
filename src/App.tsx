import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import {Button, MantineProvider, Text } from "@mantine/core";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greetPeople", { name }));
  }

  return (
      <Canvas
      style={{
          background: '#111a21',
          width: '100vw',
          height: '100vh'
      }}>
          <OrbitControls/>
          <pointLight color='green' intensity={2} position={[-1,1,4]}/>
          <pointLight color='white' intensity={1} position={[1,0,-1]}/>
          <mesh position={[1,1,-3]}>
              <boxGeometry args={[1,1,4]}/>
          </mesh>
      </Canvas>
  );
}

export default App;
