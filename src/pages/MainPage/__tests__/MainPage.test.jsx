import renderer from "react-test-renderer";
import MainPage from "../MainPage";
import MainPageContainer from "../MainPageContainer";
import CategoriesToggleButtons from "../../../components/CategoriesToggleButtons/CategoriesToggleButtons";
import MoviesPagination from "../../../components/MoviesPagination/MoviesPagination";
import DataFromTMBD from "../../../mock-data/mockMovies";

jest.mock("../MainPageContainer", () => {
  return "MainPageContainer";
});
jest.mock(
  "../../../components/CategoriesToggleButtons/CategoriesToggleButtons",
  () => {
    return "CategoriesToggleButtons";
  }
);
jest.mock("../../../components/MoviesPagination/MoviesPagination", () => {
  return "MoviesPaggination";
});
jest.mock("../../../mock-data/mockMovies", () => {
  return { data: "mock data" };
});

describe("MainPage", () => {
  it("should be render", () => {
    const tree = renderer.create(<MainPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
