import "@testing-library/jest-dom";
import {render,screen} from "@testing-library/react";

import Overview from "./Overview";

it("Overview displays correctly", () => {
  render(<Overview tagline="some excellent tagline" overview="some random ov"/>); 

  expect(screen.getByText("some excellent tagline")).toBeTruthy();
  expect(screen.getByText("some random ov")).toBeTruthy();
  expect(screen.getByText("Overview")).toBeTruthy();
});
