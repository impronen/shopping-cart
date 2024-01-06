import PropTypes from "prop-types";
import numberFormatter from "../hooks/numberFormatter";

export default function ProductCard({ title, image, price }) {
  const formattedPrice = numberFormatter(price);

  return (
    <div className="flex flex-col shadow-2xl border-8 border-burning-orange border-inherit bg-white max-w-96 min-h-96 m-5 items-center justify-center rounded-3xl p-1">
      <img src={image} alt={title} className="w-1/2 rounded my-5" />
      <h1 className="text-deep-gray text-center font-bold">{title}</h1>
      <div className="flex p-2 justify-around w-10/12 items-center">
        <p className="">{formattedPrice}</p>
        <button className="bg-burning-orange rounded px-4 py-2 shadow hover:shadow-md">
          Cart
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};
