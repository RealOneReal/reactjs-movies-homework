import { render } from "@testing-library/react";
import ActorPage from "../ActorPage";
import PhotosContainer from "../PhotosContainer";
import PlayInMovies from "../PlayInMovies";
import { person } from "../../../mock-data/mockPersonDetails";

jest.mock("../../../mock-data/mockPersonDetails", () => ({
  person: {
    profilePath: "/123",
    name: "Leo",
    birthday: "19.02.1987",
    placeOfBirth: "Brest",
    biography: "CoolMan",
  },
}));

jest.mock("../PhotosContainer", () => () => "PhtosContainer");
jest.mock("../PlayInMovies", () => () => "PlayInMovies");

describe("ActorPage", () => {
  it("should be rendered", () => {
    const { container } = render(<ActorPage {...person} />);
    expect(container).toMatchSnapshot();
  });
});
