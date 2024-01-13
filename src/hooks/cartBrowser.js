export default function cartBrowser(item, cart) {
  return cart.some((elem) => elem.id === item);
}
