import { useState } from 'react'
import './App.css'

function App() {

  let [count,setCount] = useState(0);

  function increment(){
    setCount(count + 1);
  }

  function decrement(){
    setCount(count - 1);
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Counter</h1>
        <h2>Counter Value: {count}</h2>

        <button className="add" onClick={increment}>Add</button>
        <button className="sub" onClick={decrement}>Subtract</button>
      </div>
    </div>
  )
}

export default App