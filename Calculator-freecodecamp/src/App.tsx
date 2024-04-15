import { useState } from 'react'
import './App.css'

function App() {
  const [answer, setAnswer] = useState("0");
  const [expression, setExpression] = useState("");
  const et = expression.trim();

  const isOperator = (symbol: string) => {
    return /[-+/*]/.test(symbol);
  }

  const buttonPress = (symbol: string) => {
    if (symbol === "clear") {
      setAnswer("");
      setExpression("0");
    } else if (symbol === "negative") {
      if (answer === "") return;
      setAnswer(
        answer.toString().charAt(0) === "-" ? answer.slice(1) : "-" + answer
      );
    } else if (symbol === "percent") {
      if (answer === "") return;
      setAnswer((parseFloat(answer) / 100).toString()); 
    } else if (isOperator(symbol)) {
      setExpression(et + " " +  symbol + " ");
    } else if (symbol === "=") {
      calculate();
    } else if (symbol === "0") {
      if(expression.charAt(0) !== "0") {
        setExpression(expression+ symbol);
      }
    } else if (symbol === ".") {
      if (answer.indexOf(".") === -1) {
        // split by operators and get the last number
        const lastNumber = expression.split(/[-+/*]/g).pop();
        // if the last number already has a decimal, dont add another
        if (lastNumber?.includes(".")) return;
        setExpression(expression + symbol);
      }

    } else {
      setExpression(expression + symbol);
    }
  };

  const calculate = () => {
    //if last character is an operator, should do nothing
    if (isOperator(et.charAt(et.length - 1))) return;
    //clean the expression so that two operators in a row use the last operator
    // 5 * - + 5 = 10, the next object that is passed through the expression is called parts
    const parts = et.split(" ");
    // the part object is stored in the array below. 
    const newParts = []; 

    // go through parts backwards
    for (let i = parts.length-1; i>= 0; i--) {
      //this checks if the latest object in the parts array is an operator
      if(["*", "/", "+"].includes(parts[i]) && isOperator(parts[i-1])) {
        newParts.unshift(parts[i]);
        let j = 0;
        let k = i-1;
        while (isOperator(parts[k])) {
          k--;
          j++;
        }
        i -= j;
      } else {
        newParts.unshift(parts[i]);
      }
    }
    const newExpression = newParts.join(" ");
    //checks if the expression has an operator starting it
    if (isOperator(newExpression.charAt(0))) {
      setAnswer(eval(answer + newExpression) as string);
    } else {
      setAnswer(eval(newExpression) as string);
    }
    setExpression("");
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
          <button id="clear" onClick={() => buttonPress("clear")} className="light-gray">C</button>
          <button id="negative" onClick={() => buttonPress("negative")} className="light-gray">+/-</button>
          <button id="percent" onClick={() => buttonPress("percent")} className="light-gray">%</button>
          <button id="divide" onClick={() => buttonPress("/")} className="blue">/</button>
          <button id="seven" onClick={() => buttonPress("seven")} className="light-gray">7</button>
          <button id="eight" onClick={() => buttonPress("eight")} className="light-gray">8</button>
          <button id="nine" onClick={() => buttonPress("nine")} className="light-gray">9</button>
          <button id="mutiply" onClick={() => buttonPress("*")} className="blue">*</button>
          <button id="four" onClick={() => buttonPress("four")} className="light-gray">4</button>
          <button id="five" onClick={() => buttonPress("five")} className="light-gray">5</button>
          <button id="six" onClick={() => buttonPress("six")} className="light-gray">6</button>
          <button id="subtract" onClick={() => buttonPress("-")} className="blue">-</button>
          <button id="one" onClick={() => buttonPress("one")} className="light-gray">1</button>
          <button id="two" onClick={() => buttonPress("two")} className="light-gray">2</button>
          <button id="three" onClick={() => buttonPress("three")} className="light-gray">3</button>
          <button id="add" onClick={() => buttonPress("+")} className="blue">+</button>
          <button id="zero" onClick={() => buttonPress("zero")} className="light-gray">0</button>
          <button id="decimal" onClick={() => buttonPress(".")} className="light-gray">.</button>
          <button id="equals" onClick={() => buttonPress("=")} className="blue">=</button>
        </div>
      </div>
    </div>
  );
}

export default App
