import { SlArrowLeft, SlArrowRight} from "react-icons/sl";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";


export function CardText(props) {
    const navigate = useNavigate();

    console.log(props.anterior)

    let atrasredirect = "/Tiempo";
    if (props.anterior != -1) {
        atrasredirect = "/Tiempo/"+props.anterior+"/images";
    }
    const siguiente = "/Tiempo/"+props.data.epoca+"/images";


    return (
        <div
            className="flex flex-row w-screen bottom-0 h-full   justify-center  items-center text-black text-center">
            <h1 className="text-white absolute text-5xl top-32">{props.data.titulo}</h1>

            {/*flecha izquierda <- */}
            <motion.div
                className="flex w-14 mb-14 mt-4 border-b-4 border-slate-50 cursor-pointer  text-white"
                onClick={() => {
                    navigate(siguiente)
                }}
                initial={{translateX: 0}}
                animate={{translateX: 20}}
                transition={{
                    repeat: Infinity,
                    duration: 1,
                    repeatType: 'reverse',
                    ease: "easeInOut"
                }}
            >
                <SlArrowLeft className="absolute transform -translate-y-7 -translate-x-4" size={60}/>
            </motion.div>

            {/*contenido*/}
            <div
                className="flex-col w-9/12 text-lg bg-slate-50 bg-opacity-70 rounded-lg p-6 flex mx-auto	 items-center">
                <h1 className="text-2xl font-bold mb-10 w-2/6">{props.data.textos[0].titulo}</h1>
                <p className="text-justify">
                    {props.data.textos[0].texto}
                </p>
            </div>

            {/*flecha derecha ->*/}
            <motion.div
                className="flex w-14 mb-14 mt-4 border-b-4  border-slate-50 cursor-pointer  text-white"
                onClick={() => {
                    navigate(atrasredirect)
                }}
                initial={{translateX: 0}}
                animate={{translateX: -20}}
                transition={{
                    repeat: Infinity,
                    duration: 1,
                    repeatType: 'reverse',
                    ease: "easeInOut"
                }}
            >
                <SlArrowRight className="absolute transform -translate-y-7  translate-x-3" size={60}/>
            </motion.div>


        </div>
    )
}