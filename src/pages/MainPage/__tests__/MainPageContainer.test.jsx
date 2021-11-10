import { render } from "@testing-library/react";
import MainPageContainer from "../MainPageContainer";
import MovieCardList from "../../../components/MovieCardList/MovieCardList";

jest.mock(
  "../../../components/MovieCardList/MovieCardList",
  () => () => "MovieCardList"
);

describe("MainPageContainer", () => {
  it("should be rendered", () => {
    const { container } = render(<MainPageContainer />);
    expect(container).toMatchSnapshot();
  });
});
