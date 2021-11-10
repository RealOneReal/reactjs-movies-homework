import { render } from "@testing-library/react";
import PlayInMovies from "../PlayInMovies";
import MovieCardList from "../../../components/MovieCardList/MovieCardList";
import { movies } from "../../../mock-data/mockPersonDetails";

jest.mock(
  "../../../components/MovieCardList/MovieCardList",
  () => () => "MovieCardList"
);

jest.mock("../../../mock-data/mockPersonDetails");

describe("PlayInMovies", () => {
  it("should be rendered", () => {
    const { container } = render(<PlayInMovies />);
    expect(container).toMatchSnapshot();
  });
});
