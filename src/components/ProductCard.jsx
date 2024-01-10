import PropTypes from "prop-types";
import { useState } from "react";
import numberFormatter from "../hooks/numberFormatter";
import { useOutletContext } from "react-router-dom";

export default function ProductCard({ title, image, price, id }) {
  const formattedPrice = numberFormatter(price);
  const [wasTransitioned, setTransition] = useState(false);

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

  function setStuffToCart(itemID) {
    console.log(itemID);
    setCartItems((cart) => [...cart, { id: itemID, quantity: +1 }]);
    console.log(cart);
  }

  const clickHandler = () => {
    setStuffToCart(id);
    setTransition(!wasTransitioned);
    setTimeout(() => {
      setTransition(false);
    }, 200);
  };

  return (
    <div
      key={id}
      className="flex flex-col shadow-2xl border-8 border-burning-orange bg-white max-w-96 min-h-96 m-5 items-center justify-center rounded-3xl p-1"
    >
      <img src={image} alt={title} className="w-1/2 rounded my-5" />
      <h1 className="text-deep-gray text-center font-bold">{title}</h1>
      <div className="flex p-2 justify-around w-10/12 items-center">
        <p className="">{formattedPrice}</p>
        <button
          className={` transform ${
            wasTransitioned ? "-rotate-12 scale-110" : ""
          } transition-transform duration-200 ease-in-out bg-burning-orange rounded px-4 py-2 transition ease-in-out delay-50 hover:scale-105 hover:bg-secondary-orange`}
          onClick={clickHandler}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
};
