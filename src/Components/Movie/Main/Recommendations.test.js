import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {BrowserRouter} from "react-router-dom";

import Recommendations from "./Recommendations";

it("Recommendations displays correctly", () => {
  render(<BrowserRouter><Recommendations data={[{id:11, name:"minions", img:"./h.jpg"}]} /></BrowserRouter>);

  expect(screen.getByText("minions")).toBeTruthy();
  expect(screen.getByAltText("minions")).toBeTruthy();
  expect(screen.getByRole("link").href).toContain("/movie/11");
});
