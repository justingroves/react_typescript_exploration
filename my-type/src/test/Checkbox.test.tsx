import { expect, it } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { Checkbox } from "../Checkbox";

it("Selecting the checkbox should change the value of checked to true", () => {
  // const { getByLabelText } = render(<Checkbox />);
  // const checkbox = getByLabelText(/not checked/i) as HTMLInputElement;
  const { getByTestId } = render(<Checkbox />);
  const checkbox = getByTestId("checkbox") as HTMLInputElement;
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(false);
});
