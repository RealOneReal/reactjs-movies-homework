import renderer from "react-test-renderer";
import PlayInMovies from "../PlayInMovies";
import MovieCardList from "../../../components/MovieCardList/MovieCardList";
import { movies } from "../../../mock-data/mockPersonDetails";

jest.mock("../../../components/MovieCardList/MovieCardList", () => {
  return "MovieCardList";
});
jest.mock("../../../mock-data/mockPersonDetails", () => {
  const movies = { cast: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };
  return { movies };
});

describe("PlayInMovies", () => {
  it("should be render", () => {
    const tree = renderer.create(<PlayInMovies />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
