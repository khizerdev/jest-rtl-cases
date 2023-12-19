import { render, screen } from "@testing-library/react";
import Hello from "./hello";

describe("Hello", () => {
  test("renders correctly", () => {
    render(<Hello />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  describe("With name", () => {
    test("renders correctly", () => {
      render(<Hello name="John" />);
      const textElement = screen.getByText("Hello John");
      expect(textElement).toBeInTheDocument();
    });
  });
});
