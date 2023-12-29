import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const ShopData = () => {
  const [productData, setProductData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://fakestoreapi.com/products?limit=5")
        .then((res) => {
          if (!res.ok) {
            throw new Error("API responded with an error");
          }
          return res.json();
        })
        .then((json) => console.log(json))
        .then((json) => {
          setProductData(json);
          setLoadingData(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoadingData(false);
        });
    };
    fetchData();
  }, []);

  return { productData, loadingData, error };
};

function App() {
  const { productData, loadingData, error } = ShopData();
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
