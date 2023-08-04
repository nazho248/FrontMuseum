import { SlArrowLeft, SlArrowRight} from "react-icons/sl";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";


export function CardText(props) {
    const navigate = useNavigate();


    let atrasredirect = "/Tiempo";
    if (props.anterior != -1) {
        atrasredirect = "/Tiempo/"+props.anterior+"/images";
    }
    const siguiente = "/Tiempo/"+props.data.epoca+"/images";


    return (
        <div
            className="flex flex-row w-screen bottom-0 h-full   justify-center  items-center text-black text-center">
{/*
            <h1 className="text-white absolute text-xl lg:text-5xl top-32">{props.data.titulo}</h1>
*/}

            {/*flecha izquierda <- */}
            <motion.div
                className="flex w-14 mb-14 mt-4 border-b-2 lg:border-b-4 border-slate-50 cursor-pointer  text-white"
                onClick={() => {
                    navigate(siguiente)
                }}
                initial={{translateX: 0}}
                animate={{translateX: 18}}
                transition={{
                    repeat: Infinity,
                    duration: 1,
                    repeatType: 'reverse',
                    ease: "easeInOut"
                }}
            >
                <SlArrowLeft className="absolute transform -translate-y-4 lg:-translate-y-7 -translate-x-3 lg:-translate-x-4 text-4xl lg:text-6xl" />
            </motion.div>

            {/*contenido*/}
            <div
                className="flex-col w-10/12 lg:w-9/12 text-lg bg-slate-50 bg-opacity-70 rounded-lg p-6 flex mx-auto	 items-center max-h-[16rem] overflow-x-hidden lg:max-h-screen overflow-scroll  lg:overflow-hidden lg:overflow-hidden">
                <h1 className="text-sm lg:text-2xl font-bold mb-2 lg:mb-10 w-full whitespace-pre-line">{props.data.textos[0].titulo}</h1>
                <p className="text-justify text-xs lg:text-sm">
                    {props.data.textos[0].texto}
                </p>
            </div>

            {/*flecha derecha ->*/}
            <motion.div
                className="flex w-14 mb-14 mt-4 border-b-2 lg:border-b-4  border-slate-50 cursor-pointer text-white"
                onClick={() => {
                    navigate(atrasredirect)
                }}
                initial={{translateX: 0}}
                animate={{translateX: -18}}
                transition={{
                    repeat: Infinity,
                    duration: 1,
                    repeatType: 'reverse',
                    ease: "easeInOut"
                }}
            >
                <SlArrowRight className="absolute text-4xl lg:text-6xl  transform -translate-y-4 translate-x-8"/>
            </motion.div>


        </div>
    )
}