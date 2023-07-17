import './App.css';
import { useState } from "react";
function App2() {
    const [count,setCount] = useState(0)
    const onIncrement=()=>{
        setCount(count+1)
    }
    const onDecrement=()=>{
        setCount(count-1)
    }
    return (
      <div className="counter Application">
        <h1>counter Application</h1>
       
       
        <button className="button1" onClick={onIncrement}>Increase</button>
        <p className="para">{count}</p>
        <button className="button2" onClick={onDecrement}>Decrease</button>
          
     
      </div>
    );
  }
  
  export default App2;
  