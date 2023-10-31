import React from 'react'
export function LeftSide({ color }) {
  return (
    <div className="relative m-0 flex h-screen w-3/12 flex-col lg:w-4/12">
      {/*Fondo de patrón en imagen blanca*/}
      <div
        className={'bg-pattern h-4/6 bg-gradient-to-r from-white to-gray-600 bg-cover bg-center ' + color + '_left'}
        style={{
          backgroundImage: `url(../assets/patterns/pattern_${color}.jpg)`,
          objectFit: 'cover',
        }}
      ></div>

      <div className={'flex h-2/6 items-center justify-center ' + color + '_left_bottom'}>
        <img
          className="ease-in-out1 aspect-square h-3/4 transition duration-300 hover:scale-110 hover:transform
                "
          src="../assets/img/qr-white.png"
          alt="Codigo_QR"
          style={{
            filter: 'brightness(100) invert(1)',
          }}
        />
      </div>
    </div>
  )
}
