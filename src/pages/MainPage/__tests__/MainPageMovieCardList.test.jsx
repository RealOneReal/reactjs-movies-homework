import { render } from "@testing-library/react";
import MainPageMovieCardList from "../MainPageMovieCardList";

describe("MainPageMovieCardList", () => {
  it("should be rendered", () => {
    const { container } = render(<MainPageMovieCardList />);
    expect(container).toMatchSnapshot();
  });
});
