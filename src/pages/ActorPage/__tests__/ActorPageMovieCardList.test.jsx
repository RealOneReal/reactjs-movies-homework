import { render } from "@testing-library/react";
import ActorPageMovieCardList from "../ActorPageMovieCardList";
import { movies } from "../../../mock-data/mockPersonDetails";

jest.mock("../../../mock-data/mockPersonDetails");

describe("ActorPageMovieCardList", () => {
  it("should be rendered", () => {
    const { container } = render(<ActorPageMovieCardList />);
    expect(container).toMatchSnapshot();
  });
});
