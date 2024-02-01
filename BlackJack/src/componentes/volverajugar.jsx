import { useState } from "react";

export function Volverajugar({visible, funcionvolver }) {
  return (
    <>
      <div
        className={visible?
          "flex min-w-full justify-center items-center min-h-full mb-5 mt-5 "
        :"hidden"}
      >
      
        <div className="ml-4 mr-4 flex flex-wrap border h-36 fondo-gris border-gray-400 rounded-2xl w-2/3 text-white text-center justify-center">
        <div className="mt-3 text-xl font-extrabold text-shadow">Te quedaste sin fichas</div>
        <div className="min-w-full h-0"><button onClick={funcionvolver} className="min-w-32 bg-foto w-1/6 h-10 text-white rounded-full transition-all w-17por ">Volver a jugar</button></div>
        
        </div>
      </div>
    </>
  );
}
