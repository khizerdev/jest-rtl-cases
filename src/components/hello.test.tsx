import { render, screen } from "@testing-library/react";
import Hello from "./hello";

test("Hello renders correctly", () => {
  render(<Hello />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Hello renders with a name", () => {
  render(<Hello name="John" />);
  const textElement = screen.getByText("Hello John");
  expect(textElement).toBeInTheDocument();
});
