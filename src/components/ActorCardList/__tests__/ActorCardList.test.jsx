import renderer from "react-test-renderer";
import ActorCard from "../../ActorCard/ActorCard";
import ActorCardList from "../ActorCardList";

const mockData = {
  cast: [
    {
      name: "Leo",
      id: 1,
    },
    {
      name: "Kate",
      id: 2,
    },
    {
      name: "Mishka",
      id: 3,
    },
  ],
};

jest.mock("../../ActorCard/ActorCard", () => {
  return `ActorCard`;
});

describe("ActorCardList", () => {
  it("should be render", () => {
    const tree = renderer.create(<ActorCardList {...mockData} />);
    expect(tree).toMatchSnapshot();
  });
});
