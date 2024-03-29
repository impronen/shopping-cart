/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState } from "react";
import numberFormatter from "../hooks/numberFormatter";
import { useOutletContext } from "react-router-dom";
import setStuffToCart from "../hooks/setStuffToCart";

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

  const clickHandler = () => {
    setStuffToCart({
      itemID: id,
      title,
      image,
      price,
      cart,
      setCartItems,
      action: "add",
    });
    setTransition(!wasTransitioned);
    setTimeout(() => {
      console.log(cart);
      setTransition(false);
    }, 200);
  };

  return (
    <div
      key={id}
      className="flex flex-col justify-evenly shadow-2xl border-8 border-burning-orange bg-white max-w-96 min-h-96 m-5 rounded-3xl p-1"
    >
      <div className="flex item-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-1/2 min-h-52 object-contain rounded my-5"
        />
      </div>
      <div className="flex flex-col py-6 justify-center">
        <h1 className="text-deep-gray font-bold text-center p-2 ">{title}</h1>
        <div className="flex flex-row m-2">
          <p className="self-center text-center basis-2/4">{formattedPrice}</p>
          <div className="flex flex-row ">
            <button
              className={`min-w-15 transform ${
                wasTransitioned ? "-rotate-12 scale-110" : ""
              } transition-transform duration-200 ease-in-out bg-burning-orange rounded px-4 py-2 transition ease-in-out delay-50 hover:scale-105 hover:bg-secondary-orange`}
              onClick={clickHandler}
            >
              Add to Cart
            </button>
            <div
              className={`rounded-full align-top size-3 bg-secondary-orange ${
                wasTransitioned ? "shootup" : ""
              }`}
            ></div>
          </div>
        </div>
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
