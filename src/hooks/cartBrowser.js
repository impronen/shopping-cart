export default function cartBrowser(item, cart) {
  console.log(item);
  return cart.some((elem) => elem.id === item);
}
