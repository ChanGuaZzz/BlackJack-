import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BlackJack } from "./componentes/blackjack";
import { Apuesta } from "./componentes/Apuesta";

function App() {
  const [BloqueApuesta, setBloqueApuesta] = useState(true);
  const [BloqueJuego, setBloqueJuego] = useState(false);
  const [dinero, setdinero]= useState(500)
  const [apuesta, setApuesta] = useState(0);
  const [empieza, setempieza] = useState(false);

  const empezarJuego=()=>{
    setBloqueApuesta(false);
    setBloqueJuego(true);
    setempieza(true)
  }

  const Cerrar=()=>{
    setBloqueApuesta(true);
    setBloqueJuego(false);
    setempieza(false)
    setApuesta(0)
  }
  return (
    <>
    <h1 className="text-center text-white text-5xl m-1">BlackJack</h1>
      {/* INICIO APUESTA */}
      <Apuesta empezarJuego={empezarJuego} visible={BloqueApuesta} dinero={dinero} funcionSetDinero={setdinero} apuesta={apuesta} setApuesta={setApuesta}/>
     

      {/* jUEGO */}
      <BlackJack iniciardenuevo={Cerrar} empieza={empieza} dinero={dinero} setDinero={setdinero} visible={BloqueJuego} apuesta={apuesta} />
      
    </>
  );
}

export default App;
