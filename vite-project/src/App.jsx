import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Controller from "./components/Controller";

function App() {
  const [move, setMove] = useState(undefined);

  return (
    <>
      <Game move={move} setMove={setMove} />
      <Controller setMove={setMove} />
    </>
  );
}

export default App;
