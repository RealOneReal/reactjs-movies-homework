import renderer from "react-test-renderer";
import MainPageContainer from "../MainPageContainer";
import MovieCardList from "../../../components/MovieCardList/MovieCardList";
import DataFromTMBd from "../../../mock-data/mockMovies";

jest.mock("../../../components/MovieCardList/MovieCardList", () => {
  return "MovieCardList";
});
jest.mock("../../../mock-data/mockMovies", () => {
  return {
    films: "Titanic,Batman,Brat 2",
  };
});

describe("MainPageContainer", () => {
  it("should be render", () => {
    const tree = renderer.create(<MainPageContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
