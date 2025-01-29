import { render, screen } from "@testing-library/react";
import Title from "./Title";
import "@testing-library/jest-dom";

describe("Title", () => {
  test("has title", () => {
    render(<Title>Bienvenido</Title>);
    const title = screen.getByRole("heading", { name: "Bienvenido" });
    expect(title).toBeVisible();
  });
});
