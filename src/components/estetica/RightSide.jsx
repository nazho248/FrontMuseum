export function RightSide() {
    return (
        <div className="flex flex-col h-screen w-8/12">
            <div className="flex flex-col h-4/6 bg-gray-600 items-center justify-center p-100 sm:p-28">
                <h1 className="text-orange-600 text-3xl font-regular w-full">
                    C-600 Múcura
                </h1>
                <br />
                <p className="text-white text-justify">
                    Diseños de color rojo, en su cuello se percibe rectángulo pintado de color
                    rojo, enmarcado por otros dos rectángulos, a manera de contorno, generando
                    un contraste por espacio (ocupado vacío o positivo y negativo) de figura y
                    tamaño, lo puede dar un inicio de fractal ejemplo cerca y lejos, también
                    se podría apreciar el efecto espejo.
                    <br />
                    La pieza es subglobular, (representación del útero) el hombro es
                    trapezoidal, el asa está en la parte inferior del labio y del hombro. El
                    labio es evertido externo. Análisis Sagrado, la zona fálica, llamada
                    cuello, es la representación masculina del sol y la parte circular de la
                    boca representa el sol, en donde el cuello entra en el útero de la madre
                    tierra.
                    <br />
                    La base no tiene ideogramas por lo que representa el vientre de la madre
                    tierra. El asa es la representación del nacimiento del sol cuando muere
                    con la tarde, en el cual el cóndor ayudaba en ese renacer y morir, en la
                    cultura Andina, el color cuando va a morir se tira por el peñasco.{" "}
                </p>
            </div>
            <div className="flex flex-row h-2/6 bg-gray-500 relative">
                {/* Fondo de patrón con filtro blanco */}
                <div
                    className="h-full w-full bg-gradient-to-r from-white to-gray-600 bg-pattern bg-cover bg-center absolute top-0 left-0"
                    style={{
                        background: 'url("assets/img/pattern.png")',
                        filter: "brightness(1000%)",
                        backgroundSize: "150%"
                    }}
                />
                {/* Primer imagen */}
                <img
                    className="h-5/6 w-1/2 object-cover relative z-10"
                    src="assets/img/arte.jpg"
                    alt=""
                />
                {/* Segunda imagen */}
                <img
                    className="h-5/6 w-1/2 object-cover relative z-10"
                    src="assets/img/arte.jpg"
                    alt=""
                />
            </div>
        </div>

    )
}