import React, {useState, useEffect} from 'react';
import {Home} from '../components/index/Home';
import {ModalInfo} from "../components/ModalInfo";
import {motion} from 'framer-motion'
import {LoadingScreen} from "../components/LoadingScreen";


export function HomePage() {

    const indexCards = Object.values(require('../data/Homepage.json'));
    document.title = "Bienvenido";
    document.body.id = "Home";

    const [isLoaded, setIsLoaded] = useState(false);
    const [loadedImages, setLoadedImages] = useState([]);

    //cuales son las imagenes segun el json
    let imagenes = indexCards.map((item) => {
        return item.imageSrc;
    });

    useEffect(() => {
        setIsLoaded(false);

        const preloadImages = async () => {
            const imagePromises = indexCards.map((item) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = item.imageSrc;
                    img.onload = () => resolve(item.imageSrc); // Resuelve la promesa con la URL de la imagen
                });
            });
            // Las imagenes ya estan cargadas?
            const loadedImageUrls = await Promise.all(imagePromises);
            setLoadedImages(loadedImageUrls); // Almacena las URLs de las imágenes cargadas
            setIsLoaded(true);
            //console.log('imagenes cargadas');
        };
        preloadImages();
    }, []);;


    return (
        <div>
            {/* Utiliza AnimatePresence para manejar las animaciones de entrada y salida */}
            {!isLoaded && <LoadingScreen/>}
            {isLoaded && (
                // animacion de entrada zoom
                <motion.div
                    initial={{x: -2000, scale: 0.5, opacity: 0}}
                    animate={{x: 0, scale: 1, opacity: 1}}
                    exit={{
                        x: 2000, scale: 0.5, opacity: 0,
                        transition: {duration: 0.5},
                        animation: 'easeInOut',
                    }}
                    transition={{duration: 0.5}}
                    style={{visibility: isLoaded ? 'visible' : 'hidden'}}
                >
                    {/* Contenido principal */}
                    <Home bottomrows={indexCards} images={loadedImages}/>

                    <ModalInfo/>

                </motion.div>
            )}
        </div>
    );
};

export default HomePage;