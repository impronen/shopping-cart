import cartBrowser from "./cartBrowser";

export default function setStuffToCart({
  itemID,
  title,
  image,
  price,
  cart,
  setCartItems,
}) {
  if (!cartBrowser(itemID, cart)) {
    setCartItems((cart) => [
      ...cart,
      { id: itemID, title, image, price, quantity: +1 },
    ]);
  } else {
    setCartItems((cart) =>
      cart.map((item) =>
        item.id === itemID ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }
}
