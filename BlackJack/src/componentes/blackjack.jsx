import "animate.css";
import AsCorazones from "../img/ace_of_hearts.png";
import dosCorazones from "../img/2_of_hearts.png";
import tresCorazones from "../img/3_of_hearts.png";
import cuatroCorazones from "../img/4_of_hearts.png";
import cincoCorazones from "../img/5_of_hearts.png";
import seisCorazones from "../img/6_of_hearts.png";
import sieteCorazones from "../img/7_of_hearts.png";
import ochoCorazones from "../img/8_of_hearts.png";
import nueveCorazones from "../img/9_of_hearts.png";
import diezCorazones from "../img/10_of_hearts.png";
import JCorazones from "../img/jack_of_hearts2.png";
import QCorazones from "../img/queen_of_hearts2.png";
import KCorazones from "../img/king_of_hearts2.png";

import AsDiamantes from "../img/ace_of_diamonds.png";
import dosDiamantes from "../img/2_of_diamonds.png";
import tresDiamantes from "../img/3_of_diamonds.png";
import cuatroDiamantes from "../img/4_of_diamonds.png";
import cincoDiamantes from "../img/5_of_diamonds.png";
import seisDiamantes from "../img/6_of_diamonds.png";
import sieteDiamantes from "../img/7_of_diamonds.png";
import ochoDiamantes from "../img/8_of_diamonds.png";
import nueveDiamantes from "../img/9_of_diamonds.png";
import diezDiamantes from "../img/10_of_diamonds.png";
import JDiamantes from "../img/jack_of_diamonds2.png";
import QDiamantes from "../img/queen_of_diamonds2.png";
import KDiamantes from "../img/king_of_diamonds2.png";

import AsTrebol from "../img/ace_of_clubs.png";
import dosTrebol from "../img/2_of_clubs.png";
import tresTrebol from "../img/3_of_clubs.png";
import cuatroTrebol from "../img/4_of_clubs.png";
import cincoTrebol from "../img/5_of_clubs.png";
import seisTrebol from "../img/6_of_clubs.png";
import sieteTrebol from "../img/7_of_clubs.png";
import ochoTrebol from "../img/8_of_clubs.png";
import nueveTrebol from "../img/9_of_clubs.png";
import diezTrebol from "../img/10_of_clubs.png";
import JTrebol from "../img/jack_of_clubs2.png";
import QTrebol from "../img/queen_of_clubs2.png";
import KTrebol from "../img/king_of_clubs2.png";

import AsEspadas from "../img/ace_of_spades.png";
import dosEspadas from "../img/2_of_spades.png";
import tresEspadas from "../img/3_of_spades.png";
import cuatroEspadas from "../img/4_of_spades.png";
import cincoEspadas from "../img/5_of_spades.png";
import seisEspadas from "../img/6_of_spades.png";
import sieteEspadas from "../img/7_of_spades.png";
import ochoEspadas from "../img/8_of_spades.png";
import nueveEspadas from "../img/9_of_spades.png";
import diezEspadas from "../img/10_of_spades.png";
import JEspadas from "../img/jack_of_spades2.png";
import QEspadas from "../img/queen_of_spades2.png";
import KEspadas from "../img/king_of_spades2.png";

import { useEffect, useState } from "react";

