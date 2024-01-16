export default function totalPriceCounter(cart) {
  let cartWithTotals = cart.map((element) => {
    return { ...element, price: element.price * element.quantity };
  });

  return cartWithTotals.reduce((accum, item) => accum + item.price, 0);
}
