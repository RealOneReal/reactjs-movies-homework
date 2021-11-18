import { render } from "@testing-library/react";
import ActorCard from "../../../components/ActorCard/ActorCard";
import ActorCardList from "../ActorCardList";

jest.mock("../../../components/ActorCard/ActorCard", () => () => "ActorCard");

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

describe("ActorCardList", () => {
  it("should be rendered", () => {
    const { container } = render(<ActorCardList {...mockData} />);
    expect(container).toMatchSnapshot();
  });
});
