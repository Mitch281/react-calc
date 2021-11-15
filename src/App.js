import { useEffect, useState } from "react";
import Buttons from "./components/Buttons";
import Output from "./components/Output";

function App() {
  const [output, setOutput] = useState("");
  const [expression, setExpression] = useState("");
  const [clearScreen, setClearScreen] = useState(false);
  console.log("rendered");

  function renderSymbolPressed(e) {
    if (clearScreen) {
      setOutput("");
      setClearScreen(false);
    }
    setOutput((output) => output + e.target.textContent);
  }

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
    }
  }

  // Whenever we update the output, we want to update the expression to output as well.
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
