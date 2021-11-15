import { useState } from "react";
import Buttons from "./components/Buttons";
import Output from "./components/Output";

function App() {
  const [output, setOutput] = useState("");
  const [expression, setExpression] = useState("");
  let clearScreen = false;
  return (
    <div className="App">
      <Output />
      <Buttons />
    </div>
  );
}

export default App;
