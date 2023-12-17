import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="mainPage">Main Page</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
