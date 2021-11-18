import { render } from "@testing-library/react";
import MainPageMovieCardList from "../MainPageMovieCardList";
import MovieCard from "../../../components/MovieCard/MovieCard";
import DataFromTMDB from "../../../mock-data/mockMovies";

jest.mock("../../../components/MovieCard/MovieCard", () => () => "MovieCard");
jest.mock("../../../mock-data/mockMovies", () => ({
  results: [{ id: 1 }, { id: 2 }, { id: 3 }],
}));

describe("MainPageMovieCardList", () => {
  it("should be rendered", () => {
    const { container } = render(<MainPageMovieCardList />);
    expect(container).toMatchSnapshot();
  });
});
