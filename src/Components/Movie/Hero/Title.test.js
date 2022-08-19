import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import Title from "./Title";

it("Title displays correctly", () => {
  render(<Title title="Mega Minions" release_date="1999-11-01" />);

  expect(screen.getByText("Mega Minions")).toBeTruthy();
  expect(screen.getByText("(1999)")).toBeTruthy();
});
