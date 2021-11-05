import renderer from "react-test-renderer";
import MoviesRecommendations from "../MoviesRecommendations";
import MovieCardList from "../../../components/MovieCardList/MovieCardList";
import DataFromTMDB from "../../../mock-data/mockMovies";

jest.mock("../../../components/MovieCardList/MovieCardList", () => {
  return "MovieCardList";
});

jest.mock("../../../mock-data/mockMovies", () => {
  return {
    results: ["Leo", "Kate", "Mishka", "Peter", "Michael", "George", "Alex"],
  };
});

describe("", () => {
  it("should be render", () => {
    const tree = renderer.create(<MoviesRecommendations />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
