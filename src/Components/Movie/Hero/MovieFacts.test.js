import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MovieFacts from "./MovieFacts";

it("MovieFacts renders correctly", () => {
  render(
    <MovieFacts
      release_date="1999-11-11"
      genres={[{ name: "Action" }]}
      runtime="90"
    />
  );

  expect(screen.getByText("11/11/1999")).toBeTruthy();
  expect(screen.getByText("Action")).toBeTruthy();
  expect(screen.getByText("1h 30m")).toBeTruthy();
});
