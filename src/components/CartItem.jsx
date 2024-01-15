import PropTypes from "prop-types";
import numberFormatter from "../hooks/numberFormatter";

export default function CartItem({ itemID, title, image, price, quantity }) {
  const formattedPrice = numberFormatter(price);
  const totalFormattedPrice = numberFormatter(price * quantity);

  return (
    <div className="flex justify-between items-center py-8 px-3 border-y-2 border-burning-orange text-peach-highlight w-11/12">
      <div>
        <img
          src={image}
          alt={title}
          className="max-h-24 object-contain rounded"
        />
      </div>
      <div className="flex flex-col">
        <p>item</p>
        <p>{title}</p>
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
