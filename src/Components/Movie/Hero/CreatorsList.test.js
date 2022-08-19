import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import CreatorsList from "./CreatorsList";

const crewArray = [{name: "John Wayne", job:"Writer"}, {name: "Juan Cord", job:"screenplay"}, {name: "Pedro", job:"visual design"}]

it("CreatorsList displays correctly", () => {
  render(<CreatorsList crew={crewArray} />);

  expect(screen.getByText("John Wayne")).toBeTruthy();
  expect(screen.getByText("Writer")).toBeTruthy();

  expect(screen.getByText("Juan Cord")).toBeTruthy();
  expect(screen.getByText("Screenplay")).toBeTruthy();

  expect(screen.queryByText("Pedro")).toBeFalsy();
  expect(screen.queryByText("Visual Design")).toBeFalsy();
});
