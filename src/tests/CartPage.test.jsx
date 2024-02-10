/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, it, vi } from "vitest";
import CartPage from "../components/CartPage";
import App from "../App";

describe("Cart page basics", () => {
  it("renders correct heading", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <CartPage />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading").textContent).toMatch(
      "Here be your shopping cart"
    );
  });
});
