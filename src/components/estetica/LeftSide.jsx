import React from "react";
export function LeftSide() {
  return (
    <div className="relative flex flex-col h-screen w-4/12 m-0">
      {/*Fondo de patrón en imagen blanca*/}
      <div
        className="h-4/6 bg-gradient-to-r from-white to-gray-600 bg-pattern bg-cover bg-center"
        style={{
          backgroundImage: "url('assets/img/pattern.png')",
          filter: "brightness(1000%)",
          backgroundSize: "300%",
        }}
      ></div>

      <div className="h-2/6 bg-slate-900 flex justify-center items-center">
        <img
          className="aspect-square h-3/4 hover:transform hover:scale-110 transition duration-300 ease-in-out1
                "
          src="assets/img/qr-white.png"
          alt="Codigo_QR"
        />
      </div>
    </div>
  );
}
