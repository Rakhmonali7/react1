import React, { useState } from "react";
import "./App.css";
const SizeSelector = () => {
  const [selected, setSelected] = useState(null);

  const sizeClick = (size) => {
    setSelected(size);
  };

  return (
    <div className="size">
      <div
        className={`size-box ${selected === "S" ? "selected" : ""}`}
        onClick={() => sizeClick("S")}
      >
        S
      </div>
      <div
        className={`size-box ${selected === "M" ? "selected" : ""}`}
        onClick={() => sizeClick("M")}
      >
        M
      </div>
      <div
        className={`size-box ${selected === "L" ? "selected" : ""}`}
        onClick={() => sizeClick("L")}
      >
        L
      </div>
      <div
        className={`size-box ${selected === "XL" ? "selected" : ""}`}
        onClick={() => sizeClick("XL")}
      >
        XL
      </div>
    </div>
  );
};

export default SizeSelector;
