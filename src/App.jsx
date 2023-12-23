import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import useAPI from "./hooks/useAPI";
import { useEffect, useState } from "react";

function App() {
  const { productData, loadingData, error } = useAPI();

  return (
    <>
      <div className="menu">
        <h1>This is the menu</h1>
        <nav>
          <ul>
            <li>
              <Link to="splashpage">Home</Link>
            </li>
            <li>
              <Link to="mainPage">Shop</Link>
            </li>
            <li>
              <Link to="cartpage">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </>
  );
}

export default App;
