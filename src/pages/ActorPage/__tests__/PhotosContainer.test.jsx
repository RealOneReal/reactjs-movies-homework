import { render } from "@testing-library/react";
import PhotosContainer from "../PhotosContainer";
import { photos } from "../../../mock-data/mockPersonDetails";

jest.mock("../../../mock-data/mockPersonDetails", () => {
  return {
    photos: [{}, {}, {}],
  };
});

describe("PhotosContainer", () => {
  it("should be rendered", () => {
    const { container } = render(<PhotosContainer />);
    expect(container).toMatchSnapshot();
  });
});
