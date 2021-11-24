import { render } from "@testing-library/react";
import MainPage from "../MainPage";
import MainPageMovieCardList from "../MainPageMovieCardList";
import CategoriesToggleButtons from "../../../components/CategoriesToggleButtons/CategoriesToggleButtons";
import MoviesPagination from "../../../components/MoviesPagination/MoviesPagination";

jest.mock("../MainPageMovieCardList", () => () => "MainPageMovieCardList");
jest.mock(
  "../../../components/CategoriesToggleButtons/CategoriesToggleButtons",
  () => () => "CategoriesToggleButtons"
);
jest.mock(
  "../../../components/MoviesPagination/MoviesPagination",
  () => () => "MoviesPaggination"
);

describe("MainPage", () => {
  it("should be rendered", () => {
    const { container } = render(<MainPage />);
    expect(container).toMatchSnapshot();
  });
});
