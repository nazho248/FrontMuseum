import React from 'react';
import {Link} from 'react-router-dom';

export function ModalInfo() {
    return (
        <div className="card card-default bg-slate-100 overflow-hidden">
            <div className="card-body mx-3">
                <div className="flex mt-4 mx-5 drop-shadow-md">
                    <div className=" w-11/12 card-title text-center pl-10">
                        <h1 className="text-2xl lg:text-4xl">Sobre la Exposición</h1>
                    </div>
                    <div className="w-1/12 text-end">
                        <div className="icon close">
                            <h2 className="text-3xl">
                                <strong>X</strong>
                            </h2>
                        </div>
                    </div>
                </div>
                <br/>
                <div
                    id="customScroll"
                    className="overflow-y-auto overflow-hidden sticky top-/[70px] "
                    style={{ maxHeight: 'calc(90vh - 120px)' }}
                >


                <div className="card-text text-sm lg:text-base mx-10 text-justify">
                    <p className="card-text text-justify">
                        El proyecto se titula Re-leyendo artefactos: Puesta en valor de piezas arqueológicas a través de
                        una museografía participativa en la Universidad de Santander, es resultado de la primera
                        convocatoria que la Universidad realiza en la modalidad de Creación Investigación UDES.
                        <br/>
                        <br/>
                        Es un trabajo interdisciplinario que conjugó perspectivas antropológicas, arqueológicas, de
                        diseño gráfico e historia del cual se derivan varios productos y hallazgos que pueden apreciarse
                        en este portal web, bajo las categorías de: Estética, Tiempo, Arte-Facto y Galería.
                        <br/>
                        <br/>
                        Esta experiencia investigativa contó con la participación de un equipo de docentes
                        investigadores al igual que estudiantes de la Universidad de Santander:
                    </p>
                    {/*2 columnas de texto*/}
                    <div className="grid grid-cols-2 m-4 text-sm lg:text-base">
                        <div className="card-text  mr-5 text-justify">
                            <ul className="list-disc list-outside space-y-2">
                                <li> Grethel Alexandra M. Flórez Sierra, docente investigadora del Programa de
                                    Tecnología en Comunicación Gráfica
                                </li>
                                <li>
                                    Margarita María Durán Urrea, docente investigadora del Programa de Antropología
                                </li>
                                <li>
                                    Mónica Johanna Giedelmann Reyes, docente investigadora del Programa de Antropología
                                </li>
                                <li>
                                    Johana Rojas Sierra,docente investigadora del Programa Tecnología en Comunicación
                                    Gráfica
                                </li>
                                <li >
                                    Jair Andres González Ruíz, estudiante tesista del Programa de Ingeniería de Software
                                </li>
                            </ul>

                        </div>
                        <div className="card-text  ml-5 text-justify">
                            <ul className="list-disc list-outside space-y-2">
                                <li>
                                    David Verdooren Flórez, estudiante del Programa de Antropología
                                </li>
                                <li>
                                    Christian M. Orozco Pérez, estudiante del Programa de Antropología
                                </li>
                                <li>
                                    Valentina Guevara Rincón , estudiante del Programa de Tecnología en Comunicación
                                    Gráfica.
                                </li>
                                <li>
                                    Francisco Julián Romero Villamizar, estudiante del Programa de Tecnología en Diseño
                                    Gráfico Publicitario.
                                </li>
                                <li>
                                    Edgar Pico Ruíz, maestro y encargado de la reserva arqueológica UDES.
                                </li>

                            </ul>
                        </div>
                    </div>


                    <p className="card-text text-sm lg:text-base text-justify">
                        Un especial agradecimiento a los estudiantes del Programa de Antropología y Tecnología en
                        Comunicación Gráfica al igual que a María Fernanda Reyes Rodríguez por sus contribuciones que
                        ayudaron a enriquecer este proyecto.
                    </p>
                </div>
                <br/>
                <hr className="border-1 border-slate-300"/>
                {/*footer of the card*/}
                <div className="card-footer text-center p-3">
                    {/*icon of a world*/}
                    {/*<a href="login.html">*/}
                    <div className="flex w-full">
                        <div className="w-1/2">
                            <Link to={'/login'}>
                                <h3 className="text-info text-start icon text-sm lg:text-base">🌎 Intranet</h3>
                            </Link>
                        </div>
                        <div className="w-1/2">
                            <div className="icon accesibility text-right">
                                <h2 className="text-xs ml-2 text-slate-400">v. 1.0</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </div>

        </div>

    )
}