import { render } from "@testing-library/react";
import MovieCard from "../../MovieCard/MovieCard";
import MovieCardList from "../MovieCardList";

const mockData = {
  results: [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ],
};

jest.mock("../../MovieCard/MovieCard", () => () => "MovieCard");

describe("MovieCardList", () => {
  it("should be rendered", () => {
    const { container } = render(<MovieCardList {...mockData} />);
    expect(container).toMatchSnapshot();
  });
});
