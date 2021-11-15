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

  // This function replaces rendered symbols with the appropriate symbols for the eval function.
  function sanitiseExpression() {
    // We need an expression clone here because we do not want to alter the state of the expression. Otherwise,
    // this will result in a premature re-render of the application and thus, we will have to press the equals button
    // twice.
    let expressionClone = expression.slice();
    for (let i = 0; i < expression.length; i++) {
      if (expression.charAt(i) === "x") {
        expressionClone =  expressionClone.substring(0, i) + "*" + expressionClone.substring(i + 1, expression.length);
      }
      else if (expression.charAt(i).charCodeAt() === 247) {
        expressionClone =  expressionClone.substring(0, i) + "/" + expressionClone.substring(i + 1, expression.length);
      }
    }

    return expressionClone;
  }

  function calculateExpression() {
    if (expression.length === 0) {
      alert("Please enter an expression.");
      return;
    }
    try {
      const expressionClone = sanitiseExpression();
      setOutput(eval(expressionClone).toString());
      setClearScreen(true);
    } catch (error) {
      setOutput("Syntax Error");
      setClearScreen(true);
    }
  }

  function clearOutput() {
    setOutput("");
  }

  function backspace() {
    setOutput((output) => output.substring(0, output.length - 1));
  }

  // Whenever we update the output, we want to update the expression to output as well.
  useEffect(() => {
    setExpression(output);
  }, [output])

  return (
    <div className="App">
      <Output output={output} />
      <Buttons onClick={renderSymbolPressed} onCalculate={calculateExpression} onClear={clearOutput}
      onBackspace={backspace} />
    </div>
  );
}

export default App;
