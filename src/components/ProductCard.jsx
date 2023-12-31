import PropTypes from "prop-types";

export default function ProductCard({ title, image, price }) {
  return (
    <div className="flex flex-col bg-burning-orange max-w-96 min-h-96 m-5 items-center justify-center rounded">
      <h1 className="text-deep-gray text-center font-bold">{title}</h1>
      <img src={image} alt={title} className="w-1/2 rounded" />
      <p>{price}</p>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};
