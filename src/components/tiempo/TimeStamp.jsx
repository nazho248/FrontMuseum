import {Fragment} from "react";

export function TimeStamp() {
    return (
        <section className="timeline" style={{ padding: 0 }}>
            <div className="container">
                <div className="timeline-item">
                    <div className="timeline-img" />
                    <div className="timeline-content js--fadeInLeft">
                        <br />
                        <br />
                        <h2 className="text-center mb-2">¿Desde cuándo vivimos acá?</h2>
                        <div className="date">--20.000 a.C. - 700 d.C.--</div>
                        <p>
                            El poblamiento americano, cuya fecha definitiva aún está aún en
                            discusión, se remonta a unos 20000 años o más. Los nuevos pobladores
                            del continente se desplazaron y asentaron gradualmente a lo largo del
                            territorio, desde Alaska en el norte hasta llegar a Tierra del Fuego,
                            en el sur. Cada asentamiento fue desarrollando costumbres, objetos,
                            comidas e incluso rasgos físicos distintivos, que poco a poco
                            diferenciaron a unos grupos de otros.
                        </p>
                        <br />
                        <p>
                            {" "}
                            Los pobladores de la región de Santander, hasta donde sabemos hoy,
                            presentaron rasgos propios claros alrededor del año ochocientos,
                            cuando ya fabricaban sus propias cerámicas, habitaban viviendas
                            circulares agrupadas en pequeños poblados y momificaban a sus muertos.
                            Sin embargo, desde el siglo I antes de Cristo ya fabricaban cerámicas
                            y construían viviendas cerca de los nacimientos de agua, y su
                            presencia en el territorio se remonta aún más atrás.
                        </p>
                        {/*
                          <a class="bnt-more" href="javascript:void(0)">More</a>
          */}
                    </div>
                </div>
                <div
                    className="timeline-item"
                    style={{ marginTop: "-500px", marginBottom: 80 }}
                >
                    <div className="timeline-img" />
                    <div className="timeline-content timeline-card js--fadeInRight">
                        <br />
                        <p>
                            ¿Quieres profundizar en este tema? Este paper, de 2011, reúne algunos
                            de los principales hallazgos sobre diversidad genética Guane.
                        </p>
                        <br />
                        <p>
                            Casas, A.; Gómez, A.; Briceño, I.; Díaz, M.; Bernal, E. y Rodríguez,
                            J.V. (2011){" "}
                            <strong>
                                High genetic diversity on a sample of pre-Columbian bone remains
                                from Guane territories in northwestern Colombia. Am. J. Phys.
                                Anthropology, 146 (4): 637-649.
                            </strong>{" "}
                            DOI:{" "}
                            <a
                                className="link_reference"
                                href="https://doi.org/10.1002/ajpa.21626"
                            >
                                10.1002/ajpa.21626
                            </a>
                        </p>
                    </div>
                </div>
                <div className="timeline-item right_item">
                    <div className="timeline-img" />
                    <div className="timeline-item ">
                        <div className="timeline-img" />
                        <div className="timeline-content timeline-card js--fadeInRight">
                            <img src="assets/img/timeline_fig1.PNG" alt="" />
                            <p mt-2="">Migraciones humanas en haplogrupos mitocondriales.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}