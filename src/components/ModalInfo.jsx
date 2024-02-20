import React from 'react'

export function ModalInfo() {
  const datos_creditos = Object.values(require('../data/creditos.json'))

  return (
    <div className={'card card-default overflow-hidden bg-slate-100'}>
      {/*header of the card*/}
      <div className="card-body mx-3">
        <div className="mx-5 mt-4 flex drop-shadow-md">
          <div className=" card-title w-11/12 pl-10 text-center">
            <h1 className="text-2xl lg:text-4xl">Grupo Curatorial</h1>
          </div>
          <div className="w-1/12 text-end">
            <div className="icon close">
              <h2 className="text-3xl">
                <strong>X</strong>
              </h2>
            </div>
          </div>
        </div>
        <br />
        <div id="customScroll" className="top-/[70px] sticky" style={{ maxHeight: 'calc(90vh - 120px)' }}>
          <div className="card-text mx-4 text-justify text-sm lg:mx-10 lg:text-lg">
            {/*2 columnas de texto*/}
            <div className="grid grid-cols-1 grid-rows-1 gap-8 text-xs lg:grid-cols-1 lg:text-sm">
              {/*recorro todos los items en creditos.json*/}

              {datos_creditos.map((credito, index) => (
                <div className="mx-8 flex justify-center gap-4">
                  <img
                    className="aspect-square  w-24  object-contain lg:h-auto lg:w-1/4"
                    src={'/assets/creditos/' + credito.img}
                  />
                  <div className="flex max-w-sm flex-col self-center">
                    <b className="text-base lg:text-lg">{credito.Nombre}</b>
                    <i>{credito.Titulo}</i>

                    <p className="my-2 text-xs">{credito.Descripcion} </p>
                    <p>{credito.Profesion}</p>
                    <p className={'text-xs'}>{credito.correo}</p>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-1 border-slate-300 py-6" />
            <p className="text-xs lg:text-sm">
              Un especial agradecimiento a los estudiantes de los programas de Antropología y Tecnología en Comunicación
              Gráfica que contribuyeron a este proyecto. Especialmente a Christian Mauricio Orozco Pérez y David
              Verdooren Flórez (Antropología) y, Valentina Guevara Rincón y Francisco Julián Romero Villamizar
              (Comunicación Gráfica).
            </p>

            <hr className="border-1 border-slate-300 pt-6" />
            {/*footer of the card*/}
            <div className="card-footer p-3 text-center">
              {/*icon of a world*/}
              {/*<a href="login.html">*/}
              <div className="flex w-full">
                <div className="w-1/2">
                  <h3 className="text-info icon text-start text-sm lg:text-base">
                    Universidad de Santander - Jair Gonzalez <span className="font-bold">@2023</span>
                  </h3>
                </div>
                <div className="w-1/2">
                  <div className="icon accesibility text-right">
                    {/*version del proyecto con la version de package.json*/}
                    <h2 className="ml-2 text-xs text-slate-400">v. 1.0</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  )
}
