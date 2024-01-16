export default function totalPriceCounter(cart) {
  return cart.reduce((accum, item) => accum + item.price, 0);
}
