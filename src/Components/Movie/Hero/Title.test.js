import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import TitleHeader from "./Title";

it("Title displays correctly", () => {
  render(<TitleHeader title="Mega Minions" release_date="1999-11-01" />);

  expect(screen.getByText("Mega Minions")).toBeTruthy();
  expect(screen.getByText("(1999)")).toBeTruthy();
});
