/* eslint-disable no-unused-vars */
import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";
import TotalDisplayer from "./TotalDisplayer";
import numberFormatter from "../hooks/numberFormatter";
import totalPriceCounter from "../hooks/totalPriceCounter";

export default function CartPage() {
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

  const totalPrice = numberFormatter(totalPriceCounter(cart));

  return (
    <div className="flex flex-col align-center min-h-full">
      <h1 className="font-medium text-2xl text-peach-highlight text-center my-12">
        Here be your shopping cart
      </h1>
      <ul className="flex flex-col self-center justify-center justify-self-center w-10/12 border-y-2 py-12 border-burning-orange">
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      </ul>
      <div className="flex flex-row justify-end  self-center my-8 mx-5 w-11/12 ">
        <TotalDisplayer totalPrice={totalPrice} />
      </div>
    </div>
  );
}
