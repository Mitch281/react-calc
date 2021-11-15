import { useEffect, useState } from "react";
import Buttons from "./components/Buttons";
import Output from "./components/Output";

function App() {
  const [output, setOutput] = useState("");
  const [expression, setExpression] = useState("");
  const [clearScreen, setClearScreen] = useState(false);

  function renderSymbolPressed(e) {
    if (clearScreen) {
      setOutput("");
      setClearScreen(false);
    }
    setOutput((output) => output + e.target.textContent);
  }

  function calculateExpression() {
    try {
      setOutput(eval(expression).toString());
      setClearScreen(true);
    } catch (error) {
    }
  }

  // Whenever we update the output, we want to update the expression as well.
  useEffect(() => {
    setExpression(output);
  }, [output])

  return (
    <div className="App">
      <Output output={output} />
      <Buttons onClick={renderSymbolPressed} onCalculate={calculateExpression} />
    </div>
  );
}

export default App;
