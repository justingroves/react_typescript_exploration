import { expect, it } from "vitest";
import Star from "../Star";
import { render } from "@testing-library/react";

it("renders a star", () => {
  const { getByText } = render(<Star />);
  const h1 = getByText(/Great Star/);
  expect(h1).toHaveTextContent("Great Star");
  expect(document.querySelector("svg")).toHaveAttribute("id", "star");
});
