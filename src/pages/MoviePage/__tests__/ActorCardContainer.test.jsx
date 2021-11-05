import renderer from "react-test-renderer";
import ActorCardContainer from "../ActorCardContainer";
import ActorCardList from "../../../components/ActorCardList/ActorCardList";
import { credits } from "../../../mock-data/mockMovieDetail";

jest.mock("../../../mock-data/mockMovieDetail", () => {
  const credits = {
    cast: [
      "Titanic",
      "Batman",
      "Brat 1",
      "Brat 2",
      "Brat 3",
      "Brat 4",
      "Brat 5",
    ],
  };
  return { credits };
});
jest.mock("../../../components/ActorCardList/ActorCardList", () => {
  return "ActorCardList";
});

describe("ActorCardContainer", () => {
  it("should be render", () => {
    const tree = renderer.create(<ActorCardContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
