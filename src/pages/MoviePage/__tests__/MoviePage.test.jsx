import { render } from "@testing-library/react";
import MoviePage from "../MoviePage";
import MoviesRecommendations from "../MoviesRecommendations";
import PostersContainer from "../PostersContainer";
import ActorCardContainer from "../ActorCardContainer";

jest.mock("../MoviesRecommendations", () => () => "MoviesRecommendations");
jest.mock("../PostersContainer", () => () => "PostersContainer");
jest.mock("../ActorCardContainer", () => () => "ActorCardContainer");

const mockData = {
  posterPath: "/123",
  voteAverage: 5,
  title: "Matrix",
  overview: "nice movie",
  releaseDate: "18.02.1998",
  revenue: "1.000.000",
  runtime: 300,
  genres: [{ name: "comedy" }, { name: "action" }],
};

describe("MoviePage", () => {
  it("should be rendered", () => {
    const { container } = render(<MoviePage {...mockData} />);
    expect(container).toMatchSnapshot();
  });
});
