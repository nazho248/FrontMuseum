import {motion} from "framer-motion";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import {useNavigate} from "react-router-dom";

export function TimeImages(props) {
    const navigate = useNavigate();

    const atrasredirect = "/Tiempo/"+props.data.epoca+"/info";

    const siguiente = "/Tiempo/"+props.data.epoca_ant+"/info";
    return (
        <div
            className="flex w-screen flex-row mx-auto bottom-0 h-full pt-24 gap-x-14 justify-center items-center text-white text-center">
            <h1 className="text-white absolute text-5xl top-32">{props.data.titulo}</h1>


            {/*flecha izquierda <- */}

            {props.ultimo ?
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
                : null
            }


            <div className={"flex " + (props.ultimo ? "w-10/12" : "w-9/12") + " space-x-14 mx-auto"}>
                <div className=" border border-gray-200 rounded-lg shadow dark:bg-gray-800  max-w-[550px] flex-1"
                     style={{backgroundColor: "rgba(255,255,255,0.67)"}}>
                    <img className="rounded-t-lg" src="https://picsum.photos/1500/1000" alt=""/>
                    <div className="p-5">
                        <p className="mb-3 font-normal text-gray-700 ">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                            chronological order.
                        </p>
                    </div>
                </div>

                <div className=" border border-gray-200 rounded-lg shadow dark:bg-gray-800  max-w-[550px] flex-1"
                     style={{backgroundColor: "rgba(255,255,255,0.67)"}}>
                    <img className="rounded-t-lg" src="https://picsum.photos/1000/1000" alt=""/>
                    <div className="p-5">
                        <p className="mb-3 font-normal text-gray-700 ">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                            chronological order.
                        </p>
                    </div>
                </div>
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
