import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import Collection from "./Collection";

it("Collection displays correctly", () => {
  render(<Collection data={{name: "Minions collection", backdrop_path:"./t.jpg"}} />);

  expect(screen.getByText("Part of the Minions collection")).toBeTruthy();
  expect(screen.getByRole("button")).toHaveTextContent("View the collection");
  expect(screen.getByAltText("Minions collection")).toBeTruthy();
});
