import React from 'react';
import {Link} from 'react-router-dom';

export function ModalInfo() {
    return (
        <div className="card card-default bg-white">
            <div className="card-body mx-3">
                <div className="grid grid-cols-3 m-4">
                    <div className="icon accesibility">
                        <h2 className="text-lg">v. 1.0</h2>
                    </div>
                    <div className="card-title text-center">
                        <h1 className="text-3xl">Sobre la Exposición</h1>
                    </div>
                    <div className="col-1 text-end">
                        <div className="icon close">
                            <h2 className="text-3xl">
                                <strong>X</strong>
                            </h2>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="card-text text-xl mx-10 text-justify">
                    <p className="card-text text-xl  text-justify">
                        El proyecto se titula Re-leyendo artefactos: Puesta en valor de piezas arqueológicas a través de
                        una
                        museografia participativa en la Universidad de Santander, es resultado de la primera
                        convocatoria
                        que la Universidad realiza en la modalidad de Creación Investigación UDES.
                        <br/>
                        Es un trabajo interdisciplinario que conjugó perspectivas antropológicas, arqueológicas, de
                        diseño
                        gráfico e historia del cual se derivan varios productos y hallazgos que pueden apreciarse en
                        este
                        portal web, bajo las categorias de: Estética, Tiempo, Arte-Facto y Galería.
                        <br/>
                        Esta experiencia investigativa contó con la participación de un equipo de docentes
                        investigadores al igual que estudiantes de la Universidad de Santander:
                    </p>
                    {/*2 columnas de texto*/}
                    <div className="grid grid-cols-2 m-4">
                        <div className="card-text text-xl mx-10 text-justify">
                            <p className="card-text text-xl text-justify">
                                Grethel A. M. Flórez Sierra, docente investigadora del Programa de Diseño Gráfico<br/>
                                Margarita María Durán Urrea, docente investigadora del Programa de Antropología<br/>
                                Mónica Johanna Giedelmann Reyes, docente investigadora del Programa de Antropología<br/>
                                Jair Andres González Ruíz, estudiante tesista del Programa de Ingeniería de Software

                            </p>
                        </div>
                        <div className="card-text text-xl mx-10 text-justify">
                            <p className="card-text text-xl  text-justify">
                                Edgar Pico Ruíz, maestro y encargado de la reserva arqueológica UDES. <br/>
                                David Verdooren Flórez, estudiante del Programa de Antropología<br/>
                                Christian M. Orozco Pérez, estudiante del Programa de Antropología<br/>
                                Niña ilustradora ****, estudiante del Programa de Diseño Gráfico<br/>
                            </p>
                        </div>
                    </div>
                    <p className="card-text text-xl  text-justify">
                        Un especial agradecimiento a los estudiantes del Programa de Antropología al igual que a María
                        Fernanda Reyes Rodríguez por sus contribuciones que ayudaron enriquecer este proyecto.
                    </p>
                </div>
                <br/>
                <hr/>
                {/*footer of the card*/}
                <div className="card-footer text-center p-5">
                    {/*icon of a world*/}
                    {/*<a href="login.html">*/}
                    <Link to={'/login'}>
                        <h3 className="text-info text-start icon text-2xl">🌎 Intranet</h3>
                    </Link>
                </div>
            </div>
        </div>

    )
}