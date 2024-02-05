/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import App, { ShopDataContext } from "../App";

describe("App component", () => {
  it("renders correct heading", () => {
    const contextValue = {
      productData: {},
      setProductData: () => {},
      loadingData: false,
      setLoadingData: () => {},
      error: null,
      setError: () => {},
      cart: {},
      setCartItems: () => {},
    };

    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch("fake store");
  });
});
