import { render } from "@testing-library/react";
import PostersContainer from "../PostersContainer";

describe("PostersContainer", () => {
  it("should be rendered", () => {
    const { container } = render(<PostersContainer />);
    expect(container).toMatchSnapshot();
  });
});
