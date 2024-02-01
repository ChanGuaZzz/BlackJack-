import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BlackJack } from "./componentes/blackjack";
import { Apuesta } from "./componentes/Apuesta";
import { Volverajugar } from "./componentes/volverajugar";

function App() {
  const [BloqueApuesta, setBloqueApuesta] = useState(true);
  const [BloqueJuego, setBloqueJuego] = useState(false);
  const [Bloquenuevo, setBloquenuevo] = useState(false);
  const [dinero, setdinero]= useState(500)
  const [sindinero, setSindinero]= useState(false)
  const [apuesta, setApuesta] = useState(0);
  const [empieza, setempieza] = useState(false);
  const [modal, setmodal] = useState(true);



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
    setmodal(false)
    if(dinero==0){
      setSindinero(true);
      setBloquenuevo(true);
    }
  }

  const Jugardenuevo=()=>{
    setBloqueApuesta(true);
    setBloqueJuego(false);
    setBloquenuevo(false)
    setempieza(false)
    setApuesta(0)
    setmodal(false)
    setdinero(500)
    setSindinero(false)
  }
  return (
    <>
    <h1 className="text-center text-white text-5xl m-1 text-shadow">BlackJack</h1>
      {/* INICIO APUESTA */}

      {sindinero?
        <Volverajugar visible={Bloquenuevo} funcionvolver={Jugardenuevo}></Volverajugar>
      : 
      <Apuesta empezarJuego={empezarJuego} visible={BloqueApuesta} dinero={dinero} funcionSetDinero={setdinero} apuesta={apuesta} setApuesta={setApuesta}/>
    }

      {/* jUEGO */}
      <BlackJack funcionmodal={setmodal} iniciardenuevo={Cerrar} empieza={empieza} dinero={dinero} setDinero={setdinero} visible={BloqueJuego} apuesta={apuesta} />
      
      {modal?
        <div className="fixed  top-0 min-w-full min-h-screen  borroso"></div>
        :""
      }
    </>
  );
}

export default App;
