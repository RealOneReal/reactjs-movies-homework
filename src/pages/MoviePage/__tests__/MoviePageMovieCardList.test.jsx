import { render } from "@testing-library/react";
import MoviePageMovieCardList from "../MoviePageMovieCardList";
import ActorCard from "../../../components/ActorCard/ActorCard";
import DataFromTMDB from "../../../mock-data/mockMovies";

jest.mock("../../../mock-data/mockMovies");
jest.mock("../../../components/ActorCard/ActorCard", () => () => "ActorCard");

describe("MoviePageMovieCardList", () => {
  it("should be rendered", () => {
    const { container } = render(<MoviePageMovieCardList />);
    expect(container).toMatchSnapshot();
  });
});
