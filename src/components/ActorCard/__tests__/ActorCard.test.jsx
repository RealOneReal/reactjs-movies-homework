import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react";
import ActorCard from "../ActorCard";
import userEvent from "@testing-library/user-event";

const mockData = {
  id: 123,
  profile_path: "/123",
  name: "Michael Nordman",
  character: "Dude George",
};

jest.spyOn(window.console, "log");

describe("ActorCard", () => {
  it("should be render", () => {
    const tree = renderer.create(<ActorCard {...mockData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should be clickable", () => {
    render(<ActorCard {...mockData} />);
    const card = screen.getByAltText(/Michael Nordman/i);
    userEvent.click(card);
    expect(console.log).toBeCalled();
  });
  it("should have broken image at background on fallback", () => {
    render(<ActorCard {...mockData} />);
    const image = screen.getByAltText(/Michael Nordman/i);
    fireEvent.error(image);
    expect(image.src).toMatch(/broken-image.png$/i);
  });
});
