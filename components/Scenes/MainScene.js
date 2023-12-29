import { CameraControls, Environment, PerspectiveCamera, useGLTF } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useState, useRef } from 'react'
import { ThreeElements } from "@react-three/fiber"
import * as Objetos from './objects'
import { BoxGeometry } from "three"
export function MainScene({ debug }) {



    return (
        <>

            {debug ?
                <CameraControls makeDefault></CameraControls> :
                <PerspectiveCamera makeDefault position={[0, 0, 5.4]}></PerspectiveCamera>

            }
            <Environment preset="city"></Environment>
            <Objetos.Mac scale={1}></Objetos.Mac>
        </>
    )
}

