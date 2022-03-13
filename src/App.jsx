import './App.css';
import { Counter } from"./components/Counter";

function App() {
  return (
    <div className="App">
     <Counter initial_Value={0} />   
    </div>
  );
}

export default App;