export function BlackJack({
  empieza,
  dinero,
  setDinero,
  visible,
  apuesta,
  iniciardenuevo,
  
  
}) {
  const cartas = [
    { img: AsCorazones, valor: 11 },
    { img: dosCorazones, valor: 2 },
    { img: tresCorazones, valor: 3 },
    { img: cuatroCorazones, valor: 4 },
    { img: cincoCorazones, valor: 5 },
    { img: seisCorazones, valor: 6 },
    { img: sieteCorazones, valor: 7 },
    { img: ochoCorazones, valor: 8 },
    { img: nueveCorazones, valor: 9 },
    { img: diezCorazones, valor: 10 },
    { img: JCorazones, valor: 10 },
    { img: QCorazones, valor: 10 },
    { img: KCorazones, valor: 10 },

    { img: AsDiamantes, valor: 11 },
    { img: dosDiamantes, valor: 2 },
    { img: tresDiamantes, valor: 3 },
    { img: cuatroDiamantes, valor: 4 },
    { img: cincoDiamantes, valor: 5 },
    { img: seisDiamantes, valor: 6 },
    { img: sieteDiamantes, valor: 7 },
    { img: ochoDiamantes, valor: 8 },
    { img: nueveDiamantes, valor: 9 },
    { img: diezDiamantes, valor: 10 },
    { img: JDiamantes, valor: 10 },
    { img: QDiamantes, valor: 10 },
    { img: KDiamantes, valor: 10 },

    { img: AsTrebol, valor: 11 },
    { img: dosTrebol, valor: 2 },
    { img: tresTrebol, valor: 3 },
    { img: cuatroTrebol, valor: 4 },
    { img: cincoTrebol, valor: 5 },
    { img: seisTrebol, valor: 6 },
    { img: sieteTrebol, valor: 7 },
    { img: ochoTrebol, valor: 8 },
    { img: nueveTrebol, valor: 9 },
    { img: diezTrebol, valor: 10 },
    { img: JTrebol, valor: 10 },
    { img: QTrebol, valor: 10 },
    { img: KTrebol, valor: 10 },

    { img: AsEspadas, valor: 11 },
    { img: dosEspadas, valor: 2 },
    { img: tresEspadas, valor: 3 },
    { img: cuatroEspadas, valor: 4 },
    { img: cincoEspadas, valor: 5 },
    { img: seisEspadas, valor: 6 },
    { img: sieteEspadas, valor: 7 },
    { img: ochoEspadas, valor: 8 },
    { img: nueveEspadas, valor: 9 },
    { img: diezEspadas, valor: 10 },
    { img: JEspadas, valor: 10 },
    { img: QEspadas, valor: 10 },
    { img: KEspadas, valor: 10 },
  ];
  const numerorandom = () => {
    const numero = Math.floor(Math.random() * cartas.length);
    return numero;
  };

  const gana=()=>{
    setDinero(dinero+(apuesta*2));
  }

  const empate=()=>{
    setDinero(dinero+apuesta);
  }
  

  const [cartasCrupier, setcartasCrupier] = useState([cartas[numerorandom()]]);
  const [cartasJugador, setcartasJugador] = useState([cartas[numerorandom()]]);
  const [sumacrupier, setsumacrupier] = useState(0);
  const [sumaJugador, setsumaJugador] = useState(cartasJugador.reduce(
    (total, element) => total + element.valor,
    0
  ));
  const [turnocrupier, setturnoCrupier] = useState(false);

  useEffect(()=>{
    setcartasCrupier([cartas[numerorandom()]]);
    setcartasJugador([cartas[numerorandom()]]);
    setsumacrupier(0);
    setsumaJugador(cartasJugador.reduce(
      (total, element) => total + element.valor,
      0
    ));
    setturnoCrupier(false);
  },[visible]);

  


  useEffect(() => {
    const suma = cartasCrupier.reduce(
      (total, element) => total + element.valor,
      0
    );
    setsumacrupier(suma);
    console.log(cartasCrupier);
    if(empieza&&turnocrupier) {
   if(suma<17){
pedircrupier()
   }else{
    if(suma>sumaJugador&&suma<=21){
      console.log("Perdiste contra el crupier")

    }else if(suma>21){
      console.log("Ganaste, el crupier se ha pasado")
      gana();
    }else if(suma==sumaJugador){
      console.log("EMPATE")
empate();
    }else{
      console.log("LE HAS GANADO AL GRUPIER")
      gana();
    }
   }
  }
  }, [cartasCrupier]);


  useEffect(() => {
    const suma = cartasJugador.reduce(
      (total, element) => total + element.valor,
      0
    );
    setsumaJugador(suma);

    if (suma > 21) {
      console.log("PERDISTE TE PASASTE");
      setturnoCrupier(true);
    }else if (suma == 21) {
      console.log("BLACKJACK")
      gana();
    }
    
  }, [cartasJugador]);

  //SE EJECUTA AUTOMATICAMENTE AL INICIAR
  useEffect(() => {
    const cartainicialCrupier = numerorandom();

    const cartainicialJugador = numerorandom();

    setcartasCrupier([...cartasCrupier, cartas[cartainicialCrupier]]);

    console.log(cartasCrupier[0].valor);
  }, []);

  const pedircrupier = () => {
    
    setturnoCrupier(true);
    if (sumacrupier < 17) {
      const cartanueva = numerorandom();
      setcartasCrupier([...cartasCrupier, cartas[cartanueva]]);
      
    //   if (sumacrupier < 17) {
      
    //     pedircrupier();
    //     console.log(cartasCrupier);
      
    //   
      
    // }
  }
  };

  const pedirjugador = () => {
    
    const cartanueva = numerorandom();
    setcartasJugador([...cartasJugador, cartas[cartanueva]]);

    
  };

  return (
    <div
      className={
        visible
          ? "flex min-w-full justify-center items-center min-h-full mb-5 mt-5 "
          : "hidden"
      }
    >
      <div className="flex min-w-full justify-center items-center ">
       
       {
        turnocrupier?
       
        <button 
          onClick={pedirjugador} disabled
          className="bg-green-600 w-1/6 h-10 text-white rounded-full transition-all w-17por text-shadow fixed right-3/4 "
        >
          Pedir
        </button>
        :
        <button 
          onClick={pedirjugador} 
          className="bg-green-600 w-1/6 h-10 text-white rounded-full transition-all w-17por text-shadow fixed right-3/4 "
        >
          Pedir
        </button>

      }
      <button 
          onClick={iniciardenuevo}
          className="bg-green-600 w-1/6 h-10 text-white rounded-full transition-all w-17por text-shadow fixed right-3/4 top-2/3 "
        >
          Iniciar Nuevo juego
        </button>
        <div className="ml-4 mr-4 flex flex-wrap border h-m imagen-verde border-gray-400 rounded-2xl w-1/3 text-white text-center justify-center">
          <div className="w-full h-1/2 p-5">
            <h2 className="font-medium text-2xl text-shadow ">Crupier</h2>
            <h3 className="font-semibold text-xl text-shadow">
              {turnocrupier?sumacrupier:cartasCrupier[0].valor}
            </h3>
            <div className="flex items-center justify-center">
              {cartasCrupier.map((element, index) =>
                !turnocrupier?
                index != 1 ? (
                  <div
                    key={index}
                    className={`hovercartas fixed top-1/4 left-${index}por`}
                  >
                    <img
                      key={index}
                      className={` ${
                        empieza ? "animate__animated animate__flipInY  " : ""
                      }   img-cartas shadow-black shadow shadow-2xl`}
                      src={element.img}
                    ></img>
                  </div>
                ) : (
                  <div
                    key={index}
                    className={`Carta-negra hovercartas fixed top-1/4 left-${index}por`}
                  >
                    <img
                      key={index}
                      className={` ${
                        empieza ? "animate__animated animate__flipInY  " : ""
                      }   img-cartas shadow-black shadow shadow-2xl`}
                      src={element.img}
                    ></img>
                  </div>
                ):<div
                    key={index}
                    className={` hovercartas fixed top-1/4 left-${index}por`}
                  >
                    <img
                      key={index}
                      className={` ${
                        empieza ? "animate__animated animate__flipInY  " : ""
                      }   img-cartas shadow-black shadow shadow-2xl`}
                      src={element.img}
                    ></img>
                  </div>
              )}
            </div>
          </div>
          <div className="w-full h-0">
            <hr />
          </div>

          <div className="w-full h-1/2 p-5">
            <h1 className="text-shadow font-medium text-2xl">Tu</h1>
            <h3 className="font-semibold text-xl text-shadow ">
              {sumaJugador}
            </h3>
            <div className="flex items-center justify-center">
              {cartasJugador.map((element, index) => (
                <div
                  key={index}
                  className={`hovercartas fixed top-2/3 left-${index}por`}
                >
                  <img
                    key={index}
                    className={` ${
                      empieza ? "animate__animated animate__flipInY  " : ""
                    }   img-cartas shadow-black shadow shadow-2xl`}
                    src={element.img}
                  ></img>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={pedircrupier}
          className="bg-red-600 w-1/6 h-10 text-white rounded-full transition-all w-17por fixed left-3/4 text-shadow"
        >
          Plantarse
        </button>
      </div>
    </div>
  );
}
