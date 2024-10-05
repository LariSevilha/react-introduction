import React, { useState } from 'react';
import './App.css';  

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter-container">
      <h1>Contador</h1>
      <p className="count">{count}</p>
      <button className="button" onClick={increment}>Increment</button>
      <button className="button" onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;