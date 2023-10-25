export function RightSide({ artefacto_desc }) {
  return (
    <div className="flex h-screen w-9/12 flex-col lg:w-8/12">
      <div className="lg:p-100 flex h-4/6 flex-col items-center justify-center bg-gray-600 p-10 ">
        <h1 className="font-regular w-full text-3xl text-orange-600">
          {artefacto_desc.titulo} {artefacto_desc.tipo}
        </h1>
        <br />
        <p className="text-justify text-xs text-white lg:text-xl">{artefacto_desc.analisis}</p>
      </div>
      <div className="relative flex h-2/6 flex-row bg-gray-500">
        {/* Fondo de patrón con filtro blanco */}
        <div
          className="bg-pattern absolute left-0 top-0 h-full w-full bg-gradient-to-r from-white to-gray-600 bg-cover bg-center"
          style={{
            background: 'url("../assets/img/pattern.png")',
            filter: 'brightness(1000%)',
            backgroundSize: '150%',
          }}
        />
        {/* Primer imagen */}
        <img className="relative z-10 h-5/6 w-1/2 object-cover" src="../assets/img/arte.jpg" alt="" />
        {/* Segunda imagen */}
        <img className="relative z-10 h-5/6 w-1/2 object-cover" src="../assets/img/arte.jpg" alt="" />
      </div>
    </div>
  )
}
