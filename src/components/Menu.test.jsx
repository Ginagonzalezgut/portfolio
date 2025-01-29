import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Menu from "./Menu";

describe("Menu", () => {
  test("has links", () => {
    render(<Menu />);
    expect(screen.getByRole("link", { name: "Home" })).toBeVisible();
  });
});
