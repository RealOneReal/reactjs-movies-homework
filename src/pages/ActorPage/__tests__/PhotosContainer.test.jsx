import renderer from "react-test-renderer";
import PhotosContainer from "../PhotosContainer";
import { photos } from "../../../mock-data/mockPersonDetails";

jest.mock("../../../mock-data/mockPersonDetails", () => {
  return {
    photos: [
      { file_path: "/123" },
      { file_path: "/122" },
      { file_path: "/121" },
    ],
  };
});

describe("PhotosContainer", () => {
  it("should be render", () => {
    const tree = renderer.create(<PhotosContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
