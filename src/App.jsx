import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const useShopData = () => {
  const [productData, setProductData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://fakestoreapi.com/products?limit=9")
        .then((res) => {
          if (!res.ok) {
            throw new Error("API responded with an error");
          }
          return res.json();
        })

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

  return { productData, loadingData, error, cart, setCartItems };
};

function App() {
  const {
    productData,
    setProductData,
    loadingData,
    setLoadingData,
    error,
    setError,
    cart,
    setCartItems,
  } = useShopData();

  return (
    <>
      <div className="menu flex justify-between py-10 text-peach-highlight">
        <h1 className="pl-10 w-5/12">fake shop</h1>
        <nav>
          <ul className="flex flex-wrap mx-5">
            <li className="mx-5">
              <Link to="splashpage">home</Link>
            </li>
            <li className="mx-5">
              <Link to="mainPage">shop</Link>
            </li>
            <li className="mx-5">
              <Link to="cartpage">cart</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="outlet">
        <Outlet
          context={[
            productData,
            setProductData,
            loadingData,
            setLoadingData,
            error,
            setError,
            cart,
            setCartItems,
          ]}
        />
      </div>
    </>
  );
}

export default App;
