/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import numberFormatter from "../hooks/numberFormatter";
import { useOutletContext } from "react-router-dom";
import setStuffToCart from "../hooks/setStuffToCart";

export default function CartItem({ id, title, image, price, quantity }) {
  const formattedPrice = numberFormatter(price);
  const totalFormattedPrice = numberFormatter(price * quantity);

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
      action: "remove",
    });
  };

  return (
    <div
      key={id}
      className="flex justify-between items-center my-8 mx-5 self-center border-burning-orange text-peach-highlight w-11/12 text-center leading-6"
    >
      <div>
        <img
          src={image}
          alt={title}
          className="max-h-40 object-contain rounded"
        />
      </div>
      <div className="flex flex-col">
        <p className="leading-8">item</p>
        <p className="max-w-52 leading-6">{title}</p>
      </div>
      <div className="flex flex-col">
        <p>price</p>
        <p>{formattedPrice}</p>
      </div>
      <div className="flex flex-col">
        <p>quantity</p>
        <p>{quantity}</p>
      </div>
      <div className="flex flex-col">
        <p>total</p>
        <p>{totalFormattedPrice}</p>
      </div>
      <div className="flex flex-col">
        <button onClick={clickHandler}>X</button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
  quantity: PropTypes.number,
};
