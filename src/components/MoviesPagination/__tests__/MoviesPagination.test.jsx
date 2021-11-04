import renderer from "react-test-renderer";
import MoviesPagination from "../MoviesPagination";

const mockData = {
  total_pages: 10,
  page: 5,
};

describe("MoviesPagination", () => {
  it("should be render", () => {
    const tree = renderer.create(<MoviesPagination {...mockData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
