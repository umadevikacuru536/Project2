import React from "react";
import './App.css';
import { useState } from "react";
const Random = () => {
    const [count, setCount] = useState(0);
    const [min, setMin] = useState(0);
}
    const randomHandler = () => {
      setCount(Math.floor(Math.random() * min));
    }
  
   
    function Showrandom() {
  return (
  <div id="boxCount" >
    <h2 className="random">Random Number</h2>
    <p>Generat a random number in the range of 0 to 100</p>
    <button className="btn btn-primary" onClick={randomHandler}>Generat</button>
    <p>{count}</p>
  </div>
  );
}

export default Showrandom;