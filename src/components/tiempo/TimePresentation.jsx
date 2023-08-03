import {SlArrowLeft} from "react-icons/sl";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

export function TimePresentation(props) {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col w-screen bottom-0 h-full   justify-center  items-center text-white text-center">
            <h1 className="text-7xl whitespace-pre-line">{props.data.titulo}</h1>
            <motion.div
                onClick={() => {
                navigate(`/Tiempo/${props.year}/info`)

            }}
                initial={{marginLeft: 0}}
                animate={{marginLeft: 40}}
                transition={{
                    repeat: Infinity,
                    duration: 1,
                    repeatType: 'reverse',
                    ease: "easeInOut"
                }}

                className="flex w-1/2 transform -translate-x-1/2  mb-14 mt-4 border-b-4 border-slate-50 cursor-pointer pt-10 ">
                <SlArrowLeft className="absolute transform -translate-y-7 -translate-x-4" size={60}/>
            </motion.div>
            <p className="w-2/3 text-lg ">{props.data.texto}</p>

        </div>
    )
}