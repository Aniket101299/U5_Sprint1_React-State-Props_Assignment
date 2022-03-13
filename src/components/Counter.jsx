import { useState } from "react";

export function Counter () {

const [counter,setCounter] = useState(0);

const changeValue = (value) => {
    setCounter(counter + value);
}

const double = () =>{
    setCounter(counter*2);
}

   return (
  <>
  <h1>Counter {counter}</h1>
  <button onClick={()=> {changeValue(1)}}>Add 1</button>
  <button onClick={()=> {
      if(counter>=1) {
        changeValue(-1);
      }
      }}>Sub 1</button>
  <button onClick={()=>{double()}}>Double</button>
  </>
    );
}

 