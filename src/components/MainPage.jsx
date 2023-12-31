import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

export default function MainPage() {
  const [
    productData,
    setProductData,
    loadingData,
    setLoadingData,
    error,
    setError,
  ] = useOutletContext();

  return (
    <>
      <h1 className="text-sky-400/75">
        This is the main page area, where youll be having some products
      </h1>
      <div>
        {loadingData ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {productData.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

MainPage.propTypes = {
  productData: PropTypes.array,
};
