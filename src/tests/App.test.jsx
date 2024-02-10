/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { expect, it } from "vitest";

describe("App component basics", () => {
  it("renders correct heading", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading").textContent).toMatch("fake shop");
  });
  it("renders correct links", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const links = screen.getAllByRole("link");
    const linkTexts = ["home", "shop", "cart"];

    links.forEach((link, index) => {
      expect(link.textContent).toMatch(linkTexts[index]);
    });
  });
});
