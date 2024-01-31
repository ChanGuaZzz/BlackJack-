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

  const empezarJuego=()=>{
    setBloqueApuesta(false);
    setBloqueJuego(true);
  }
  return (
    <>
    <h1 className="text-center text-white text-5xl m-1">BlackJack</h1>
      {/* INICIO APUESTA */}
      <Apuesta empezarJuego={empezarJuego} visible={BloqueApuesta} dinero={dinero} funcionSetDinero={setdinero}/>
     

      {/* jUEGO */}
      <BlackJack visible={BloqueJuego} dinero={dinero} funcionSetDinero={setdinero}/>
      
    </>
  );
}

export default App;
