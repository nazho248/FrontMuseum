import React from 'react'
export function LeftSide() {
  return (
    <div className="relative m-0 flex h-screen w-3/12 flex-col lg:w-4/12">
      {/*Fondo de patrón en imagen blanca*/}
      <div
        className="bg-pattern h-4/6 bg-gradient-to-r from-white to-gray-600 bg-cover bg-center"
        style={{
          backgroundImage: "url('../assets/img/pattern.png')",
          filter: 'brightness(1000%)',
          backgroundSize: '300%',
        }}
      ></div>

      <div className="flex h-2/6 items-center justify-center bg-slate-900">
        <img
          className="ease-in-out1 aspect-square h-3/4 transition duration-300 hover:scale-110 hover:transform
                "
          src="../assets/img/qr-white.png"
          alt="Codigo_QR"
        />
      </div>
    </div>
  )
}
