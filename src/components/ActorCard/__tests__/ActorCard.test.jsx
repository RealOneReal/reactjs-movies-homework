import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ActorCard from "../ActorCard";
import { truncateString } from "../../../utils/stringUtils";

const mockData = {
  id: 123,
  profile_path: "/123",
  name: "Michael Nordman",
  character: "Dude George",
};

jest.spyOn(window.console, "log");
jest.mock("../../../utils/stringUtils");
beforeEach(() => {
  truncateString
    .mockReturnValueOnce(mockData.name)
    .mockReturnValueOnce(mockData.character);
});

describe("ActorCard", () => {
  it("should be rendered", () => {
    const { container } = render(<ActorCard {...mockData} />);
    expect(container).toMatchSnapshot();
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
