import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
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
              <Link to="mainPage">Main Page</Link>
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
