import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const useShopData = () => {
  const [productData, setProductData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);

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

  return { productData, loadingData, error };
};

function App() {
  const {
    productData,
    setProductData,
    loadingData,
    setLoadingData,
    error,
    setError,
  } = useShopData();

  return (
    <>
      <div className="menu flex justify-between py-5 text-peach-highlight">
        <h1 className="pl-10 w-5/12">This is the menu</h1>
        <nav>
          <ul className="flex flex-wrap mx-5">
            <li className="mx-5">
              <Link to="splashpage">Home</Link>
            </li>
            <li className="mx-5">
              <Link to="mainPage">Shop</Link>
            </li>
            <li className="mx-5">
              <Link to="cartpage">Cart</Link>
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
          ]}
        />
      </div>
    </>
  );
}

export default App;
