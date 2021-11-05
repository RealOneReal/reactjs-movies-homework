import renderer from "react-test-renderer";
import MoviePage from "../MoviePage";
import { movie } from "../../../mock-data/mockMovieDetail";
import MoviesRecommendations from "../MoviesRecommendations";
import PostersContainer from "../PostersContainer";
import ActorCardContainer from "../ActorCardContainer";

jest.mock("../MoviesRecommendations", () => {
  return "MoviesRecommendations";
});
jest.mock("../PostersContainer", () => {
  return "PostersContainer";
});
jest.mock("../ActorCardContainer", () => {
  return "ActorCardContainer";
});

describe("MoviePage", () => {
  it("should be render", () => {
    const tree = renderer.create(<MoviePage {...movie} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
