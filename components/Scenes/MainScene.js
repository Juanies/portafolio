import { CameraControls, Environment, useGLTF } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useState, useRef } from 'react'
import { ThreeElements } from "@react-three/fiber"
import * as Objetos from './objects'
import { BoxGeometry } from "three"
export function MainScene(props) {
    const [isHover, setHover] = useState(false)
    const [size, setSize] = useState(1)

    const model = useGLTF('/models/scene.glb')
    const meshRef = useRef(null)
    useFrame(({ }) => {
        if (isHover)
            meshRef.current.rotation.x += .01
    })
    const increaseSize = () => {
        setSize(prevSize => prevSize + .1)
        console.log(size)
    }

    return (
        <>
            <Environment preset="city"></Environment>
            <Objetos.Mac  scale={1}></Objetos.Mac>
        </>
    )
}

