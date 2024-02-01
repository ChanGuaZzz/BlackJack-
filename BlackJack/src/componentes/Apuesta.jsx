import ficha5 from "../img/ficha5.png";
import ficha10 from "../img/ficha10.png";
import ficha50 from "../img/ficha50.png";
import ficha100 from "../img/ficha100.png";
import ficha500 from "../img/ficha500.png";
import { useState } from "react";

export function Apuesta({ visible, dinero, funcionSetDinero, empezarJuego, apuesta, setApuesta }) {
  
  

  const apostar = (ficha) => {
    if (dinero >= ficha) {
      funcionSetDinero(dinero - ficha);
      setApuesta(apuesta + ficha);
      
    } else {
      setApuesta(apuesta + dinero);
      
      funcionSetDinero(0);

    }
  };

  const deshacer = () => {
    funcionSetDinero(dinero+apuesta);
        setApuesta(0);
        
        
    
  };

  return (
    <>
      <div
        className={
          visible
            ? "flex min-w-full justify-center items-center min-h-full mb-5 mt-5 "
            : "hidden"
        }
      >
        <div className="ml-4 mr-4 flex flex-wrap border h-vhh fondo-gris border-gray-400 rounded-2xl w-2/3 text-white text-center justify-center">
          <div className="text-shadow min-w-full h-1 mt-5 text-white font-bold text-4xl">
            Apuesta: {apuesta} 
          </div>
          <button onClick={deshacer} className="min-w-52 bg-red-600 w-1/6 h-10 text-white font-semibold rounded-full transition-all w-17por ">Deshacer </button>
          <div className=" text-shadow min-w-full h-1 mt-5 text-white font-bold text-2xl">
            Dinero: {dinero}
          </div>
          <div className="min-w-full h-0">
            <button
              onClick={empezarJuego}
              className="min-w-32 bg-foto w-1/6 h-10 text-white rounded-full transition-all w-17por "
            >
              Empezar juego
            </button>
          </div>
          <div className=" min-w-full h-1/3 ">
            <div className=" text-xl font-extrabold text-shadow">Fichas</div>
            <div className="flex justify-center items-center h-full m-5">
              <div className="flex flex-wrap items-center justify-center bg-green-950 w-full h-full rounded-xl">
                <div className="h-full w-1/5">
                  <button
                    className="w-17por"
                    onClick={() => {
                      apostar(5);
                    }}
                  >
                    <img className="fichas" src={ficha5} alt="dwdwd" />
                  </button>
                </div>
                <div className="h-full w-1/5">
                  <button
                    className="w-17por"
                    onClick={() => {
                      apostar(10);
                    }}
                  >
                    <img className="fichas" src={ficha10} alt="dwdwd" />
                  </button>
                </div>
                <div className="h-full w-1/5">
                  <button
                    className="w-17por"
                    onClick={() => {
                      apostar(50);
                    }}
                  >
                    <img className="fichas" src={ficha50} alt="dwdwd" />
                  </button>
                </div>
                <div className="h-full w-1/5">
                  <button
                    className="w-17por"
                    onClick={() => {
                      apostar(100);
                    }}
                  >
                    <img className="fichas" src={ficha100} alt="dwdwd" />
                  </button>
                </div>
                <div className="h-full w-1/5">
                  <button
                    className="w-17por"
                    onClick={() => {
                      apostar(500);
                    }}
                  >
                    <img className="fichas" src={ficha500} alt="dwdwd" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
