import { useState } from "react";

import "./App.css";
import SizeSelector from "./Select";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decremetn = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div className="container">
        <div>
          <h2>Size:</h2>
        </div>

        {/* testing size */}

        <SizeSelector />

        {/* testing size */}
        <div className="count">
          <div onClick={decremetn}>-</div>
          <h3>{count}</h3>
          <div onClick={increment}>+</div>
        </div>
        <div className="btnCont">
          <button className="btn1">BUY NOW</button>
          <button className="btn2">ADD TO CART</button>
          <button className="btn3">🧡 </button>
        </div>
      </div>
    </div>
  );
}

export default App;
