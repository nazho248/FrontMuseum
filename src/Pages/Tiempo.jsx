import {BackBtn} from "../BackBtn";
import {Fragment} from "react";
import {motion} from "framer-motion";

export function Tiempo() {
    return (
        <motion.div
            initial={{x: 1000}}
            animate={{x: 0}}
            exit={{x: 1000}}
            transition={{duration: 0.5}}
        >
            {/*fondo */}
            <div id="timeline" style={{backgroundImage: "url('/assets/img/canonautor.jpg')"}}></div>
            <BackBtn/>
        </motion.div>
    )
}