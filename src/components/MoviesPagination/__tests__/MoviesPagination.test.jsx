import { render } from "@testing-library/react";
import MoviesPagination from "../MoviesPagination";

const mockData = {
  totalPages: 10,
  page: 5,
};

describe("MoviesPagination", () => {
  it("should be rendered", () => {
    const { container } = render(<MoviesPagination {...mockData} />);
    expect(container).toMatchSnapshot();
  });
});
