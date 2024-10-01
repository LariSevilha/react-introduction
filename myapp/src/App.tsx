import { useState } from 'react'; 
import { Header } from './components/header';
import { Footer } from './components/footer';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <div>
        <Header />
        Contador
      </div>
      <div className="card">
        <div className="counter">
          <button className="counter-button" onClick={decrement}>
            -
          </button>
          <span className="counter-value">{count}</span>
          <button className="counter-button" onClick={increment}>
            +
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;