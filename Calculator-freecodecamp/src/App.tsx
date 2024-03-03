import { useState } from 'react'
import './App.css'

function App() {
  const buttonPress = (symbol: string) => {
    console.log(symbol);
  };

  return (
    <div>
      <div className = "container">
        <h1>Calculator App</h1>
        <div id="calculator">
          <div id="display" style={{textAlign: "right"}}>
            <div id="answer"></div>
            <div id="expression"></div>
          </div>
          <button id="clear" onClick={() => buttonPress("clear")} className="light-gray"></button>
          <button id="negative" onClick={() => buttonPress("negative")} className="light-gray"></button>
          <button id="percentage" onClick={() => buttonPress("percentage")} className="light-gray"></button>
          <button id="divide" onClick={() => buttonPress("/")} className="light-gray"></button>
          <button id="seven" onClick={() => buttonPress("seven")} className="light-gray"></button>
          <button id="eight" onClick={() => buttonPress("eight")} className="light-gray"></button>
          <button id="nine" onClick={() => buttonPress("nine")} className="light-gray"></button>
          <button id="mutiply" onClick={() => buttonPress("*")} className="light-gray"></button>
          <button id="four" onClick={() => buttonPress("four")} className="light-gray"></button>
          <button id="five" onClick={() => buttonPress("five")} className="light-gray"></button>
          <button id="six" onClick={() => buttonPress("six")} className="light-gray"></button>
          <button id="subtract" onClick={() => buttonPress("-")} className="light-gray"></button>
          <button id="one" onClick={() => buttonPress("one")} className="light-gray"></button>
          <button id="two" onClick={() => buttonPress("two")} className="light-gray"></button>
          <button id="three" onClick={() => buttonPress("three")} className="light-gray"></button>
          <button id="add" onClick={() => buttonPress("+")} className="light-gray"></button>
          <button id="zero" onClick={() => buttonPress("zero")} className="light-gray"></button>
          <button id="decimal" onClick={() => buttonPress(".")} className="light-gray"></button>
          <button id="equal" onClick={() => buttonPress("=")} className="light-gray"></button>
        </div>
      </div>
    </div>
  );
}

export default App
