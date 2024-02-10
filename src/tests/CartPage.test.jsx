/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import CartPage from "../components/CartPage";
import { RenderRouteWithOutletContext } from "./RenderRouteWithOutletContext";

const contextData = {
  productData: [
    // mock product data
  ],
  setProductData: vi.fn(),
  loadingData: false,
  setLoadingData: vi.fn(),
  error: null,
  setError: vi.fn(),
  cart: [
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
    ],
  ],
  setCartItems: vi.fn(),
};

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
