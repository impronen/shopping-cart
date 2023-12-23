import { useEffect, useState } from "react";

export default function useAPI() {
  const [productData, setProductData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=7"
        );
        const result = await response.json();
        setProductData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoadingData(false);
      }
    };
    fetchData();
  }, []);

  return { productData, loadingData, error };
}
