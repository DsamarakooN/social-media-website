import './App.css';
import { useState } from "react";

function App() {

  const [age, setAge] = useState(0);

  const increasAge = () => {
    setAge(age + 1);
  };

  return (
    <div className="App">
      {age} <br/>
      <button onClick={increasAge}>Increase Age</button>
    </div>
  );
}

export default App;
