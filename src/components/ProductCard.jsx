import PropTypes from "prop-types";

export default function ProductCard({ title, image, price }) {
  return (
    <>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{price}</p>
    </>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};
