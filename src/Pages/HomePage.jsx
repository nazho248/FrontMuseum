import React, {useState, useEffect} from 'react';
import {Home} from '../components/index/Home';
import {ModalInfo} from "../components/ModalInfo";
import {motion} from 'framer-motion'
import {LoadingScreen} from "../components/LoadingScreen";


export function HomePage() {

    const indexCards = [
        {
            id: 1, title: 'Estética',
            link: '/Estetica', imageSrc: '/assets/img/estetica.jpg',
            alt: 'Descripcion Imagen 1'
        },
        {
            id: 2, title: 'Tiempo',
            link: '/Tiempo', imageSrc: '/assets/img/cultura.jpg',
            alt: 'Descripcion Imagen 2'
        },
        {
            id: 3, title: 'Arte-Facto',
            link: '/Artefacto', imageSrc: '/assets/img/arqueologia.jpg',
            alt: 'imagen 2',
            customStyle: "-390px"
        },
        {
            id: 4, title: 'Galería',
            link: '/Galeria', imageSrc: '/assets/img/social.jpg',
            alt: 'imagen 2'
        }
    ];

    /*cambiar titulo de pagina*/
    document.title = "Bienvenido";
    //agregar id al body
    document.body.id = "Home";

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(false)

        const preloadImages = async () => {
            // Crea una promesa para cargar cada imagen
            const imagePromises = [
                '/assets/img/social.jpg',
                '/assets/img/arqueologia.jpg',
                '/assets/img/estetica.jpg',
                '/assets/img/border-smooth.png',
                // Agrega más rutas de imágenes aquí
            ].map((src) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = resolve;
                });
            });

            // Espera a que todas las imágenes se carguen antes de mostrar el contenido principal

            //las imagenes ya estan cargadas?
            await Promise.all(imagePromises);
            //esperar 2 segundos
            setIsLoaded(true)
            console.log('imagenes cargadas');
/*            setTimeout(() => {


            }, 1);*/
        };

        preloadImages();
    }, []);


    return (
        <div>
            {/* Utiliza AnimatePresence para manejar las animaciones de entrada y salida */}
                {!isLoaded && <LoadingScreen />}
                {isLoaded && (
                    // animacion de entrada zoom
                    <motion.div
                        initial={{ x: -2000, scale: 0.5, opacity: 0 }}
                        animate={{ x: 0, scale: 1 , opacity: 1}}
                        exit={{
                            x: 2000, scale: 0.5, opacity: 0,
                            transition: { duration: 0.5 },
                            animation: 'easeInOut',
                        }}
                        transition={{ duration: 0.5 }}
                        style={{ visibility: isLoaded ? 'visible' : 'hidden' }}
                    >
                        {/* Contenido principal */}
                        <Home bottomrows={indexCards} />
                        <ModalInfo />
                    </motion.div>
                )}
        </div>
    );
};

export default HomePage;