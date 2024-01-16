import PropTypes from "prop-types";

export default function TotalDisplayer({ totalPrice }) {
  return (
    <div>
      <p>{totalPrice}</p>
    </div>
  );
}

TotalDisplayer.propTypes = {
  totalPrice: PropTypes.string,
};
