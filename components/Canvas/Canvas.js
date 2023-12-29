import { Canvas as Canvasr3f } from "@react-three/fiber"
import { MainScene } from "@/components/Scenes"
import { useControls } from 'leva'
export function Canvas(props) {
    const { debug, aNumber } = useControls({ debug: { value: false } })
    return (
        <Canvasr3f style={{ position: "absolute", inset: 0 }}>
            <MainScene debug={debug}></MainScene>
        </Canvasr3f>
    )
}

