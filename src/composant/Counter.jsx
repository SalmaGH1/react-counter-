
import { useState } from "react";
import Valeur from "./Valeur";
import PasIncrementation from "./PasIncrementation";
import PasDecrementation from "./PasDecrementation";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [pasInc, setPasInc] = useState(2);
  const [pasDec, setPasDec] = useState(2);

  function incrementer() {
    setCounter(counter + pasInc);
  }

  function decrementer() {
    setCounter(counter - pasDec);
  }

  function initialiser() {
    setCounter(0);
  }

  return (
    <div>
      <h2>Counter</h2>
      <Valeur counter={counter} />
      <button onClick={incrementer}>
        Incrémenter
      </button>
      <button onClick={decrementer}>
        Décrémenter
      </button>
      <button onClick={initialiser}>
        Initialiser
      </button>
      
      <PasIncrementation pas={pasInc} newpas={setPasInc}
      />

      <PasDecrementation
        pas={pasDec}
        newpas={setPasDec}
      />
    </div>
  );
}

export default Counter;
