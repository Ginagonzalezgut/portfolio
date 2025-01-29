import { render, screen } from "@testing-library/react";
import { default as Footer } from "./Footer";
import "@testing-library/jest-dom";

describe("Footer", () => {
  test("Has a Logo", () => {
    render(<Footer />);
    expect(
      screen.getByRole("img", {
        name: "Gina`s Logo",
      })
    ).toBeVisible;
  });
});
