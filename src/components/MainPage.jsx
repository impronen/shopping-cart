import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import Spinner from "../assets/Spinner.svg";

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
    <div className="min-w-8/12">
      <h1 className="font-medium text-2xl text-peach-highlight text-center m-12">
        This is the main page area, where you'll be having some products
      </h1>
      <div className="flex flex-wrap mx-12">
        {loadingData ? (
          <div className="flex items-center place-self-stretch">
            <img src={Spinner} alt="Loading Spinner" />
          </div>
        ) : (
          <ul className="flex flex-wrap justify-evenly">
            {productData.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

MainPage.propTypes = {
  productData: PropTypes.array,
};
