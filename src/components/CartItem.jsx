import PropTypes from "prop-types";
import numberFormatter from "../hooks/numberFormatter";

export default function CartItem({ itemID, title, image, price, quantity }) {
  const formattedPrice = numberFormatter(price);
  const totalFormattedPrice = numberFormatter(price * quantity);

  return (
    <div className="flex justify-between items-center my-8 mx-3 text-peach-highlight w-11/12 text-center leading-6">
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
    </div>
  );
}

CartItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  itemID: PropTypes.number,
  quantity: PropTypes.number,
};
