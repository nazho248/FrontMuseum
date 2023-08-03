import {Fragment, useEffect, useState} from "react";
import {BackBtn} from "../BackBtn";
import {ModelViewer} from "../components/artefacto/ModelViewer";
import {Content} from "../components/artefacto/Content";
import {NavPanel} from "../components/artefacto/NavPanel";
import {motion} from 'framer-motion'
import {useParams} from "react-router-dom";
import {ArtefactPresentation} from "../components/artefacto/ArtefactPresentation";


export function Artefacto() {
    document.title = "Artefacto";
    document.body.id = "Artefacto";
    document.body.className = "h-screen max-h-screen";
    //leer archivo .json
    const artefactos = require('../data/artefactos.json');
    /*convertir a array*/
    const artefacts_array = Object.values(artefactos);
    const {id} = useParams();

    /*new*/
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Simulamos un retraso de 1 segundo para cargar los recursos (ajusta según tus necesidades)
        const loadingDelay = setTimeout(() => {
            setIsLoaded(true);
        }, 500);

        return () => clearTimeout(loadingDelay);
    }, []);

    return (
        <div className="overflow-hidden">
            <BackBtn />
            <motion.div
                className="flex min-h-screen h-screen"
                initial={{ y: -500, opacity: 0 }}
                animate={{ y: isLoaded ? 0 : -1000, opacity: isLoaded ? 1 : 0 }}
                exit={{ y: 500, opacity: 0 }}
                transition={{ duration: 1, type: 'spring', damping: 25, stiffness: 200 }}
            >
                {id === undefined && <ArtefactPresentation />}
                {/*si el id esta entre los elements de artefactos*/}
                {id !== undefined && id >= 0 && id <= artefacts_array.length && (
                    <Fragment>
                        {isLoaded && <ModelViewer artefacto={artefactos[id]} />}
                        {isLoaded && <Content artefacto={artefactos[id]} />}
                    </Fragment>
                )}
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <NavPanel artefactos={artefacts_array} />
            </motion.div>
        </div>
    );
};





