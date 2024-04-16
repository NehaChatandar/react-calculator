import React, { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");

  const handleClick = (parameter) => {
    if (parameter === '%') {
      setInput(input + '/100');
    } else {
      setInput(input + parameter);
    }
  }

  const handleResult = () => {
    try {
      setResult(eval(input))
    } catch (error) {
      setResult("Error");
    }
  }

  const handleClear = () => {
    setInput("");
    setResult("0");
  }

  const handleDelete = () => {
    setInput(input.slice(0, -1)); 
  }

  return (
    <div className="App">
      <h1>Calculator</h1>

      <div className='calculator'>

        <p className='display-result'>Result: {result}</p>

        <input className='display' type="text" value={input} readOnly />
        
        <button onClick={() => { handleClick('1') }}>1</button>
        <button onClick={() => { handleClick('2') }}>2</button>
        <button onClick={() => { handleClick('3') }}>3</button>
        <button className='operator' onClick={() => { handleClick('+') }}>+</button>



        <button onClick={() => { handleClick('4') }}>4</button>
        <button onClick={() => { handleClick('5') }}>5</button>
        <button onClick={() => { handleClick('6') }}>6</button>
        <button className='operator' onClick={() => { handleClick('-') }}>-</button>



        <button onClick={() => { handleClick('7') }}>7</button>
        <button onClick={() => { handleClick('8') }}>8</button>
        <button onClick={() => { handleClick('9') }}>9</button>
        <button className='operator' onClick={() => { handleClick('*') }}>*</button>



        <button onClick={() => { handleClick('0') }}>0</button>
        <button onClick={() => { handleClick('.') }}>.</button>
        <button onClick={handleClear}>C</button>
        <button className='operator' onClick={() => { handleClick('/') }}>/</button>

        <button className='equal' onClick={handleResult}>=</button>
        <button onClick={handleDelete}>DE</button>
        <button className='operator' onClick={() => { handleClick('%') }}>%</button>
      </div>

    </div>
  );
}

export default App;