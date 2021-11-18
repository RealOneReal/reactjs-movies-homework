import { render } from "@testing-library/react";
import MoviePageMovieCardList from "../MoviePageMovieCardList";
import MovieCard from "../../../components/MovieCard/MovieCard";
import DataFromTMDB from "../../../mock-data/mockMovies";

jest.mock("../../../mock-data/mockMovies", () => ({
  results: [{ id: 1 }, { id: 2 }, { id: 3 }],
}));
jest.mock("../../../components/MovieCard/MovieCard", () => () => "MovieCard");

describe("MoviePageMovieCardList", () => {
  it("should be rendered", () => {
    const { container } = render(<MoviePageMovieCardList />);
    expect(container).toMatchSnapshot();
  });
});
