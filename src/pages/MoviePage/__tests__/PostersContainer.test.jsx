import renderer from "react-test-renderer";
import PostersContainer from "../PostersContainer";

describe("PostersContainer", () => {
  it("should be render", () => {
    const tree = renderer.create(<PostersContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
