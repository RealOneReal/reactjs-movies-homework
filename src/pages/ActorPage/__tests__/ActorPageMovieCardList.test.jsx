import { render } from "@testing-library/react";
import ActorPageMovieCardList from "../ActorPageMovieCardList";
import MovieCard from "../../../components/MovieCard/MovieCard";
import { movies } from "../../../mock-data/mockPersonDetails";

jest.mock("../../../mock-data/mockPersonDetails", () => ({
  __esModule: true,
  movies: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
}));
jest.mock("../../../components/MovieCard/MovieCard", () => () => "MovieCard");

describe("ActorPageMovieCardList", () => {
  it("should be rendered", () => {
    const { container } = render(<ActorPageMovieCardList />);
    expect(container).toMatchSnapshot();
  });
});
