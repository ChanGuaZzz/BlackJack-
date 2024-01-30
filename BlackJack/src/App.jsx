import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BlackJack } from "./componentes/blackjack";

function App() {
  const [BloqueApuesta, setBloqueApuesta] = useState(true);
  const [BloqueJuego, setBloqueJuego] = useState(false);

  return (
    <>
      {/* INICIO APUESTA */}

     

      {/* jUEGO */}
      <BlackJack />
      
    </>
  );
}

export default App;
