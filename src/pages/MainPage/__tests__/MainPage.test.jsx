import { render } from "@testing-library/react";
import MainPage from "../MainPage";
import MainPageContainer from "../MainPageContainer";
import CategoriesToggleButtons from "../../../components/CategoriesToggleButtons/CategoriesToggleButtons";
import MoviesPagination from "../../../components/MoviesPagination/MoviesPagination";

jest.mock("../MainPageContainer", () => () => "MainPageContainer");
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
