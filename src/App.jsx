import React from "react";
import "./App.css";
import "./styles/styles.css";
import ProductList from "./productList";
function App() {
  let total = 0;
  return (
    <div className="App">
      <div className="heading flex h-28 items-center justify-between px-4">
        <h1 className="text-3xl font-bold">Desserts</h1>
        <span className="cart relative bottom-2 right-2">
          <div className=" bg-red-600 text-center badge relative top-3 left-3">
            {total}
          </div>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16.5" cy="18.5" r="1.5" />
            <circle cx="9.5" cy="18.5" r="1.5" />
            <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z" />
          </svg>
        </span>
      </div>
        <div className="cont">
        <ProductList/>
        </div>
    </div>
  );
}

export default App;
