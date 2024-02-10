/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import CartPage from "../components/CartPage";
import { RenderRouteWithOutletContext } from "./RenderRouteWithOutletContext";

const contextData = [
  [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  ],
  vi.fn(), // setProductData
  false, // loadingData
  vi.fn(), // setLoadingData
  null, // error
  vi.fn(), // setError
  [
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      price: 22.3,
      quantity: 1,
    },
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 109.95,
      quantity: 1,
    },
  ], // cart
  vi.fn(), // setCartItems
];

describe("Cart page basics", () => {
  it("renders correct heading", () => {
    render(
      <RenderRouteWithOutletContext context={contextData}>
        <CartPage />
      </RenderRouteWithOutletContext>
    );
    expect(screen.getByRole("heading").textContent).toMatch(
      "Here be your shopping cart"
    );
  });
});
