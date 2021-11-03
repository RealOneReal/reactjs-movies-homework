import renderer from "react-test-renderer";
import MoviesPagination from "../MoviesPagination";

describe("MoviesPagination", () => {
  it("should be render", () => {
    const tree = renderer.create(<MoviesPagination />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
