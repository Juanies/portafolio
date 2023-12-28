import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mac(props) {
  const { nodes, materials } = useGLTF('/models/scene.glb')
  return (
    <group position={[0, -.9 , 4.2]} {...props} dispose={null}>
      <mesh geometry={nodes.TV_Main_0.geometry} material={materials.Main} />
      <mesh geometry={nodes.TV_Screen_0.geometry} material={materials.Screen} />
      <mesh geometry={nodes.Selector_Main_0.geometry} material={materials.Main} />
      <mesh geometry={nodes.Switch_Main_0.geometry} material={materials.Main} />
    </group>
  )
}

useGLTF.preload('/models/scene.glb')