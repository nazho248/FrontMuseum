// LoadingScreen.js
import React, {useEffect} from 'react';
import {motion} from 'framer-motion';
//importar loadgo 

const LoadingScreen = () => {
    document.body.id = 'LoadingScreen';


    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#263238', // Puedes personalizar el fondo de tu pantalla de carga
                color: '#ffffff', // Puedes personalizar el color de tu pantalla de carga
                zIndex: 9999, // Asegura que esté por encima de otros elementos
            }}
            initial={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            {/* Aquí puedes agregar elementos para mostrar la animación de carga (por ejemplo, un spinner) */}
            <div className="flex flex-col items-center justify-center h-full w-full">
                <img id="loading_image" src="/assets/img/icons/893_Diseno.gif" alt="logo" className="w-2/6"/>
                {/*texto loading con puntos suspensivos animados*/}
                <div className="flex flex-col items-center justify-center">
                    <div
                        className=" h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent mt-5 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "
                        role="status">
                    </div>
                    <h1 className=" text-xl font-bold text-center text-slate-300">Cargando</h1>
                </div>
            </div>
        </motion.div>
    );
};

export {LoadingScreen}; // Exporta el componente LoadingScreen como una exportación nombrada
