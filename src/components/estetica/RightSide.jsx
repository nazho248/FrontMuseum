export function RightSide() {
  return (
    <div className="flex h-screen w-8/12 flex-col">
      <div className="lg:p-100 flex h-4/6 flex-col items-center justify-center bg-gray-600 p-10 ">
        <h1 className="font-regular w-full text-3xl text-orange-600">C-600 Múcura</h1>
        <br />
        <p className="text-justify text-xs text-white lg:text-base  ">
          Diseños de color rojo, en su cuello se percibe rectángulo pintado de color rojo, enmarcado por otros dos
          rectángulos, a manera de contorno, generando un contraste por espacio (ocupado vacío o positivo y negativo) de
          figura y tamaño, lo puede dar un inicio de fractal ejemplo cerca y lejos, también se podría apreciar el efecto
          espejo.
          <br />
          La pieza es subglobular, (representación del útero) el hombro es trapezoidal, el asa está en la parte inferior
          del labio y del hombro. El labio es evertido externo. Análisis Sagrado, la zona fálica, llamada cuello, es la
          representación masculina del sol y la parte circular de la boca representa el sol, en donde el cuello entra en
          el útero de la madre tierra.
          <br />
          La base no tiene ideogramas por lo que representa el vientre de la madre tierra. El asa es la representación
          del nacimiento del sol cuando muere con la tarde, en el cual el cóndor ayudaba en ese renacer y morir, en la
          cultura Andina, el color cuando va a morir se tira por el peñasco.{' '}
        </p>
      </div>
      <div className="relative flex h-2/6 flex-row bg-gray-500">
        {/* Fondo de patrón con filtro blanco */}
        <div
          className="bg-pattern absolute left-0 top-0 h-full w-full bg-gradient-to-r from-white to-gray-600 bg-cover bg-center"
          style={{
            background: 'url("assets/img/pattern.png")',
            filter: 'brightness(1000%)',
            backgroundSize: '150%',
          }}
        />
        {/* Primer imagen */}
        <img className="relative z-10 h-5/6 w-1/2 object-cover" src="assets/img/arte.jpg" alt="" />
        {/* Segunda imagen */}
        <img className="relative z-10 h-5/6 w-1/2 object-cover" src="assets/img/arte.jpg" alt="" />
      </div>
    </div>
  )
}
