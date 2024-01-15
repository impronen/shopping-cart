import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "../assets/Spinner.svg";
import CartItem from "./CartItem";

export default function CartPage() {
  const testObject = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    quantity: 2,
  };

  const [
    productData,
    setProductData,
    loadingData,
    setLoadingData,
    error,
    setError,
    cart,
    setCartItems,
  ] = useOutletContext();
  return (
    <>
      <h1 className="font-medium text-2xl text-peach-highlight text-center m-4">
        Here be your shopping cart
      </h1>
      <ul className="flex flex-column justify-center w-11/12">
        <CartItem
          itemID={testObject.id}
          title={testObject.title}
          image={testObject.image}
          price={testObject.price}
          quantity={testObject.quantity}
        />
      </ul>
    </>
  );
}
