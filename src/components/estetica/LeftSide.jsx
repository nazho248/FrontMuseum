import React from 'react'
export function LeftSide({ color }) {
  return (
    <div className="relative m-0 flex h-screen w-3/12 flex-col">
      {/*Fondo de patrón en imagen blanca*/}
      <div
        className={'bg-pattern h-full bg-gradient-to-r from-white to-gray-600 bg-cover bg-center ' + color + '_left'}
        style={{
          backgroundImage: `url(../assets/img/estetica/patterns/pattern_${color}.jpg)`,
          objectFit: 'cover',
        }}
      ></div>
    </div>
  )
}
