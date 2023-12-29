import { useMemo } from 'react'
import { Html } from "@react-three/drei"
import {
    CustomBlending,
    AddEquation,
    OneMinusSrcColorFactor,
    OneFactor,

} from 'three'
import Home from '@/components/Home'

export function HtmlTv({ geometry }) {

    const htmlMaterial = useMemo(() => <meshStandardMaterial color="green" transparent opacity={.6} side={2} />, [])
    return (
        <>
            <Html
                castShadow
                receiveShadow
                occlude="blending"
                transform
                distanceFactor={.138}
                style={{ display: 'flex', height: `${1500}px`, width: `${1920}px`, overflow: 'hidden', background: "red", padding: "2.5rem" }}
                pointerEvents="none"
                position={[-.085, .93, .2]}
                prepend
            >
                <div
                    style={{
                        height: `100%`,
                        width: `100%`,
                        background: "yellow"
                    }}>
                    <Home></Home>


                </div>
            </Html>

            <mesh geometry={geometry}>
                < meshPhysicalMaterial
                    color={0x00000000}
                    transparent
                    metalness={1}
                    roughness={0}
                    blending={CustomBlending}
                    blendEquation={AddEquation}
                    blendSrc={OneMinusSrcColorFactor}
                    blendDst={OneFactor}
                />

            </mesh>
        </>
    )

}

