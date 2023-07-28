import {Fragment} from "react";

export function TimeHeaader() {
    return (
        <Fragment>
                <header>
                    <div className="img-background" />
                    <div className="container text-center">
                        <h1>Linea de Tiempo</h1>
                        <p>Museo UDES</p>
                    </div>
                </header>

            <div className="container peque-cont mt-5 text-center flex flex-col justify-center items-center mx-auto">
                    <h1 className="textTittle">
                        Pobladores Indigenas En Santander
                    </h1>
                    <br />
                    <br />
                    <p>
                        La cultura es la acumulación de las prácticas y las historias de quienes
                        viven y han vivido en un lugar. Lo que hoy llamamos Santander es un
                        territorio que estuvo poblado desde antes de la llegada de los españoles,
                        por indígenas que están en la raíz de lo que hoy llamamos "nuestra
                        cultura", unos habitantes de zonas montañosas en la cordillera Oriental y
                        otros de las riberas del río Madgalena. Esta línea de tiempo explora la
                        manera en que estas poblaciones se instalaron, crecieron, se transformaron
                        y son reivindicadas hoy.
                    </p>
                </div>
                <br />
        </Fragment>
    )
}