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
      <h1 className="font-medium text-2xl text-peach-highlight text-center m-4">
        This is the main page area, where you'll be having some products
      </h1>
      <div className="flex flex-wrap mx-12">
        {loadingData ? (
          <p>Loading...</p>
        ) : (
          <ul className="flex flex-wrap justify-evenly">
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
