import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import MovieCard from "../MovieCard";
import userEvent from "@testing-library/user-event";

const mockData = {
  original_title: "Ninja",
  genre_ids: ["comedy", "history"],
  id: 123,
  vote_average: 9,
};
jest.spyOn(window.console, "log");

describe("MovieCard", () => {
  it("should be render", () => {
    const tree = renderer.create(<MovieCard {...mockData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should hover and be clickable", () => {
    render(<MovieCard {...mockData} />);
    const card = screen.getByText(/Ninja/i);
    userEvent.click(card);
    expect(console.log).toBeCalled();
  });
  it("should have broken image on background in fallback", () => {
    render(<MovieCard {...mockData} />);
    const image = screen.getByAltText(/Ninja/i);
    fireEvent.error(image);
    expect(image.src).toMatch(/broken-image.png$/i);
  });
});