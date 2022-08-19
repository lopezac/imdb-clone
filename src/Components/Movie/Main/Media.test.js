import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import Media from "./Media";

const videosData = {results: [{name: "video1", key:"key1.mp4"}]};
const imagesData = {backdrops: [{file_path: "aurl.jpg"}], posters: [{file_path: "second.jpg"}]};

it.only("Media displays correctly", () => {
  render(<Media videos={videosData} images={imagesData} />);

  const backdrops = screen.getByText("Backdrops 1");
  const posters = screen.getByText("Posters 1");

  expect(screen.getByText("Media")).toBeTruthy();
  userEvent.click(backdrops); 
  expect(screen.getByAltText("").src).toContain("aurl.jpg");
  userEvent.click(posters); 
  expect(screen.getByAltText("").src).toContain("second.jpg");
});
