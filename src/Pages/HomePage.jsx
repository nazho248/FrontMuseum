import React, {useState, useEffect} from 'react';
import {Home} from '../components/index/Home';
import {ModalInfo} from "../components/ModalInfo";
import {motion} from 'framer-motion'
import {LoadingScreen} from "../components/LoadingScreen";


export function HomePage() {

    const indexCards = [
        {
            id: 1, title: 'Estética',
            link: '/estetica', imageSrc: '/assets/img/estetica.jpg',
            alt: 'Descripcion Imagen 1'
        },
        {
            id: 2, title: 'Tiempo',
            link: '/tiempo', imageSrc: '/assets/img/cultura.jpg',
            alt: 'Descripcion Imagen 2'
        },
        {
            id: 3, title: 'Arte-Facto',
            link: '/artefacto', imageSrc: '/assets/img/arqueologia.jpg',
            alt: 'imagen 2'
        },
        {
            id: 4, title: 'Galería',
            link: '/galeria', imageSrc: '/assets/img/social.jpg',
            alt: 'imagen 2'
        }
    ];

    /*cambiar titulo de pagina*/
    document.title = "Bienvenido";
    //agregar id al body
    document.body.id = "Home";

    //const [isLoading, setIsLoading] = useState(true);
    /*useEffect(() => {
        // Simulando una carga asincrónica (podrías reemplazarlo con una llamada a una API, por ejemplo)
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Por ejemplo, 2000ms para simular una carga de 2 segundos
    }, [])*/

    /*
        useEffect(() => {
            // Simula la carga asincrónica de recursos (puedes agregar más recursos aquí)
            Promise.all([
                // Cargar tus imágenes u otros recursos aquí
                new Promise((resolve) => {
                    const img = new Image();
                    img.src = '/assets/img/canonautor.jpg';
                    img.src = '/assets/img/social.jpg';
                    img.src = '/assets/img/arqueologia.jpg';
                    img.src = '/assets/img/estetica.jpg';
                    img.onload = resolve;
                }),
            ]).then(() => {
                // Cuando todos los recursos estén listos, oculta la pantalla de carga
                setIsLoading(false);
            });
        }, []);
    */
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true)

        const preloadImages = async () => {
            // Crea una promesa para cargar cada imagen
            const imagePromises = [
                '/assets/img/social.jpg',
                '/assets/img/arqueologia.jpg',
                '/assets/img/estetica.jpg',
                // Agrega más rutas de imágenes aquí
            ].map((src) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = resolve;
                });
            });

            // Espera a que todas las imágenes se carguen antes de mostrar el contenido principal
            await Promise.all(imagePromises);
            //esperar 2 segundos
            setTimeout(() => {
                setIsLoaded(true)
                console.log('imagenes cargadas');

            }, 1);
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
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{
                            opacity: 0,
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