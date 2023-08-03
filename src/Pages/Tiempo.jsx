import {BackBtn} from "../BackBtn";
import {motion} from "framer-motion";
import {TopTime} from "../components/tiempo/TopTime";
import {TimePresentation} from "../components/tiempo/TimePresentation";
import {CardText} from "../components/tiempo/CardText";
import {TimeImages} from "../components/tiempo/TimeImages";
import {useParams} from "react-router-dom";
import {NotFound} from "./NotFound";
import { useEffect, useState} from "react";


export function Tiempo() {
    document.body.id = "";
    const [isLoaded, setIsLoaded] = useState(false);

    const data_tiempo = Object.values(require('../data/timeline.json'));
    const presentacion = data_tiempo.find(elemento => elemento.id === -1);
    const firstyear = data_tiempo[0].epoca


    useEffect(() => {
        // Simulamos un retraso de 1 segundo para cargar los recursos (ajusta según tus necesidades)
        const loadingDelay = setTimeout(() => {
            setIsLoaded(true);
        }, 500);

        return () => clearTimeout(loadingDelay);
    }, [])


    const {year} = useParams();
    //type definido para limitarlo a info e images
    const {type} = useParams();
    let epocaimpresion = 0;

    if (year !== undefined) {
        epocaimpresion = data_tiempo.findIndex(
            (elemento) => elemento.epoca === parseInt(year));
        if ((epocaimpresion !== -1) && (type === "info" || type === "images")) {
            // Se encontró una coincidencia, epocaimpresion contendrá el índice correspondiente
            console.log('Se encontró una coincidencia en el índice:', epocaimpresion);
        } else {
            // No se encontró ninguna coincidencia, redirigir a /404
            return (<NotFound/>);
        }
    }
    let epocaAnterior = -1;

    if (epocaimpresion > 0) {
        epocaAnterior = data_tiempo[epocaimpresion - 1].epoca;
    }

    let isLastOne = false;
    /*si existe el elemento siguiente y contiene epoca*/
    if (data_tiempo[epocaimpresion + 1] !== undefined && data_tiempo[epocaimpresion + 1].epoca !== undefined) {
        isLastOne = true;
    }



    return (
        <div>
            <div
                className="bg-fixed bg-cover bg-center h-screen"
                style={{
                    backgroundImage: "url('/assets/img/canonautor.jpg')",
                    filter: "brightness(30%)",
                    display: "block",
                    width: "100%",
                    height: "100%",
                    left: "0",
                    position: "fixed",
                    right: "0",
                    zIndex: "1"
                }}
            ></div>
            <div className="flex flex-col relative z-10 h-screen ">
                {/*                animate={{ y: isLoaded ? 0 : -1000, opacity: isLoaded ? 1 : 0 }}
*/}
                <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{duration: 1}}
                    >
                <BackBtn/>
                <TopTime number={epocaAnterior} isPresentation={year === undefined} fecha={data_tiempo[epocaimpresion].epoca} fechaAnterior={data_tiempo[epocaimpresion].epoca_ant}/>
                </motion.div>
            <motion.div className="flex flex-col items-center justify-center w-full h-full"
                        initial={{x: 1000, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        exit={{x: 1000, opacity: 0}}
                        transition={{duration: 0.5}}
            >

                {/*contenido de texto*/}
                {year === undefined ?

                    <TimePresentation data={presentacion} year={firstyear}/>
                    : type === "info" ?
                        <CardText data={data_tiempo[epocaimpresion]} anterior={epocaAnterior}/> :
                        type === "images" ?
                            <TimeImages data={data_tiempo[epocaimpresion]} ultimo={isLastOne}/>
                            :
                            <NotFound/>
                }
            </motion.div>
            </div>
        </div>
    );
}
