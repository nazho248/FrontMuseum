import {Fragment} from "react";
import {BackBtn} from "../BackBtn";
import {ModelViewer} from "../components/artefacto/ModelViewer";
import {Content} from "../components/artefacto/Content";
import {NavPanel} from "../components/artefacto/NavPanel";
import {motion} from 'framer-motion'

export function Artefacto() {
    document.title = "Artefacto";
    document.body.id = "Artefacto";
    /*ponerle clase al body*/
    document.body.className = "h-screen max-h-screen";
    return (
        /*animacion de entrada desliandoce desde la izquierda*/
        <motion.div
            initial={{x: -1000}}
            animate={{x: 0}}
            exit={{x: -1000}}
            transition={{duration: 0.5}}
        >
            <BackBtn/>
            <div className="flex min-h-screen h-screen">
                <ModelViewer/>
                <Content/>
                <NavPanel/>
            </div>
        </motion.div>
    )
}