import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const [result,setResult] = useState(0); 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value));
  };
  
  function minus(e) { 
  	setResult((result) => result - Number(inputRef.current.value)); 
    e.preventDefault();
  };
 
  function times(e) { 
    setResult((result) => result * Number(inputRef.current.value)); 
    e.preventDefault(); 
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    if(inputRef.current.value != 0){
      setResult((result) => result / Number(inputRef.current.value));  
    } else {
      setResult(result)
    }
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = 0
  }; 
 
  function resetResult(e) { 
  	e.preventDefault();
    setResult(0)
  };
  
  return ( 
    <div className="App"> 
      <div> 
        <h1>Calculadora</h1> 
      </div> 
      <form> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>resetInput</button>
        <button onClick={resetResult}>resetResult</button>
      </form>
      <div>
        <p>Result: {result}</p>
      </div>
    </div> 
  ); 
} 
 
export default App; 
