import renderer from "react-test-renderer";
import ActorPage from "../ActorPage";
import PhotosContainer from "../PhotosContainer";
import PlayInMovies from "../PlayInMovies";
import { person } from "../../../mock-data/mockPersonDetails";

jest.mock("../../../mock-data/mockPersonDetails", () => {
  return {
    person: {
      profile_path: "/123",
      name: "Leo",
      birthday: "19.02.1987",
      place_of_birth: "Brest",
      biography: "CoolMan",
    },
  };
});

jest.mock("../PhotosContainer", () => {
  return "PhtosContainer";
});
jest.mock("../PlayInMovies", () => {
  return "PlayInMovies";
});

describe("ActorPage", () => {
  it("should be render", () => {
    const tree = renderer.create(<ActorPage {...person} />);
    expect(tree).toMatchSnapshot();
  });
});
