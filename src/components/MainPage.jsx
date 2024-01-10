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
    cart,
    setCartItems,
  ] = useOutletContext();

  return (
    <div className="min-w-8/12">
      <h1 className="font-medium text-2xl text-peach-highlight text-center m-12">
        Wanna buy some stuff? We have stuff...
      </h1>
      <div className="flex flex-wrap mx-12">
        {loadingData ? (
          <div className="flex justify-center items-center h-full w-full">
            <img
              src={Spinner}
              alt="Loading Spinner"
              className="mt-50 self-center"
            />
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
