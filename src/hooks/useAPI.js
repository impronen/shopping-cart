import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function useAPI() {
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

  return <Outlet context={[productData, loadingData, error]} />;
}
