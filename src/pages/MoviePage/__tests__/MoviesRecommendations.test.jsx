import { render } from "@testing-library/react";
import MoviesRecommendations from "../MoviesRecommendations";
import MovieCardList from "../../../components/MovieCardList/MovieCardList";

jest.mock(
  "../../../components/MovieCardList/MovieCardList",
  () => () => "MovieCardList"
);

describe("MoviesRecommendations", () => {
  it("should be rendered", () => {
    const { container } = render(<MoviesRecommendations />);
    expect(container).toMatchSnapshot();
  });
});
