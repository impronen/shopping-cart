import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

export default function MainPage() {
  const [productData, setProductData] = useOutletContext();
  const [loadingData, setLoadingData] = useOutletContext();
  console.log(productData);
  return (
    <>
      <h1>This is the main page area, where youll be having some products</h1>
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
