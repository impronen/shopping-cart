import cartBrowser from "./cartBrowser";

function addToCart({ itemID, title, image, price, cart, setCartItems }) {
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

function removeFromCart({ itemID, cart, setCartItems }) {
  console.log(itemID);
  console.log(`console logging inside the remove function ${cart}`);
  setCartItems((cart) => cart.filter((item) => item.id !== itemID));
}

export default function setStuffToCart({
  itemID,
  title,
  image,
  price,
  cart,
  setCartItems,
  action,
}) {
  if (action === "add") {
    addToCart({ itemID, title, image, price, cart, setCartItems });
  } else if (action === "remove") {
    removeFromCart({ itemID, cart, setCartItems });
  }
}
