import { render, screen, fireEvent } from "@testing-library/react";
import MovieCard from "../MovieCard";
import userEvent from "@testing-library/user-event";
import { truncateString } from "../../../utils/stringUtils";

const mockData = {
  originalTitle: "Ninja",
  genreIds: ["comedy", "history"],
  id: 123,
  voteAverage: 9,
};
jest.spyOn(window.console, "log");
jest.mock("../../../utils/stringUtils", () => ({
  __esModule: true,
  truncateString: jest.fn(),
}));

beforeEach(() => {
  truncateString
    .mockReturnValueOnce(mockData.originalTitle)
    .mockReturnValueOnce("comedy history");
});

describe("MovieCard", () => {
  it("should be rendered", () => {
    const { container } = render(<MovieCard {...mockData} />);
    expect(container).toMatchSnapshot();
  });
  it("should  be clickable", () => {
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
