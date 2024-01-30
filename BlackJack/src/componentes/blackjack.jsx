
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

import negro from "../img/negro.jpg";







export function BlackJack(){

const cartas=[
  { nombre: "AsCorazones", img: AsCorazones, valor: 1 },
  { nombre: "dosCorazones", img: dosCorazones, valor: 2 },
  { nombre: "tresCorazones", img: tresCorazones, valor: 3 },
  { nombre: "cuatroCorazones", img: cuatroCorazones, valor: 4 },
  { nombre: "cincoCorazones", img: cincoCorazones, valor: 5 },
  { nombre: "seisCorazones", img: seisCorazones, valor: 6 },
  { nombre: "sieteCorazones", img: sieteCorazones, valor: 7 },
  { nombre: "ochoCorazones", img: ochoCorazones, valor: 8 },
  { nombre: "nueveCorazones", img: nueveCorazones, valor: 9 },
  { nombre: "diezCorazones", img: diezCorazones, valor: 10 },
  { nombre: "JCorazones", img: JCorazones, valor: 10 },
  { nombre: "QCorazones", img: QCorazones, valor: 10 },
  { nombre: "KCorazones", img: KCorazones, valor: 10 },

  { nombre: "AsDiamantes", img: AsDiamantes, valor: 1 },
  { nombre: "dosDiamantes", img: dosDiamantes, valor: 2 },
  { nombre: "tresDiamantes", img: tresDiamantes, valor: 3 },
  { nombre: "cuatroDiamantes", img: cuatroDiamantes, valor: 4 },
  { nombre: "cincoDiamantes", img: cincoDiamantes, valor: 5 },
  { nombre: "seisDiamantes", img: seisDiamantes, valor: 6 },
  { nombre: "sieteDiamantes", img: sieteDiamantes, valor: 7 },
  { nombre: "ochoDiamantes", img: ochoDiamantes, valor: 8 },
  { nombre: "nueveDiamantes", img: nueveDiamantes, valor: 9 },
  { nombre: "diezDiamantes", img: diezDiamantes, valor: 10 },
  { nombre: "JDiamantes", img: JDiamantes, valor: 10 },
  { nombre: "QDiamantes", img: QDiamantes, valor: 10 },
  { nombre: "KDiamantes", img: KDiamantes, valor: 10 },

  { nombre: "AsTrebol", img: AsTrebol, valor: 1 },
  { nombre: "dosTrebol", img: dosTrebol, valor: 2 },
  { nombre: "tresTrebol", img: tresTrebol, valor: 3 },
  { nombre: "cuatroTrebol", img: cuatroTrebol, valor: 4 },
  { nombre: "cincoTrebol", img: cincoTrebol, valor: 5 },
  { nombre: "seisTrebol", img: seisTrebol, valor: 6 },
  { nombre: "sieteTrebol", img: sieteTrebol, valor: 7 },
  { nombre: "ochoTrebol", img: ochoTrebol, valor: 8 },
  { nombre: "nueveTrebol", img: nueveTrebol, valor: 9 },
  { nombre: "diezTrebol", img: diezTrebol, valor: 10 },
  { nombre: "JTrebol", img: JTrebol, valor: 10 },
  { nombre: "QTrebol", img: QTrebol, valor: 10 },
  { nombre: "KTrebol", img: KTrebol, valor: 10 },

  { nombre: "AsEspadas", img: AsEspadas, valor: 1 },
  { nombre: "dosEspadas", img: dosEspadas, valor: 2 },
  { nombre: "tresEspadas", img: tresEspadas, valor: 3 },
  { nombre: "cuatroEspadas", img: cuatroEspadas, valor: 4 },
  { nombre: "cincoEspadas", img: cincoEspadas, valor: 5 },
  { nombre: "seisEspadas", img: seisEspadas, valor: 6 },
  { nombre: "sieteEspadas", img: sieteEspadas, valor: 7 },
  { nombre: "ochoEspadas", img: ochoEspadas, valor: 8 },
  { nombre: "nueveEspadas", img: nueveEspadas, valor: 9 },
  { nombre: "diezEspadas", img: diezEspadas, valor: 10 },
  { nombre: "JEspadas", img: JEspadas, valor: 10 },
  { nombre: "QEspadas", img: QEspadas, valor: 10 },
  { nombre: "KEspadas", img: KEspadas, valor: 10 },
]

const cartasCrupier=[]
    return(

    <div className="flex min-w-full justify-center items-center min-h-screen">
    <div className="flex min-w-full justify-center items-center min-h-screen">
    <button className="bg-green-600 w-1/6 h-10 text-white rounded-full transition-all w-17por fixed right-3/4 ">Pedir</button>
    <div className="ml-4 mr-4 flex flex-wrap border h-m bg-black border-gray-400 rounded-2xl w-1/3 text-white text-center justify-center">
      <div className="w-full" >Crupier</div>
      <div className="w-full" >Tu</div>
    </div>
  
    <button className="bg-red-600 w-1/6 h-10 text-white rounded-full transition-all w-17por fixed left-3/4">Plantarse</button>
    </div>
  </div>
  
  )
}