import React, {Fragment} from 'react';
import {Home} from './components/index/Home';
import {ModalInfo} from "./components/ModalInfo";


export function HomePage() {

    const indexCards = [
        {
            id: 1, title: 'Estética',
            link: '/estetica', imageSrc: '/assets/img/f48caa45bca59ea8f5e9d6625b6f7cc3.jpg',
            alt: 'Descripcion Imagen 1'
        },
        {
            id: 2,  title: 'Tiempo',
            link: '/tiempo', imageSrc: '/assets/img/cultura.jpg',
            alt: 'Descripcion Imagen 2'
        },
        {
            id: 3, title: 'Arte-Facto',
            link: '/arte-facto', imageSrc: '/assets/img/arqueologia.jpg',
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

    return (
        <Fragment>
            <Home bottomrows={indexCards}/>
            <ModalInfo/>
        </Fragment>
    );
}

export default HomePage;
